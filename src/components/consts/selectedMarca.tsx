import { useState, useCallback, useEffect } from "react";
import { Imarca } from "../../../APIVeiculos";

const useSelectedMarca = (marcas: Imarca[] | null) => {
  const [selectedMarca, setSelectedMarca] = useState<string | null>(null);

  const handleMarcaChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      console.log("Selected marca:", event.target.value);
      setSelectedMarca(event.target.value);
    },
    []
  );

  useEffect(() => {
    if (marcas && marcas.length > 0) {
      console.log(
        "Setting default selected marca:",
        marcas[0].nome || marcas[0].codigo
      );
      setSelectedMarca(marcas[0].nome || marcas[0].codigo);
    }
  }, [marcas]);

  return { selectedMarca, handleMarcaChange };
};

export default useSelectedMarca;
