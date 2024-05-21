import React from "react";

type ToggleThemeButtonProps = {
  toggleTheme: () => void;
};

const ToggleThemeButton: React.FC<ToggleThemeButtonProps> = ({
  toggleTheme,
}) => {
  const handleClick = () => {
    toggleTheme();
  };

  return <button onClick={handleClick}>Toggle Theme</button>;
};

export default ToggleThemeButton;
