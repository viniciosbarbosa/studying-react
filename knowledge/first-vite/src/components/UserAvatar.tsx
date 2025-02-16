type Props = {
  src: string;
};

export const UserAvatar = (props: Props) => {
  const { src } = props;

  return (
    <>
      <img
        height="300px"
        src={src}
        alt="macaco"
        onClick={() => alert("clicou")}
      />
    </>
  );
};
