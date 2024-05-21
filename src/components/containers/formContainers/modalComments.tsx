import { ChangeEvent, useState } from "react";
import { USERInterface } from "../CNPJInterface";
import SVGCancel from "../../SVGs/CIRCLE/SVGCancel";
import ButtonTertiary from "../../buttons/ButtonTertiary";
import TextareaPrimary from "./textareaPrimary";

const ModalComments: React.FC<{
  cnpj: { cnpj: string };
  data: USERInterface;
  setData: React.Dispatch<React.SetStateAction<USERInterface>>;
  comments: string;
}> = ({ cnpj, data, setData, comments }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [textareaValue, setTextareaValue] = useState(comments);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(event.target.value);
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
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
    setIsEditing(false);
  };

  const toggleEditing = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsEditing((prevIsEditing) => !prevIsEditing);
  };

  return (
    <div>
      <ButtonTertiary
        buttonContent="Comentários"
        onClick={() => setIsModalOpen(true)}
        className="py-0.5 border-primary hover:bg-primary hover:border-secondary hover:text-background"
      />
      <div
        id="static-modal"
        data-modal-backdrop="static"
        tabIndex={-1}
        aria-hidden="true"
        className={`${
          isModalOpen ? "" : "hidden"
        } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50`}
      >
        <div className="relative p-4 w-95 max-w-2xl max-h-95 bg-container text-text rounded-lg shadow">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
            <h3 className="text-xl font-semibold">Comentarios</h3>
            <button
              type="button"
              className="block text-primary border-b-2 border-tertiary hover:bg-primary hover:text-background rounded-lg text-xs p-2 text-center"
              onClick={() => setIsModalOpen(false)}
            >
              <SVGCancel
                width={24}
                height={24}
                fill_one="none"
                fill_two="currentColor"
              />
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="flex flex-col items-center w-full">
            {isEditing ? (
              <div className="flex flex-col items-center w-full">
                <div className="w-full rounded-xl pb-4">
                  <TextareaPrimary
                    name="comments"
                    value={textareaValue}
                    onChange={handleCommentChange}
                    className="w-full rounded-xl"
                    minRows={3}
                    maxRows={8}
                  />
                </div>

                <ButtonTertiary
                  buttonContent="Save"
                  onClick={handleSubmit}
                  className="w-1/2 py-2 bg-green-600 text-text border-green-700 hover:bg-green-400 my-1 "
                />
              </div>
            ) : (
              <TextareaPrimary
                readonly={true}
                name="comments"
                value={comments}
                className="w-full mb-4 rounded-xl"
                minRows={4}
                maxRows={8}
              />
            )}
            <ButtonTertiary
              buttonContent={isEditing ? "Close" : "Edit"}
              onClick={toggleEditing}
              className={`w-1/2 py-2 ${
                isEditing
                  ? "bg-red-600 border-red-700 hover:bg-red-400 hover:border-red-600"
                  : "bg-tertiary border-accent hover:bg-primary"
              } text-text`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComments;
