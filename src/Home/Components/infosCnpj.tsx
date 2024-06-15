import React from "react";
import InfoCnpjItem from "./Interior_Components/InfoCnpjItem";
import { Etheme, themes } from "../../themeConsts";
import { Cnpj } from "../../API/API_utils";
import { getCnpjs } from "../../API/API_cnpj";

interface iInfosCnpj {
  statusNumber: number | null;
  theme: { theme: Etheme };
}

interface iCnpj {
  theme: Etheme;
  data: Cnpj[];
}

class InfosCnpj extends React.Component<iInfosCnpj, iCnpj> {
  loading: boolean = false;

  constructor(props: iInfosCnpj) {
    super(props);

    this.state = {
      theme: themes.activeTheme,
      data: [],
    };
  }

  componentDidMount(): void {
    if (this.loading === false) {
      this.loading = true;
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
    const { data } = this.state;

    return (
      <div className={`${theme}`}>
        {data?.map((cnpj, index) => {
          if (!statusNumber || cnpj.status === statusNumber) {
            const handleDataUpdate = (updatedData: Cnpj[]) => {
              this.setState({ data: updatedData });
            };

            return (
              <InfoCnpjItem
                cnpj={cnpj}
                theme={theme}
                data={data}
                setData={handleDataUpdate}
                key={"InfosCnpj" + index}
              />
            );
          }
        })}
      </div>
    );
  }
}

export default InfosCnpj;
