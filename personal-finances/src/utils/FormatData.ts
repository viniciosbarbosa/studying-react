export const FormatData = (date: number) => {
  return new Intl.DateTimeFormat("pt-br").format(date);
};
