import React, { useState } from "react";

interface SelectTipoProps {
  onTypeChange: (selectedType: string) => void;
  className?: string;
}

const SelectTipo: React.FC<SelectTipoProps> = ({ onTypeChange, className }) => {
  const [selectedType, setSelectedType] = useState("");

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    setSelectedType(selected);
    onTypeChange(selected);
  };

  return (
    <select
      className={`${className}`}
      value={selectedType}
      onChange={handleTypeChange}
    >
      <option value="" disabled>
        Tipo ↴
      </option>
      <option value="carros">Carro</option>
      <option value="motos">Moto</option>
      <option value="caminhoes">Caminhão</option>
    </select>
  );
};

export default SelectTipo;
