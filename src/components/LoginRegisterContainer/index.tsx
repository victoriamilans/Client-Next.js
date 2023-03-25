import { StyledLoginResgisterPage } from "@/styles/loginRegisterPage";
import Image from "next/image";

export const LoginRegisterContainer = ({ children, props }: any) => {
  return (
    <StyledLoginResgisterPage>
      <div className="leftContainer">{children}</div>
      <div className="rightContainer">
        <Image src={props} alt="image" />
      </div>
    </StyledLoginResgisterPage>
  );
};
