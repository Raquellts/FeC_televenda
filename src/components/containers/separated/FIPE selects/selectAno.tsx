import React, { useState, useEffect } from "react";
import { GetAnos } from "../../../../../APIVeiculos";
import { Iano } from "../../../../../InterfaceAPIVeiculo";

interface SelectAnoProps {
  selectedType: string;
  selectedMarcaCodigo: string;
  selectedModeloCodigo: number;
  className?: string;
}

const SelectAno: React.FC<SelectAnoProps> = ({
  selectedType,
  selectedMarcaCodigo,
  selectedModeloCodigo,
  className,
}) => {
  const [anos, setAnos] = useState<Iano[] | null>(null);
  const [isSelectClicked, setIsSelectClicked] = useState(false);
  const tipoSelecionado = selectedType;
  const marcaSelecionada = selectedMarcaCodigo;
  const modeloSelecionado = selectedModeloCodigo;

  useEffect(() => {
    setAnos(null); // Clear anos when selectedType, selectedMarca, or selectedModelo changes
  }, [selectedType, selectedMarcaCodigo, selectedModeloCodigo]);

  const fetchAnos = async () => {
    try {
      if (selectedModeloCodigo) {
        const response = await GetAnos(
          selectedType,
          selectedMarcaCodigo,
          selectedModeloCodigo.toString()
        );
        setAnos(response);
      }
    } catch (error) {
      console.error("Error fetching anos:", error);
    }
  };

  const handleAnosClick = () => {
    setIsSelectClicked(true);
    if (!anos) {
      fetchAnos();
    }
  };

  return (
    <select className={className} onClick={handleAnosClick}>
      {anos?.map((ano) => (
        <option key={ano.codigo} value={ano.nome}>
          {ano.nome}
        </option>
      ))}
      {/* verifica se o array de anos está vazio */}
      {anos?.length === 0 && <option>Nenhum ano encontrado</option>}

      {/* verifica se ANO = NULL e TIPO: VAZIO */}
      {anos === null && tipoSelecionado === "" && (
        <option>Selecione um tipo...</option>
      )}

      {/* verifica se ANO = NULL, MARCA: VAZIA e TIPO SELECIONADO */}
      {anos === null && marcaSelecionada === "" && tipoSelecionado !== "" && (
        <option>Selecione uma marca...</option>
      )}

      {/* verifica se ANO = NULL, MODELO: VAZIO e MARCA SELECIONADA */}
      {anos === null && modeloSelecionado === 0 && marcaSelecionada !== "" && (
        <option>Selecione um modelo...</option>
      )}

      {/* verifica se ANO = NULL e MODELO SELECIONADO */}
      {anos === null && modeloSelecionado !== 0 && <option>Ano ↴</option>}

      {/* LOADING isClicked FALSE ----- verifica se MARCAS = NULL */}
      {isSelectClicked && anos === null && (
        <option value="" disabled>
          Carregando anos, aguarde...
        </option>
      )}
    </select>
  );
};

export default SelectAno;
