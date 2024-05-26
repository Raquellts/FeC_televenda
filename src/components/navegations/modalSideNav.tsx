import { useEffect, useState } from "react";
import { Etheme } from "../../themeConsts";
import SideNavbar from "./sideNavbar";
import SVGMenu from "../SVGs/CIRCLE/SVGMenu";
import SVGCancel from "../SVGs/CIRCLE/SVGCancel";
import useUpdateTheme from "../consts/updateTheme";

const ModalSideNav = (theme: { theme: Etheme }) => {
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
      {windowWidth < 768 && (
        <button
          onClick={toggleSidebar}
          aria-controls="separator-sidebar"
          type="button"
          className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <SVGMenu width={20} height={20} fill_one="none" fill_two="white" />
          <span className="">Menu</span>
        </button>
      )}
      <aside
        id="separator-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isSidebarOpen || windowWidth >= 768
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
        aria-label="Sidebar"
      >
        {true && (
          <div
            className={`${
              newtheme === Etheme.light ? "bg-container" : "bg-dark-container"
            } md:hidden w-50 flex items-center justify-center`}
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
