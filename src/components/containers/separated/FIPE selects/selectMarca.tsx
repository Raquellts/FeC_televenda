import React, { useState, useEffect } from "react";
import { GetMarcas } from "../../../../../APIVeiculos";
import { Imarca } from "../../../../../InterfaceAPIVeiculo";

interface SelectMarcaProps {
  className?: string;
  selectedType: string;
  onMarcaChange: (selectedMarca: { codigo: string; nome: string }) => void;
}

const SelectMarca: React.FC<SelectMarcaProps> = ({
  selectedType,
  onMarcaChange,
  className,
}) => {
  const [marcas, setMarcas] = useState<Imarca[] | null>(null);
  const [isSelectClicked, setIsSelectClicked] = useState(false);
  const tipoSelecionado = selectedType;

  useEffect(() => {
    setMarcas(null); // Clear marcas when selectedType changes
  }, [selectedType]);

  const fetchMarcas = async () => {
    try {
      const response = await GetMarcas(selectedType);
      setMarcas(response);
    } catch (error) {
      console.error("Error fetching marcas:", error);
    }
  };

  const handleMarcasClick = () => {
    setIsSelectClicked(true);
    if (!marcas) {
      fetchMarcas();
    }
  };

  const handleMarcaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = e.target.selectedOptions[0];
    const selectedMarca = {
      codigo: selectedOption.getAttribute("data-codigo") || "",
      nome: selectedOption.value,
    };
    onMarcaChange(selectedMarca);
  };

  return (
    <select
      className={`${className}`}
      onClick={handleMarcasClick}
      onChange={handleMarcaChange}
    >
      {marcas?.map((marca) => (
        <option
          key={marca.codigo}
          value={marca.nome}
          data-codigo={marca.codigo}
        >
          {marca.nome}
        </option>
      ))}
      {/* verifica se o array de marcas está vazio */}
      {marcas?.length === 0 && <option>Nenhuma marca encontrada</option>}

      {/* verifica se MARCAS = NULL e TIPO = VAZIO */}
      {marcas === null && tipoSelecionado === "" && (
        <option>selecione um tipo...</option>
      )}

      {/* verifica se TIPO SELECIONADO */}
      {tipoSelecionado !== "" && <option value="">Marca ↴</option>}

      {/* LOADING isClicked FALSE ----- verifica se MARCAS = NULL */}
      {isSelectClicked && marcas === null && (
        <option value="" disabled>
          Carregando marcas, aguarde...
        </option>
      )}
    </select>
  );
};

export default SelectMarca;
