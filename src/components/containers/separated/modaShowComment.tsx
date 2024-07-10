import { useState } from "react";
import SVGCancel from "../../SVGs/CIRCLE/SVGCancel";
import ButtonTertiary from "../../buttons/ButtonTertiary";
import { Etheme } from "../../../themeConsts";
import useUpdateTheme from "../../Hooks/updateTheme";
import SVGComments from "../../SVGs/INFO/SVGComments";

const ModalShowComment: React.FC<{
  theme: { theme: Etheme };
  comment: string;
}> = ({ theme, comment }) => {
  /*THEME*/ const themes = theme.theme;
  /*THEME*/ const [newtheme, setNewtheme] = useState(themes);
  /*THEME*/ useUpdateTheme(theme, setNewtheme);

  const [isModalOpen, setIsModalOpen] = useState(false); //modal comments

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="font-oswald text-size-xs">
      {/*------ botão para abrir o modal ------*/}
      <ButtonTertiary
        buttonContent=""
        onClick={handleOpenModal}
        className="py-0.5 text-text bg-accent border-background hover:bg-primary hover:border-secondary hover:text-background flex"
      >
        <div className="flex">
          <SVGComments
            width={16}
            height={16}
            fill_one="none"
            fill_two="currentColor"
          />
          <span className="ml-1 hidden md:block font-oswald">Comentários</span>
        </div>
      </ButtonTertiary>

      {/*------ abertura do modal ------*/}
      <div
        id="static-modal"
        data-modal-backdrop="static"
        tabIndex={-1}
        aria-hidden="true"
        className={`${
          isModalOpen ? "" : "hidden"
        } font-medium overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50`}
      >
        <div
          className={`${
            newtheme === Etheme.light
              ? "bg-container text-text"
              : "bg-dark-container text-dark-text"
          } relative p-4 w-95 max-w-2xl max-h-95 rounded-lg shadow`}
        >
          <div
            className={`flex items-center justify-between pl-1 pb-1 border-b rounded-t`}
          >
            {/*------ header ------*/}
            <h3 className="text-size-lg font-semibold">Comentarios</h3>
            <div className="flex">
              <button
                type="button"
                className={`flex items-center justify-center bg-accent border-background text-primary border-b-2 border-tertiary hover:bg-primary hover:text-background rounded-lg text-size-xsm p-2 text-center tracking-wide`}
                onClick={handleCloseModal}
              >
                <SVGCancel
                  width={24}
                  height={24}
                  fill_one="none"
                  fill_two="currentColor"
                />
              </button>
            </div>
          </div>
          <p className="px-1 py-5">{comment}</p>
        </div>
      </div>
    </div>
  );
};

export default ModalShowComment;
