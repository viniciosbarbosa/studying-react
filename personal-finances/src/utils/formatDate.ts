export const formatDate = (date: number) =>
  new Intl.DateTimeFormat("pt-Br").format(date);
