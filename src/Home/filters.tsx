import Home from ".";

//PENDING (1) //padrao
//CONFIRMED (2) //criação de pedido
//SUSPENDED (3) //data para ligar
//REFUSED (4) //recusou o produto

export const All = () => {
  const filter = null;
  const pageName = "Todas as empresas";

  return <Home filter={filter} pageName={pageName} />;
};

export const Pending = () => {
  const filter = 1;
  const pageName = "Pendentes";

  return <Home filter={filter} pageName={pageName} />;
};

export const Confirmed = () => {
  const filter = 2;
  const pageName = "Confirmado";

  return <Home filter={filter} pageName={pageName} />;
};

export const Suspended = () => {
  const filter = 3;
  const pageName = "Suspensos";

  return <Home filter={filter} pageName={pageName} />;
};

export const Rejected = () => {
  const filter = 4;
  const pageName = "Rejeitadas";

  return <Home filter={filter} pageName={pageName} />;
};
