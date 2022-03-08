import { Home } from "components/pages/Home";
import { LogIn } from "components/pages/LogIn";
import { SignUp } from "components/pages/SignUp";

export const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/login',
    component: LogIn
  },
  {
    path: './register',
    component: SignUp
  }
]