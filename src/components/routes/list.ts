import { FC } from "react";
import { Home } from "components/pages/Home";
import { LogIn } from "components/pages/LogIn";
import { SignUp } from "components/pages/SignUp";
import { IAuth } from "types/types";

interface IRoute {

  path: string;
  component: FC<IAuth>;
  auth: boolean;
}

export const routes: Array<IRoute> = [
  {
    path: '/home',
    component: Home,
    auth: true
  },
  {
    path: '/login',
    component: LogIn,
    auth: false
  },
  {
    path: '/register',
    component: SignUp,
    auth: false
  },

]