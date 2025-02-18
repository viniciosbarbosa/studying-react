type Props = {
  onClick: (label: string) => void;
};

export const Button = (props: Props) => {
  const { onClick } = props;
  const label = "Texto";

  return <button onClick={() => onClick(label)}>{label}</button>;
};
