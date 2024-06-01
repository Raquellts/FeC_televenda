import * as React from "react";
import { SVGInterface } from "../SVGInterface";

const SVGCompany = ({
  width,
  height,
  fill_one,
  fill_two,
}: SVGInterface & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
  >
    <g fill={fill_one} fillRule="nonzero">
      <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z" />
      <path
        fill={fill_two}
        d="M13 3a2 2 0 0 1 1.995 1.85L15 5v4h3a2 2 0 0 1 1.995 1.85L20 11v8h1a1 1 0 0 1 .117 1.993L21 21H3a1 1 0 0 1-.117-1.993L3 19h1V5a2 2 0 0 1 1.85-1.995L6 3h7Zm5 8h-3v8h3v-8Zm-5-6H6v14h7V5Zm-2 10v2H8v-2h3Zm0-4v2H8v-2h3Zm0-4v2H8V7h3Z"
      />
    </g>
  </svg>
);
export default SVGCompany;
