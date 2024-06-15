import React from "react";
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

interface State {
  theme: Etheme;
  supervisor: User[];
  formData: CommonUser;
  error: string;
}

class Signin extends React.Component<any, State> {
  loading: boolean = false;

  constructor(props: any) {
    super(props);

    this.state = {
      theme: themes.activeTheme,
      supervisor: [],
      formData: {
        name: "",
        username: "",
        surname: "",
        email: "",
        password: "",
        supervisorId: "",
        role: 1,
      },
      error: "",
    };
  }

  Supervisors = () => {
    return this.state.supervisor.map((supervisor, index) => {
      return (
        <option key={index} value={supervisor.id}>
          {supervisor.name}
        </option>
      );
    });
  };

  componentDidMount(): void {
    if (this.loading === false) {
      this.loading = true;
      getSupervisor()
        .then((data) => {
          this.setState({ supervisor: data });
        })
        .finally(() => (this.loading = false));
    }
  }

  handlesubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      if (this.state.formData) {
        const data = await postCommonUser(this.state.formData);
        if (data) {
          this.props.history.push("/login");
        }
      }
    } catch (err: unknown) {
      if (err instanceof Error && "response" in err) {
        const apiError = err as ApiError;
        this.setState({ error: apiError.response.data.message });
      } else {
        // Handle other types of errors or re-throw
        throw err;
      }
    }
  };

  setFormData = (formData: CommonUser) => {
    this.setState({
      formData,
    });
  };

  setTheme = (theme: Etheme) => {
    this.setState({ theme });
  };

  handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setFormData({
      ...this.state.formData,
      [event.target.name]: event.target.value,
    });

    const selectedTheme = event.target.value as Etheme;
    this.setTheme(selectedTheme);
  };

  render() {
    return (
      <div
        className={`full-div overflow-hidden flex items-center justify-center lg:justify-start`}
      >
        <Background />
        <SigninForm
          theme={{ theme: this.state.theme }}
          error={this.state.error}
          formData={this.state.formData}
          handleChange={this.handleChange}
          handlesubmit={this.handlesubmit}
          setFormData={this.setFormData}
          Supervisors={this.Supervisors}
          supervisor={this.state.supervisor}
        />
        <div className="fixed bottom-3 right-4 z-10">
          <ButtonTheme theme={this.state.theme} setTheme={this.setTheme} />
        </div>
        {/*--------- LOGOS ----------*/}
        {/*--------- logo de tela grande ------*/}
        <div className="mx-auto hidden lg:block text-center">
          <img
            src={logo}
            alt="logo"
            className={`logo ${
              this.state.theme === Etheme.light ? "light_filter" : "dark_filter"
            }`}
          />
        </div>
      </div>
    );
  }
}

export default Signin;
