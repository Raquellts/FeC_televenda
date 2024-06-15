import React from "react";
import { Etheme, themes } from "../../../themeConsts";
import SVGEditFile from "../../../components/SVGs/INFO/SVGEditFile";
import { Link } from "react-router-dom";
import { Cnpj, User } from "../../../API/API_utils";
import SVGpdf from "../../../components/SVGs/INFO/SVGpdf";
import { getCommonUser } from "../../../API/API_cnpj";

interface EditButtonProps {
  theme: { theme: Etheme };
  cnpj: Cnpj;
  id: string;
}

interface EditButtonState {
  user: User | undefined;
  theme: Etheme;
}

class EditButton extends React.Component<EditButtonProps, EditButtonState> {
  loading: boolean = false;

  constructor(props: EditButtonProps) {
    super(props);

    this.state = {
      user: undefined,
      theme: themes.activeTheme,
    };
  }

  handleDataUpdate = async () => {
    const data = await getCommonUser();
    this.setState({ user: data });
  };

  componentDidMount(): void {
    if (this.loading === false) {
      this.loading = true;
      this.handleDataUpdate().finally(() => (this.loading = false));
    }
  }

  setTheme = (theme: Etheme) => {
    this.setState({ theme });
  };

  handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTheme = event.target.value as Etheme;
    this.setTheme(selectedTheme);
  };

  render() {
    const { theme, cnpj, id } = this.props;
    const { user } = this.state;

    return (
      <div
        className={`${
          theme.theme === Etheme.dark
            ? "text-tertiary hover:text-accent"
            : "text-dark-tertiary hover:text-text"
        } flex flex-col items-center justify-center text-center font-oswald text-[13px] w-100 h-100 font-style-lg`}
      >
        <Link to="/form" state={{ cnpj, id }}>
          {/* verificação de permissão */}
          {user?.role === 4 ? (
            <>
              <SVGpdf
                width={42}
                height={42}
                fill_one={"none"}
                fill_two={"currentColor"}
              />
              <span className="hidden sm:block">Pedidos</span>
            </>
          ) : (
            <>
              <SVGEditFile
                width={42}
                height={42}
                fill_one={"none"}
                fill_two={"currentColor"}
              />
              <span className="hidden sm:block">Editar</span>
            </>
          )}
        </Link>
      </div>
    );
  }
}

export default EditButton;
