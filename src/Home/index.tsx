import InfosCnpj from "../components/containers/infosCnpj";
import ModalSideNav from "../components/navegations/modalSideNav";

function Home() {
  return (
    <div className="Flex h-screen bg-background">
      <ModalSideNav />
      <div className="p-4 md:ml-64">
        <InfosCnpj />
      </div>
    </div>
  );
}

export default Home;
