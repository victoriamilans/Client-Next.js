import user from "../../assets/user.png";
import Image from "next/image";
import { StyledHeader } from "@/styles/Header";
import { useModal } from "@/context/ModalContext";
import { useAuth } from "@/context/AuthContext";

export const DashboardHeader = () => {
  const {
    setIsModalUpdateClientOpen,
    setIsModalAllUsersOpen,
    setIsModalCreateContactOpen,
    setIsModalDeleteClientOpen,
  } = useModal();
  const { clientObject, logout } = useAuth();

  return (
    <StyledHeader>
      <div className="userInfo">
        <Image src={user} alt="user image" />
        <div>
          <h1>{clientObject?.fullName}</h1>
          <span>{clientObject?.email}</span>
        </div>
      </div>
      <nav className="navBar">
        <h2>My contacts</h2>
        <h2 onClick={() => setIsModalUpdateClientOpen(true)}>Update profile</h2>
        <h2 onClick={() => setIsModalAllUsersOpen(true)}>All users</h2>
        <h2 onClick={() => setIsModalCreateContactOpen(true)}>
          Create Contact
        </h2>
        <h2 onClick={() => setIsModalDeleteClientOpen(true)}>
          Delete my account
        </h2>
      </nav>
      <div className="searchArea">
        <button onClick={() => logout()}>Logout</button>
      </div>
    </StyledHeader>
  );
};
