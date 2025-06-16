export const formatValue = (value: number) =>
  new Intl.NumberFormat("pt-Br", { style: "currency", currency: "BRL" }).format(
    value
  );
