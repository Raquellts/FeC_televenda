import { useState } from "react";
import { url_api } from "../../variaveis_ambiente";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ApiError from "../APIError";
//components
import logo from "../assets/E-statesat.svg";
import Background from "../components/backgrounds/Background";
import InputPrimary from "../components/containers/formContainers/InputPrimary";
import ButtonPrimary from "../components/buttons/ButtonPrimary";
import ButtonSecondary from "../components/buttons/ButtonSecondary";
//styles
import "../assets/font.css";

function Signin() {
  //const options: string[] = ["diretoria", "secretaria", "assistencia", "admin"];

  const [error, seterror] = useState("");
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    role: "diretoria",
  });

  const handlesubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    seterror("");

    try {
      const data = await axios.post(url_api + "user", formData);
      if (data) {
        navigate("/login");
      }
    } catch (err: unknown) {
      if (err instanceof Error && "response" in err) {
        const apiError = err as ApiError;
        seterror(apiError.response.data.message);
      } else {
        // Handle other types of errors or re-throw
        throw err;
      }
    }
  };

  return (
    <div className="full-div overflow-hidden flex items-center justify-center lg:justify-start">
      <Background />

      {error ? <p>{error}</p> : null}
      <div className="bg-background lg:h-100 h-95 xl:w-2/5 lg:w-1/2 sm:w-5/6 w-90vw lg:m-0 flex-account rounded-2xl lg:rounded-none z-10">
        <form
          onSubmit={handlesubmit}
          className="flex-account md:p-20 p-10 text-center overflow-hidden"
        >
          <img
            src={logo}
            alt="logo"
            className="h-44 lg:hidden my-2"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(60%) sepia(55%) saturate(1855%) hue-rotate(212deg) brightness(99%) contrast(86%)",
            }}
          />
          <p className="mb-5 uppercase text-primary font-oswald header-style">
            Registrar
          </p>

          <InputPrimary
            name=""
            type="text"
            placeholder="nome"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />

          <InputPrimary
            name=""
            type="email"
            placeholder="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />

          <InputPrimary
            name=""
            type="password"
            placeholder="senha"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />

          <ButtonPrimary buttonContent="Criar" />

          <p className="my-2 small-style">
            <ButtonSecondary href="/login" buttonContent="Já tenho uma conta" />
          </p>
        </form>
      </div>
      <div className="mx-auto hidden lg:block">
        <img src={logo} alt="logo" className="logo" />
        <p></p>
      </div>
    </div>
  );
}

export default Signin;
