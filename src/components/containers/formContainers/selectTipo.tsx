import { useState, useEffect } from "react";
import { GetMarcas } from "../../../../APIVeiculos";
import { Imarcas } from "../../../../InterfaceAPIVeiculo";

// Define the Imarca interface here or import it from your API functions file

const SelectTipo = () => {
  const [selectedType, setSelectedType] = useState("carro");
  const [marcas, setMarcas] = useState<Imarcas>();

  useEffect(() => {
    const fetchMarcas = async () => {
      try {
        const response = await GetMarcas(selectedType);
        setMarcas(response);
      } catch (error) {
        console.error("Error fetching marcas:", error);
      }
    };

    fetchMarcas();
  }, [selectedType]);

  return (
    <div>
      <select
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
      >
        <option value="carro">Carro</option>
        <option value="moto">Moto</option>
        <option value="caminhao">Caminhão</option>
      </select>
      <div>
        <ul>
          {marcas?.marcas.map((marca) => (
            <li key={marca.codigo}>{marca.nome}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SelectTipo;
