import { useState } from "react";
import { USERInterface } from "../../../../InterfaceCNPJ";
import SVGCancel from "../../SVGs/CIRCLE/SVGCancel";
import ButtonTertiary from "../../buttons/ButtonTertiary";
import TextareaPrimary from "./textareaPrimary";
import { Etheme } from "../../../themeConsts";
import useUpdateTheme from "../../consts/updateTheme";
import SVGComments from "../../SVGs/INFO/SVGComments";

const ModalComments: React.FC<{
  theme: { theme: Etheme };
  cnpj: { cnpj: string };
  data: USERInterface;
  setData: React.Dispatch<React.SetStateAction<USERInterface>>;
  comments: string;
}> = ({ cnpj, data, setData, comments, theme }) => {
  /*THEME*/ const themes = theme.theme;
  /*THEME*/ const [newtheme, setNewtheme] = useState(themes);
  /*THEME*/ useUpdateTheme(theme, setNewtheme);

  const [isModalOpen, setIsModalOpen] = useState(false); //modal comments
  const [isConfirmSave, setConfirmSaveOpen] = useState(false); //modal confirmation of changes
  const [textareaValue, setTextareaValue] = useState(comments); // comments on text area

  const handleCommentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setTextareaValue(event.target.value);
  };

  const handleSave = () => {
    // Show confirmation modal
    setConfirmSaveOpen(true);
  };

  const handleConfirmSave = () => {
    // Save changes
    setData({
      ...data,
      cnpjInfo: data?.cnpjInfo.map((c) => {
        if (c.cnpj === cnpj.cnpj) {
          return {
            ...c,
            comments: textareaValue,
          };
        } else {
          return c;
        }
      }),
    });
    setIsModalOpen(false);
    setConfirmSaveOpen(false);
  };

  const handleCancelSave = () => {
    // Close confirmation modal
    setConfirmSaveOpen(false);
  };

  return (
    <div>
      {/*------ botão para abrir o modal ------*/}
      <ButtonTertiary
        buttonContent=""
        onClick={() => setIsModalOpen(true)}
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
            <h3 className="text-xl font-semibold">Comentarios</h3>
            <button
              type="button"
              className={`flex items-center justify-center bg-accent border-background text-primary border-b-2 border-tertiary hover:bg-primary hover:text-background rounded-lg text-xs p-2 text-center tracking-wide`}
              onClick={() => setIsModalOpen(false)}
            >
              <span className="mx-1 uppercase">Voltar</span>
              <SVGCancel
                width={24}
                height={24}
                fill_one="none"
                fill_two="currentColor"
              />
            </button>
          </div>

          {/*------ conteudo ------*/}
          <div className="flex flex-col items-center w-full">
            <div className="flex flex-col items-center w-full">
              <div className="w-full rounded-xl pb-4">
                <TextareaPrimary
                  theme={theme}
                  name="comments"
                  value={textareaValue}
                  onChange={handleCommentChange}
                  className="w-full rounded-xl"
                  minRows={3}
                  maxRows={8}
                />
              </div>

              {/*------ footer - botao salvar ------*/}
              <ButtonTertiary
                buttonContent="Salvar alterações"
                onClick={handleSave}
                className={`${
                  isConfirmSave ? "hidden" : ""
                } w-1/2 py-2 bg-accent text-text border-accent hover:bg-secondary my-1 tracking-wide`}
              />
            </div>

            {/* modal para confirmação do salvamento */}
            {isModalOpen && (
              <div className={`${isConfirmSave ? "" : "hidden"} modal`}>
                <div className="flex flex-col items-center justify-center w-full mb-3">
                  <p>Tem certeza que deseja salvar as alterações?</p>
                  <p className="text-xs">
                    ( Isso é <span className="uppercase">irreversível</span> )
                  </p>
                </div>
                <div className="flex items-center justify-center w-full">
                  <ButtonTertiary
                    buttonContent="✔ Salvar"
                    onClick={handleConfirmSave}
                    className="w-1/2 py-2 mx-1 bg-green-600 text-text border-green-700 hover:bg-green-400 my-1 tracking-wide uppercase"
                  />
                  <ButtonTertiary
                    buttonContent="✖ Cancelar"
                    onClick={handleCancelSave}
                    className="w-1/2 py-2 mx-1 bg-red-600 text-text border-red-700 hover:bg-red-400 my-1 tracking-wide uppercase"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComments;
