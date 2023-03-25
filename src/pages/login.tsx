import { LoginRegisterContainer } from "@/components/LoginRegisterContainer";
import api from "@/services/api";
import { StyledLoginForm } from "@/styles/LoginForm";
import { StyledLoginRegisterButton } from "@/styles/LoginRegisterButton";
import { IClientLogin, IProps } from "@/types";
import { GetServerSideProps, NextPage } from "next";
import login from "../assets/login.png";

const LoginPage: NextPage<IProps> = () => {
  return (
    <>
      <LoginRegisterContainer props={login}>
        <h1>Welcome back</h1>
        <span className="welcomeSpan">
          Welcome back! Please enter your details
        </span>
        <StyledLoginForm>
          <label>email</label>
          <input type={"email"} id={"email"} placeholder="enter your email" />
          <label>password</label>
          <input
            type={"password"}
            id={"password"}
            placeholder="enter your password"
          />
          <span>Dont have an account? Signup</span>
          <StyledLoginRegisterButton>Login</StyledLoginRegisterButton>
        </StyledLoginForm>
      </LoginRegisterContainer>
    </>
  );
};

export default LoginPage;

export const getServiceSideProps: GetServerSideProps<
  IClientLogin
> = async () => {
  const response = await api.post("/login");
  const client = response.data;

  return { props: client };
};
