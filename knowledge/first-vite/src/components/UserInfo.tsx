import { UserAvatar } from "./UserAvatar";
import { UserRoles } from "./UserRoles";
import { UserName } from "./UserName";
import { UserEmail } from "./UserEmail";
import { UserAge } from "./UserAge";

type Props = {
  name: string;
  email: string;
  age: number;
  src?: string | undefined;
  roles: { id: number; title: string }[];
};

export const UserInfo = (props: Props) => {
  const { name, email, age, src, roles } = props;

  const srcInvalid =
    "https://imagenes.elpais.com/resizer/v2/WQGOZS5S7D3DCLWMVVJM7S5VAQ.jpg?auth=d6a587caabc3fe9784b42f91cb3d8ebbd00fb04408d5ae49cf7ccf42dce579f3&width=1200";

  return (
    <>
      <UserAvatar src={src ?? srcInvalid} />
      <UserName name={name} />
      <UserEmail email={email} />
      <UserAge age={age} />
      <UserRoles roles={roles} />
    </>
  );
};
