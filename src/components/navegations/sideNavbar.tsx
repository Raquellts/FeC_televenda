import React from "react";

const SideNavbar: React.FC = () => {
  return (
    <>
      <div className="h-full px-3 py-4 overflow-y-auto bg-container text-primary">
        <ul className="space-y-2 font-medium">
          <li>
            <a
              href="#"
              className="flex items-center p-2 rounded-lg hover:text-text hover:bg-tertiary group"
            >
              <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
            </a>
            <a
              href="#"
              className="flex items-center p-2 rounded-lg hover:text-text hover:bg-tertiary group"
            >
              <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideNavbar;
