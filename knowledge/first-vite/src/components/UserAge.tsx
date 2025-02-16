type Props = {
  age: number;
};

export const UserAge = (props: Props) => {
  const { age } = props;
  return <h4>Minha idade é {age}</h4>;
};
