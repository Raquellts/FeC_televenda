import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getSupervisor, postCommonUser } from "../API/API_cnpj.ts";
import { User, CommonUser } from "../API/API_utils.ts";
import ApiError from "../APIError";
//components
import logo from "../assets/SVG/LOGO FILLED.svg";
import Background from "../components/backgrounds/Background";
//styles
import "../assets/font.css";
import { Etheme, themes } from "../themeConsts";
import ButtonTheme from "../themeButton";
import SigninForm from "./Components/signin_Form.tsx";

function Signin() {
  /*THEME*/ const [theme, setTheme] = useState(themes.activeTheme);
  const [supervisor, setSupervisor] = useState<User[]>([]);

  const [error, seterror] = useState("");
  const navigate = useNavigate();

  const [formData, setFormData] = useState<CommonUser>({
    name: "",
    email: "",
    password: "",
    supervisorId: "",
    role: 1,
  });

  const Supervisors = useCallback(async () => {
    const GetSupervisor = await getSupervisor();
    setSupervisor(GetSupervisor);
  }, []);

  const handlesubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    seterror("");

    try {
      if (formData) {
        const data = await postCommonUser(formData);
        if (data) {
          navigate("/login");
        }
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
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  console.log(formData);
  return (
    <div
      className={`full-div overflow-hidden flex items-center justify-center lg:justify-start`}
    >
      <Background />
      <SigninForm
        theme={{ theme }}
        error={error}
        formData={formData}
        handleChange={handleChange}
        handlesubmit={handlesubmit}
        setFormData={setFormData}
        Supervisors={Supervisors}
        supervisor={supervisor}
      />
      <div className="fixed bottom-3 right-4">
        <ButtonTheme theme={theme} setTheme={setTheme} />
      </div>
      {/*--------- LOGOS ----------*/}
      {/*--------- logo de tela grande ------*/}
      <div className="mx-auto hidden lg:block text-center">
        <img
          src={logo}
          alt="logo"
          className={`logo ${
            theme === Etheme.light ? "light_filter" : "dark_filter"
          }`}
        />
      </div>
    </div>
  );
}

export default Signin;
