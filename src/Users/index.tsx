import React from "react";
import { Etheme, themes } from "../themeConsts";
import ModalSideNav from "../components/navegations/modalSideNav";
import ButtonTheme from "../themeButton";
import InfosUSER from "./Components/infosUSER";
import Cabecalho from "../components/navegations/cabecalho";
import { getAllCommonUser } from "../API/API_cnpj";
import { User } from "../API/API_utils";

interface iUsers {
  data: User[];
  theme: Etheme;
  pageName: string;
}

class Users extends React.Component<iUsers, iUsers> {
  loading: boolean = false;

  constructor(props: iUsers) {
    super(props);

    this.state = {
      theme: themes.activeTheme,
      data: [],
      pageName: "Usuários",
    };
  }

  componentDidMount(): void {
    if (this.loading === false) {
      this.loading = true;
      getAllCommonUser()
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

  render(): React.ReactNode {
    const { theme, pageName, data } = this.state;
    const { setTheme } = this;

    return (
      <div
        className={`${
          theme === Etheme.light ? "bg-background" : "bg-dark-background"
        } Flex min-h-screen h-full`}
      >
        <ModalSideNav theme={theme} />
        {/* CABECALHO E TITLEBAR */}
        <div
          className={`sticky top-0 z-10 lg:ml-64 pb-[1px] pt-2 px-4 ${
            theme === Etheme.light ? "bg-background" : "bg-dark-background"
          }`}
        >
          <Cabecalho theme={{ theme }} pageName={pageName} />
        </div>
        <div className="px-4 pb-4 lg:ml-64">
          {data.map((data) => (
            <InfosUSER data={data} theme={theme} />
          ))}
        </div>
        <div className="fixed bottom-5 right-4">
          <ButtonTheme theme={theme} setTheme={setTheme} />
        </div>
      </div>
    );
  }
}

export default Users;
