import React, { useState, useEffect } from "react";
import { GetModelos } from "../../../../../APIVeiculos";
import { IgetModelos } from "../../../../../InterfaceAPIVeiculo";

interface SelectModeloProps {
  selectedType: string;
  selectedMarcaCodigo: string;
  className?: string;
  onModeloChange: (selectedModelo: { codigo: number; nome: string }) => void;
}

const SelectModelo: React.FC<SelectModeloProps> = ({
  selectedType,
  selectedMarcaCodigo,
  className,
  onModeloChange,
}) => {
  const [modelos, setModelos] = useState<IgetModelos | null>(null);
  const [isSelectClicked, setIsSelectClicked] = useState(false);
  const tipoSelecionado = selectedType;
  const marcaSelecionada = selectedMarcaCodigo;

  useEffect(() => {
    setModelos(null); // Clear modelos when selectedType or selectedMarca changes
  }, [selectedType, selectedMarcaCodigo]);

  const fetchModelos = async () => {
    try {
      const response = await GetModelos(selectedType, selectedMarcaCodigo);
      setModelos(response);
    } catch (error) {
      console.error("Error fetching modelos:", error);
    }
  };

  const handleModelosClick = () => {
    setIsSelectClicked(true);
    if (!modelos) {
      fetchModelos();
    }
  };

  const handleModeloChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = e.target.selectedOptions[0];
    const selectedModelo = {
      codigo: Number(selectedOption.getAttribute("data-codigo")),
      nome: selectedOption.value,
    };
    onModeloChange(selectedModelo);
  };

  return (
    <select
      className={`${className}`}
      onClick={handleModelosClick}
      onChange={handleModeloChange}
    >
      {modelos?.modelos.map((modelo) => (
        <option
          key={modelo.codigo}
          value={modelo.nome}
          data-codigo={modelo.codigo}
        >
          {modelo.nome}
        </option>
      ))}
      {/* verifica se o array de modelos está vazio */}
      {modelos?.modelos.length === 0 && (
        <option>Nenhum modelo encontrado</option>
      )}
      {/* verifica se MODELOS = NULL e TIPO = VAZIO */}
      {modelos === null && tipoSelecionado === "" && (
        <option>selecione um tipo...</option>
      )}
      {/* verifica se MODELO = NULL, MARCA = VAZIA e TIPO SELECIONADO */}
      {modelos === null &&
        marcaSelecionada === "" &&
        tipoSelecionado !== "" && <option>Selecione uma marca...</option>}

      {/* verifica se MODELO = NULL e MARCA SELECIONADA */}
      {modelos === null && marcaSelecionada !== "" && <option>Modelo ↴</option>}

      {/* LOADING isClicked FALSE ----- verifica se MODELO = NULL */}
      {isSelectClicked && modelos === null && (
        <option value="" disabled>
          Carregando modelos, aguarde...
        </option>
      )}
    </select>
  );
};

export default SelectModelo;
