import * as React from "react";
import { SVGInterface } from "../SVGInterface";

const SVGLogin = ({
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
        d="M12 3a1 1 0 0 1 .117 1.993L12 5H7a1 1 0 0 0-.993.883L6 6v12a1 1 0 0 0 .883.993L7 19h4.5a1 1 0 0 1 .117 1.993L11.5 21H7a3 3 0 0 1-2.995-2.824L4 18V6a3 3 0 0 1 2.824-2.995L7 3h5Zm2.293 5.464a1 1 0 0 1 1.497 1.32l-.083.095L14.586 11H20a1 1 0 0 1 .117 1.993L20 13h-5.414l1.121 1.121a1 1 0 0 1-1.32 1.498l-.094-.083-2.829-2.829a1 1 0 0 1-.083-1.32l.083-.094 2.829-2.829Z"
      />
    </g>
  </svg>
);
export default SVGLogin;
