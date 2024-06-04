import { useEffect, useState } from "react";
import { Etheme } from "../../themeConsts";
import SideNavbar from "./sideNavbar";
import SVGMenu from "../SVGs/CIRCLE/SVGMenu";
import SVGCancel from "../SVGs/CIRCLE/SVGCancel";
import useUpdateTheme from "../consts/updateTheme";

const ModalSideNav = (theme: { theme: Etheme }) => {
  const screenSize = 1024;
  /*THEME*/ const themes = theme.theme;
  /*THEME*/ const [newtheme, setNewtheme] = useState(themes);
  /*THEME*/ useUpdateTheme(theme, setNewtheme);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      {windowWidth < screenSize && (
        <div className="pt-3 pl-4">
          <button
            onClick={toggleSidebar}
            aria-controls="separator-sidebar"
            type="button"
            className="flex items-center p-2 bg-accent border-background text-text border-b-2 border-tertiary hover:bg-primary hover:text-background rounded-xl text-center"
          >
            <SVGMenu
              width={20}
              height={20}
              fill_one="none"
              fill_two="currentColor"
            />
            <span className="mx-1 font-oswald">Menu</span>
          </button>
        </div>
      )}
      <aside
        id="separator-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isSidebarOpen || windowWidth >= screenSize
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
        aria-label="Sidebar"
      >
        {true && (
          <div
            className={`${
              newtheme === Etheme.light ? "bg-container" : "bg-dark-container"
            } lg:hidden w-50 flex items-center justify-center`}
          >
            <button
              type="button"
              className="bg-accent border-background text-primary border-b-2 border-tertiary hover:bg-primary hover:text-background rounded-xl px-30 py-2 mt-3 text-center"
              onClick={closeSidebar}
            >
              <SVGCancel
                width={24}
                height={24}
                fill_one="none"
                fill_two="currentColor"
              />
            </button>
          </div>
        )}
        <SideNavbar theme={newtheme} />
      </aside>
    </>
  );
};

export default ModalSideNav;
