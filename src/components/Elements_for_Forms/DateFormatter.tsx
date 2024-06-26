const formatarData = (data: Date) => {
  if (!(data instanceof Date)) {
    throw new Error("O parâmetro fornecido não é um objeto Date válido.");
  }

  const dia = String(data.getDate()).padStart(2, "0"); // Obtém o dia do mês
  const mes = String(data.getMonth() + 1).padStart(2, "0"); // Obtém o mês (0-11) e ajusta para (1-12)
  const ano = data.getFullYear(); // Obtém o ano

  return `${dia}/${mes}/${ano}`;
};

export default formatarData;
