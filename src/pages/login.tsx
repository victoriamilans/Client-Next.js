import api from "@/services/api";
import { IClientLogin, IProps } from "@/types";
import { GetServerSideProps, NextPage } from "next";

const LoginPage: NextPage<IProps> = () => {
  return (
    <>
      <div>
        <h1>Weslcome back</h1>
        <span>Welcome back! Please enter your details</span>
        <form>
          <input type={"email"} id={"email"} />
          <input type={"password"} id={"password"} />
          <button>Login</button>
          <button>Login</button>
        </form>
      </div>
      <div></div>
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
