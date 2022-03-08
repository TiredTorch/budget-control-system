import { FC } from "react";
import { Home } from "components/pages/Home";
import { LogIn } from "components/pages/LogIn";
import { SignUp } from "components/pages/SignUp";

interface IRoute {

  path: string;
  component: FC;
  auth: boolean;
}

export const routes: Array<IRoute> = [
  {
    path: '/',
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