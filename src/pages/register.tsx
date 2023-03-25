import { LoginRegisterContainer } from "@/components/LoginRegisterContainer";
import api from "@/services/api";
import { StyledLoginRegisterButton } from "@/styles/LoginRegisterButton";
import { StyledRegisterForm } from "@/styles/RegisterForm";
import { IProps } from "@/types";
import { GetServerSideProps, NextPage } from "next";
import register from "../assets/register.png";

const RegisterPage: NextPage<IProps> = () => {
  return (
    <>
      <LoginRegisterContainer props={register}>
        <h1>Create an account</h1>
        <span className="welcomeSpan">Welcome Please enter your details</span>
        <StyledRegisterForm>
          <label>full name</label>
          <input type={"text"} id={"name"} placeholder="enter your full name" />
          <label>email</label>
          <input type={"email"} id={"email"} placeholder="enter your email" />
          <label>password</label>
          <input
            type={"password"}
            id={"password"}
            placeholder="enter your password"
          />
          <label>phone</label>
          <input type={"tel"} id={"phone"} placeholder="enter your phone" />
          <span>Do you have an account? Login</span>
          <StyledLoginRegisterButton>Signup</StyledLoginRegisterButton>
        </StyledRegisterForm>
      </LoginRegisterContainer>
    </>
  );
};

export default RegisterPage;

// export const getServiceSideProps: GetServerSideProps<
//   IClientLogin
// > = async () => {
//   const response = await api.post("/login");
//   const client = response.data;

//   return { props: client };
// };
