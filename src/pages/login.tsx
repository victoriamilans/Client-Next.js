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
import { Loading } from "@/components/Loading";
import Link from "next/link";

const LoginPage: NextPage<IProps> = () => {
  const { loginClient, loading } = useAuth();

  const formSchema = yup.object().shape({
    email: yup.string().email("Enter a valid email").required("Required email"),
    password: yup.string().required("Required password"),
  });

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
          <p className="errorMessage">{errors.email?.message}</p>
          <input
            type={"email"}
            id={"email"}
            placeholder="enter your email"
            {...register("email")}
          />
          <label>password</label>

          <p className="errorMessage">{errors.password?.message}</p>
          <input
            type={"password"}
            id={"password"}
            placeholder="enter your password"
            {...register("password")}
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
