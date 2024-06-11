import { useState } from "react";
import { Etheme } from "../../themeConsts";
import useUpdateTheme from "../Hooks/updateTheme";
import style from "./Loading.module.css";

const Loading = (theme: { theme: Etheme }) => {
  /*THEME*/ const themes = theme.theme;
  /*THEME*/ const [newtheme, setNewtheme] = useState(themes);
  /*THEME*/ useUpdateTheme(theme, setNewtheme);
  return (
    <div>
      <div className={style.loader}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="371"
          height="484"
          fill="none"
          viewBox="0 0 371 484"
          className={`${style.logo} ${
            newtheme === Etheme.light ? "dark_filter" : "light_filter"
          }`}
        >
          <path
            stroke="#000"
            strokeWidth="8"
            d="M149.2 201.647c-25.413-36.677-23.057-79.723 0-102.118m0 102.118l74.25 131.765M149.2 201.647h-36.3m36.3 0c-16.5 19.765-20.625 32.941-23.1 67.529m23.1-169.647c.669-15.56 1.979-21.476 4.95-28H79.9v130.118h33m36.3-102.118l74.25 120.236m0 113.647c39.6-23.059 23.1-80.706 0-113.647m0 113.647V379.529c0 44.471 74.25 42.824 74.25 0v-82.353H367v82.353C367 430.588 327.4 480 260.575 480 193.75 480 149.2 435.529 149.2 379.529v-46.117m74.25-113.647v-23.059m-97.35 72.47h23.1v64.236m-23.1-64.236c0 24.706 4.95 47.765 23.1 64.236m0 0c-30.727 1.353-52.8-3.294-69.3-21.412m0 0v159.765H4V4h256.575C319 4 367 39.5 367 99.53v62.588h-69.3V99.529c-4.95-49.411-74.25-41.176-74.25 0v6.589M79.9 312c-18.15-26.353-16.5-92.235 33-110.353m110.55-95.529c16.5 28 18.15 56 0 90.588m0-90.588v90.588m0-90.588c30.188 2.343 49.5 24.706 49.5 42.823 0 21.412-19.807 42.931-49.5 47.765m64.35 88.941c3.3-21.412-26.4-26.765-31.35-37.882-4.95-11.118-4.95-31.055 13.2-37.883 18.15-6.827 29.918 6.589 34.65 18.118 4.732 11.529.697 37.11-16.5 57.647z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Loading;
