type Props = {
  email: string;
};

export const UserEmail = (props: Props) => {
  const { email } = props;
  return <h4>Meu email é {email}</h4>;
};
