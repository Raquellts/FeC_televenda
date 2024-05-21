import { useState, useEffect } from "react";
import InfosCnpj from "../components/containers/infosCnpj";
import SideNavbar from "../components/navegations/sideNavbar";
import SVGMenu from "../components/SVGs/CIRCLE/SVGMenu";

function Home() {
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
    <div className="Flex h-screen bg-background">
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
          <button
            onClick={closeSidebar}
            aria-controls="separator-sidebar"
            type="button"
            className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            Fechar
          </button>
        )}
        <SideNavbar />
      </aside>
      <div className="p-4 md:ml-64">
        <InfosCnpj />
      </div>
    </div>
  );
}

export default Home;
