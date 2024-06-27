import React from "react";
import InfoCnpjItem from "./Interior_Components/InfoCnpjItem";
import { Etheme, themes } from "../../themeConsts";
import { Cnpj, User } from "../../API/API_utils";
import { getCnpjs, getCommonUser } from "../../API/API_cnpj";
import Loading from "../../components/backgrounds/loadingBack";
import ButtonTertiary from "../../components/buttons/ButtonTertiary";

interface iInfosCnpj {
  statusNumber: number | null;
  theme: { theme: Etheme };
}

interface iCnpj {
  theme: Etheme;
  data: Cnpj[];
  user: User | undefined;
}

class InfosCnpj extends React.Component<iInfosCnpj, iCnpj> {
  loading: boolean = false;

  constructor(props: iInfosCnpj) {
    super(props);

    this.state = {
      user: undefined,
      theme: themes.activeTheme,
      data: [],
    };
  }

  handleDataUpdate = async () => {
    const data = await getCommonUser();
    this.setState({ user: data });
  };

  componentDidMount(): void {
    if (this.loading === false) {
      this.loading = true;
      this.handleDataUpdate();
      getCnpjs()
        .then((data) => {
          this.setState({ data });
        })
        .finally(() => (this.loading = false));
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
    const { statusNumber, theme } = this.props;
    const { data, user } = this.state;
    const { loading } = this;
    const buttonClass = `m-2 pb-2 pt-1 py-1 border-2 border-secondary rounded-2xl hover:bg-tertiary hover:border-tertiary hover:text-white font-oswald ${
      theme.theme === Etheme.light ? "text-primary" : "text-tertiary"
    }`;
    const spanClass = `text-[16.1px] font-style-lg`;

    return (
      <div className={`${theme} flex flex-col w-100 h-100`}>
        {loading && <Loading theme={theme.theme} />}
        <div>
          <div>
            {data?.map((cnpj, index) => {
              if (!statusNumber || cnpj.status === statusNumber) {
                return (
                  <InfoCnpjItem
                    cnpj={cnpj}
                    theme={theme}
                    key={"InfosCnpj" + index}
                    user={user}
                  />
                );
              }
            })}
          </div>
          <div
            className={`footer ${
              theme.theme === Etheme.light
                ? "bg-background"
                : "bg-dark-background"
            }`}
          >
            <div className="flex lg:ml-64 justify-center items-center">
              {/* BOTOES DE PAGINACAO */}
              {/* anterior */}
              <ButtonTertiary
                className={buttonClass}
                onClick={() => window.location.reload()}
              >
                <p>
                  <span className={spanClass}>⇦</span> Anterior
                </p>
              </ButtonTertiary>
              {/* informações */}
              <div className="text-center text-[12px] text-primary font-oswald">
                Pagina atual:&nbsp;
                <span
                  className={`${spanClass} ${
                    theme.theme === Etheme.light
                      ? "text-primary"
                      : "text-secondary"
                  }`}
                >
                  1
                </span>
                &nbsp;de&nbsp;
                <span
                  className={`${spanClass} ${
                    theme.theme === Etheme.light
                      ? "text-primary"
                      : "text-secondary"
                  }`}
                >
                  1
                </span>
              </div>
              {/* proximo */}
              <ButtonTertiary
                className={buttonClass}
                onClick={() => window.location.reload()}
              >
                <p>
                  Proximo <span className={spanClass}>⇨</span>
                </p>
              </ButtonTertiary>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InfosCnpj;
