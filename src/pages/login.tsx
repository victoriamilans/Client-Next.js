import { LoginRegisterContainer } from "@/components/LoginRegisterContainer";
import { useAuth } from "@/context/AuthContext";
import { StyledLoginForm } from "@/styles/LoginForm";
import { StyledLoginRegisterButton } from "@/styles/LoginRegisterButton";
import { IClientLogin, IProps } from "@/types";
import { NextPage } from "next";
import loginImage from "../assets/login.png";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { Loading } from "@/components/Loading";
import { useRouter } from "next/router";
import Link from "next/link";

const LoginPage: NextPage<IProps> = () => {
  const { loginClient, loading } = useAuth();
  const router = useRouter;

  const formSchema = yup.object().shape({
    email: yup.string().email("Enter a valid email").required("Required email"),
    password: yup.string().required("Required password"),
  });
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const emailError = inputEmail === "";
  const passwordError = inputPassword === "";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IClientLogin>({
    resolver: yupResolver(formSchema),
  });

  const onFormSubmit = (formData: IClientLogin) => {
    loginClient(formData);
  };
  return (
    <>
      {loading && <Loading />}
      <LoginRegisterContainer props={loginImage}>
        <h1>Welcome back</h1>
        <span className="welcomeSpan">
          Welcome back! Please enter your details
        </span>
        <StyledLoginForm>
          <label>email</label>
          {emailError ? (
            <p className="errorMessage">enter your full name</p>
          ) : (
            <p className="errorMessage">{errors.email?.message}</p>
          )}
          <input
            type={"email"}
            id={"email"}
            placeholder="enter your email"
            {...register("email")}
            onChange={(e) => setInputEmail(e.target.value)}
          />
          <label>password</label>
          {passwordError ? (
            <p className="errorMessage">enter your password</p>
          ) : (
            <p className="errorMessage">{errors.password?.message}</p>
          )}
          <input
            type={"password"}
            id={"password"}
            placeholder="enter your password"
            {...register("password")}
            onChange={(e) => setInputPassword(e.target.value)}
          />

          <Link href={"/register"}>
            <span className="link">Dont have an account? Signup</span>
          </Link>
          <StyledLoginRegisterButton onClick={handleSubmit(onFormSubmit)}>
            Login
          </StyledLoginRegisterButton>
        </StyledLoginForm>
      </LoginRegisterContainer>
    </>
  );
};

export default LoginPage;
