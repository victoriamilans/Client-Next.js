import { LoginRegisterContainer } from "@/components/LoginRegisterContainer";
import { StyledLoginRegisterButton } from "@/styles/LoginRegisterButton";
import { StyledRegisterForm } from "@/styles/RegisterForm";
import { IClientRegister, IProps } from "@/types";
import { NextPage } from "next";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import registerImg from "../assets/register.png";
import { Loading } from "@/components/Loading";

const RegisterPage: NextPage<IProps> = () => {
  const { registerClient, loading } = useAuth();

  const formschema = yup.object().shape({
    email: yup.string().email("Enter a valid email").required("Required email"),
    password: yup.string().required("Required password"),
    phone: yup.string().required("Required phone"),
    fullName: yup.string().required("Required full name"),
  });
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputFullName, setInputFullName] = useState("");

  const emailError = inputEmail === "";
  const passwordError = inputPassword === "";
  const fullNameError = inputFullName === "";
  const phoneError = inputPhone === "";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IClientRegister>({
    resolver: yupResolver(formschema),
  });

  const onFormSubmit = (formData: IClientRegister) => {
    registerClient(formData);
  };

  return (
    <>
      {loading && <Loading />}
      <LoginRegisterContainer props={registerImg}>
        <h1>Create an account</h1>
        <span className="welcomeSpan">Welcome Please enter your details</span>
        <StyledRegisterForm>
          <label>full name</label>
          {fullNameError ? (
            <p className="errorMessage">enter your full name</p>
          ) : (
            <p className="errorMessage">{errors.fullName?.message}</p>
          )}
          <input
            type={"text"}
            id={"name"}
            placeholder="enter your full name"
            {...register("fullName")}
            onChange={(e) => setInputFullName(e.target.value)}
          />

          <label>email</label>
          {emailError ? (
            <p className="errorMessage">enter your email</p>
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

          <label>phone</label>
          {phoneError ? (
            <p className="errorMessage">Enter your phone</p>
          ) : (
            <p className="errorMessage">{errors.phone?.message}</p>
          )}
          <input
            type={"tel"}
            id={"phone"}
            placeholder="enter your phone"
            {...register("phone")}
            onChange={(e) => setInputPhone(e.target.value)}
          />

          <span>Do you have an account? Login</span>
          <StyledLoginRegisterButton onClick={handleSubmit(onFormSubmit)}>
            Signup
          </StyledLoginRegisterButton>
        </StyledRegisterForm>
      </LoginRegisterContainer>
    </>
  );
};

export default RegisterPage;
