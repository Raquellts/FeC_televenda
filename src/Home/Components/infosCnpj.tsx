import React from "react";
import InfoCnpjItem from "./Interior_Components/InfoCnpjItem";
import { Etheme, themes } from "../../themeConsts";
import { CnpjPaginationResponse, User } from "../../API/API_utils";
import { getCnpjsPagination, getCommonUser } from "../../API/API_cnpj";
import Loading from "../../components/backgrounds/loadingBack";
import ButtonTertiary from "../../components/buttons/ButtonTertiary";

interface iInfosCnpj {
  statusNumber: number | null;
  theme: { theme: Etheme };
}

interface iCnpj {
  theme: Etheme;
  data: CnpjPaginationResponse;
  user: User | undefined;
  page: number;
  size: number;
  maxpages: number;
}

class InfosCnpj extends React.Component<iInfosCnpj, iCnpj> {
  loading: boolean = false;

  constructor(props: iInfosCnpj) {
    super(props);

    this.state = {
      user: undefined,
      theme: themes.activeTheme,
      data: {} as CnpjPaginationResponse,
      page: 0,
      size: 10,
      maxpages: 0,
    };
  }

  setTheme = (theme: Etheme) => {
    this.setState({ theme });
  };

  handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTheme = event.target.value as Etheme;
    this.setTheme(selectedTheme);
  };

  handleDataUpdate = async () => {
    const data = await getCommonUser();
    this.setState({ user: data });
  };

  handleGetData = async () => {
    const data = await getCnpjsPagination(this.state.page, this.state.size);
    this.setState({ data });
    this.setState({ maxpages: data.body.totalPages });
  };

  componentDidMount(): void {
    if (this.loading === false) {
      this.loading = true;
      this.handleDataUpdate();
      this.handleGetData()
        .catch((error) => {
          console.error("Error retrieving data:", error);
        })
        .finally(() => (this.loading = false));
    }
  }

  pageBack = () => {
    console.log("pageBack");
    if (this.state.page > 0) {
      this.setState(
        (prevState) => ({ page: prevState.page - 1 }),
        () => {
          this.componentDidMount();
        }
      );
    }
  };

  pageForward = () => {
    console.log("pageForward");
    if (this.state.page < this.state.maxpages - 1) {
      this.setState(
        (prevState) => ({ page: prevState.page + 1 }),
        () => {
          this.componentDidMount();
        }
      );
    }
  };

  render() {
    const { statusNumber, theme } = this.props;
    const { user, page, maxpages, data } = this.state;
    const { loading, pageBack, pageForward } = this;

    const buttonClass = `m-2 pb-2 pt-1 py-1 border-2 border-secondary rounded-2xl hover:bg-tertiary hover:border-tertiary hover:text-white font-oswald ${
      theme.theme === Etheme.light ? "text-primary" : "text-tertiary"
    }`;
    const spanClass = `text-size-md font-style-lg`;

    return (
      <div className={`${theme} flex flex-col w-100 h-100`}>
        {loading && <Loading theme={theme.theme} />}
        {data && data.body && (
          <div>
            <div>
              {data.body.content.map((cnpj, index) => {
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
          </div>
        )}
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
            {page > 0 ? (
              <ButtonTertiary className={buttonClass} onClick={pageBack}>
                <p>
                  <span className={spanClass}>⇦</span> Anterior
                </p>
              </ButtonTertiary>
            ) : null}

            {/* informações */}
            {!statusNumber || statusNumber === 0 ? (
              <div
                className={`text-center text-size-xsm text-primary font-oswald`}
              >
                Pagina atual:&nbsp;
                <span
                  className={`${spanClass} ${
                    theme.theme === Etheme.light
                      ? "text-primary"
                      : "text-secondary"
                  }`}
                >
                  {page + 1}
                </span>
                &nbsp;de&nbsp;
                <span
                  className={`${spanClass} ${
                    theme.theme === Etheme.light
                      ? "text-primary"
                      : "text-secondary"
                  }`}
                >
                  {maxpages}
                </span>
              </div>
            ) : null}

            {/* proximo */}
            {page < maxpages - 1 ? (
              <ButtonTertiary className={buttonClass} onClick={pageForward}>
                <p>
                  Proximo <span className={spanClass}>⇨</span>
                </p>
              </ButtonTertiary>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default InfosCnpj;
