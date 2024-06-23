import React from "react";
import InfoCnpjItem from "./Interior_Components/InfoCnpjItem";
import { Etheme, themes } from "../../themeConsts";
import { Cnpj, User } from "../../API/API_utils";
import { getCnpjs, getCommonUser } from "../../API/API_cnpj";
import Loading from "../../components/backgrounds/loadingBack";

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

    return (
      <>
        {loading && <Loading theme={theme.theme} />}
        <div className={`${theme}`}>
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
      </>
    );
  }
}

export default InfosCnpj;
