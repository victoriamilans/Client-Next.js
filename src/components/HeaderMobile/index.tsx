import user from "../../assets/user.png";
import Image from "next/image";
import { StyledHeaderMobile } from "@/styles/HeaderMobile";

export const DashboardHeaderMobile = () => {
  return (
    <StyledHeaderMobile>
      <div className="userInfo">
        <Image src={user} alt="user image" />
        <div>
          <h1>Username</h1>
          <span>useremail@mail.com</span>
        </div>
      </div>
      <nav className="navBar">
        <h2>My contacts</h2>
        <h2>Update profile</h2>
        <h2>All users</h2>
      </nav>
      <div className="searchArea">
        <input type={"text"} id={"search"} placeholder="search" />
        <button>Logout</button>
      </div>
    </StyledHeaderMobile>
  );
};
