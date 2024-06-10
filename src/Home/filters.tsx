import Home from ".";

export const All = () => {
  const filter = null;
  const pageName = "Todas as empresas";

  return <Home filter={filter} pageName={pageName} />;
};

export const Pending = () => {
  const filter = "PENDING";
  const pageName = "Pendentes";

  return <Home filter={filter} pageName={pageName} />;
};

export const Approved = () => {
  const filter = "APPROVED";
  const pageName = "Aprovadas";

  return <Home filter={filter} pageName={pageName} />;
};

export const Rejected = () => {
  const filter = "REJECTED";
  const pageName = "Rejeitadas";

  return <Home filter={filter} pageName={pageName} />;
};

export const Suspended = () => {
  const filter = "SUSPENDED";
  const pageName = "Suspensos";

  return <Home filter={filter} pageName={pageName} />;
};
