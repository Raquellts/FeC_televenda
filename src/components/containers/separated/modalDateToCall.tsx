import React, { useState } from "react";
import ButtonTertiary from "../../buttons/ButtonTertiary";
import { Etheme } from "../../../themeConsts";
import useUpdateTheme from "../../Hooks/updateTheme";
import { putStatusCnpj } from "../../../API/API_cnpj";

type ModalProps = {
  id: string;
  theme: { theme: Etheme };
  isOpen: boolean;
  onClose: () => void;
  actionName: string;
};

const ModalDateToCall: React.FC<ModalProps> = ({
  id,
  theme,
  isOpen,
  onClose,
  actionName,
}) => {
  /*THEME*/ const themes = theme.theme;
  /*THEME*/ const [newtheme, setNewtheme] = useState(themes);
  /*THEME*/ useUpdateTheme(theme, setNewtheme);

  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };

  const handleConfirm = async () => {
    onClose();
    await putStatusCnpj(id, 3, selectedDate);
    handleBack();
  };

  const handleBack = () => {
    window.history.back();
  };

  const areInputsFilled = () => {
    return selectedDate !== "";
  };

  return (
    <div
      id="static-modal"
      data-modal-backdrop="static"
      tabIndex={-1}
      aria-hidden="true"
      className={`modal ${
        isOpen ? "" : "hidden"
      } font-medium overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50`}
    >
      <div
        className={`${
          newtheme === Etheme.light
            ? "bg-container text-text"
            : "bg-dark-container text-dark-text"
        } relative p-4 w-95 max-w-2xl max-h-95 rounded-lg shadow modal-box`}
      >
        <div className="flex flex-col items-center justify-center w-full font-inter divide-y divide-gray-300">
          <p
            className={`flex flex-col items-center w-full pb-2 text-size-md opacity-60 font-style-xlg`}
          >
            {actionName}
          </p>

          <input
            type="date"
            name="date"
            className="p-5 rounded-2xl flex justify-center text-center custom-date-picker"
            value={selectedDate}
            onChange={handleDateChange}
          />
        </div>
        <div
          className={`${
            !areInputsFilled() ? "hidden" : ""
          } pt-2 flex items-center justify-center w-full`}
        >
          <ButtonTertiary
            buttonContent="✓ Salvar"
            onClick={handleConfirm}
            className="w-1/2 py-2 mx-1 bg-green-600 border-green-700 hover:bg-green-400 my-1 tracking-wide uppercase text-text"
          />
          <ButtonTertiary
            buttonContent="✕ Cancelar"
            onClick={onClose}
            className="w-1/2 py-2 mx-1 bg-red-600 border-red-700 hover:bg-red-400 my-1 tracking-wide uppercase text-text"
          />
        </div>
      </div>
    </div>
  );
};

export default ModalDateToCall;
