type User = {
  id: number;
  name: string | null;
};

export type UserState = {
  user: User | null;
};

type SignInUser = {
  type: "SIGNIN";
  payload: { user: User };
};

type SignOut = {
  type: "SIGNOUT";
};

export type UserAction = SignInUser | SignOut;
