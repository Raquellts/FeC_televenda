import { useState, useCallback, useEffect } from "react";
import { GetMarcas } from "../../../APIVeiculos";

const useSelectedTipo = () => {
  const [selectedTipo, setSelectedTipo] = useState<string>("");

  const handleTipoChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedTipo(event.target.value);
    },
    []
  );

  const fetchMarcas = useCallback(async () => {
    const fetchedMarcas = await GetMarcas(selectedTipo || "carros");
    if (fetchedMarcas?.marcas) {
      return fetchedMarcas.marcas;
    } else {
      console.error("Invalid API response format: marcas array missing");
      return null;
    }
  }, [selectedTipo]);

  useEffect(() => {
    fetchMarcas();
  }, [fetchMarcas]);

  return { selectedTipo, handleTipoChange, fetchMarcas };
};

export default useSelectedTipo;
