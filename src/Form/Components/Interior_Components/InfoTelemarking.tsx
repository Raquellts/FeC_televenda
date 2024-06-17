import React from "react";
import { Etheme, themes } from "../../../themeConsts";
import { User } from "../../../API/API_utils";
import { getCommonUser } from "../../../API/API_cnpj";

interface InfoTelemarkingProps {
  theme: Etheme;
}

interface iInfoTelemarking {
  user: User;
  theme: Etheme;
}

class InfoTelemarking extends React.Component<
  InfoTelemarkingProps,
  iInfoTelemarking
> {
  loading: boolean = false;

  constructor(props: InfoTelemarkingProps) {
    super(props);

    this.state = {
      theme: themes.activeTheme,
      user: {} as User,
    };
  }

  componentDidMount(): void {
    if (this.loading === false) {
      this.loading = true;
      getCommonUser()
        .then((data) => {
          this.setState({ user: data });
        })
        .finally(() => (this.loading = false));
    }
  }

  render() {
    const { user } = this.state;
    const labelSelects_sm = "flex w-full items-center my-0 text-[14px]";
    const spans =
      this.props.theme === Etheme.light
        ? "text-primary opacity-80 mr-2"
        : "text-dark-primary opacity-80 mr-2";
    const Pclasses = "font-style-xlg";

    return (
      <div>
        <p className="flex justify-start w-100 font-oswald text-[16px] text-primary pt-5 pl-5">
          Ligação efetuada por:
        </p>
        {user && (
          <>
            {/*---- informações do Vendedor ----*/}
            <div
              className={`flex flex-wrap w-100 px-5 py-2 my-0.5 ml-0.5 font-inter font-style-lg ${
                this.props.theme === Etheme.light
                  ? "text-primary"
                  : "text-dark-primary"
              }`}
            >
              {/*  */}
              <label className={labelSelects_sm}>
                <span className={spans}>ID do usuario:</span>
                <p className={Pclasses}>{user.id || "Não informado"}</p>
              </label>
              {/*  */}
              <label className={labelSelects_sm}>
                <span className={spans}>Email do usuario:</span>
                <p className={Pclasses}>{user.email || "Não informado"}</p>
              </label>
              {/*  */}
              <label className={labelSelects_sm}>
                <span className={spans}>Usuario:</span>
                <p className={Pclasses}>{user.name || "Não informado"}</p>
              </label>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default InfoTelemarking;
