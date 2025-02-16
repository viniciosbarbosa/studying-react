type Props = {
  roles: { id: number; title: string }[];
};

export const UserRoles = (props: Props) => {
  const { roles } = props;

  return (
    <ul>
      {roles.map((value) => (
        <li key={value.id}>{value.title}</li>
      ))}
    </ul>
  );
};
