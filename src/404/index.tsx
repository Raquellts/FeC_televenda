import ButtonPrimary from "../components/buttons/ButtonPrimary";

function Page404() {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-background">
      <h1 className="md:text-[200px] text-[150px] font-extrabold text-white tracking-widest">
        404
      </h1>
      <div className="md:text-[20px] text-[18px] bg-accent px-2 text-white rounded absolute font-oswald uppercase mb-8 mr-4">
        Página não encontrada
      </div>
      <a href="/">
        <ButtonPrimary buttonContent="Retornar" />
      </a>
    </main>
  );
}

export default Page404;
