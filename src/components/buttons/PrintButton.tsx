import React from "react";
import ButtonTertiary from "./ButtonTertiary";
import SVGpdfDownload from "../SVGs/INFO/SVGpdfDownload";
import { usePrintState } from "../Hooks/isPrinting";

/*SVG CONSTS*/ const fill_Two_svg = "currentColor";
/*SVG CONSTS*/ const width_svg = 20;
/*SVG CONSTS*/ const height_svg = 20;

const PrintButton: React.FC = () => {
  const { startPrinting } = usePrintState();

  return (
    <ButtonTertiary
      buttonContent="Imprimir"
      onClick={startPrinting}
      className="py-2 pl-2 pr-3 bg-accent hover:bg-primary text-text hover:text-text-dark font-oswald uppercase flex items-center justify-center"
    >
      <SVGpdfDownload
        width={width_svg}
        height={height_svg}
        fill_one="none"
        fill_two={fill_Two_svg}
      />
    </ButtonTertiary>
  );
};

export default PrintButton;
