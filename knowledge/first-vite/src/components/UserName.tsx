type Props = {
  name: string;
};

export const UserName = (props: Props) => {
  const { name } = props;

  return <h4>Meu Nome: {name.toUpperCase()}</h4>;
};
