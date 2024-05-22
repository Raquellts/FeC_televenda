import FormComplete from "../components/containers/formComplete";
import ModalSideNav from "../components/navegations/modalSideNav";

function Form() {
  return (
    <div className="Flex h-screen bg-background">
      <ModalSideNav />
      <div className="p-4 md:ml-64">
        <FormComplete />
      </div>
    </div>
  );
}

export default Form;
