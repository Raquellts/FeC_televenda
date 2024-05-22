import Background from "../components/backgrounds/Background";
//css styles
import "../assets/font.css";

function ForgotPassword() {
  const handlesubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <div className="full-div overflow-hidden flex items-center justify-center">
      <Background />
      <div className="bg-light h-5/6 2xl:w-1/2 lg:w-2/3 sm:w-5/6 w-90vw flex-account rounded-2xl z-10">
        <form
          onSubmit={handlesubmit}
          className="flex-account md:p-20 p-10 text-center overflow-hidden"
        >
          <p className="mb-5 uppercase text-purple-1 font-oswald header-style">
            Esqueci minha senha
          </p>
          <input
            type="email"
            placeholder="email"
            required
            className="flex-1 bg-gray-50ring-0 outline-none border-b-2 border-transparent text-neutral-600 placeholder-violet-700 rounded-2xl focus:ring-violet-500 focus:border-violet-500 hover:border-violet-300 block p-2.5 checked:bg-emerald-500 pl-5"
          />
          <button
            type="submit"
            className="flex-none rounded-2xl h-10 p-2 text-center my-5 button-primary"
          >
            <span className="button-content">Enviar</span>
          </button>
          <p className="my-5 text-purple-1 font-oswald">
            Retornar para: &nbsp;
            <a className="button-secondary font-oswald small-style" href="/">
              página de LOGIN
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
