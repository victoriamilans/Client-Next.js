import user from "../../assets/user.png";
import Image from "next/image";
import { StyledHeader } from "@/styles/Header";
import { useModal } from "@/context/ModalContext";

export const DashboardHeader = () => {
  const { setIsModalUpdateClientOpen } = useModal();
  return (
    <StyledHeader>
      <div className="userInfo">
        <Image src={user} alt="user image" />
        <div>
          <h1>Username</h1>
          <span>useremail@mail.com</span>
        </div>
      </div>
      <nav className="navBar">
        <h2>My contacts</h2>
        <h2 onClick={() => setIsModalUpdateClientOpen(true)}>Update profile</h2>
        <h2>All users</h2>
      </nav>
      <div className="searchArea">
        <input type={"text"} id={"search"} placeholder="search" />
        <button>Logout</button>
      </div>
    </StyledHeader>
  );
};
