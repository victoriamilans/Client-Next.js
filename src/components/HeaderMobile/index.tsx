import user from "../../assets/user.png";
import Image from "next/image";
import { Barr, MenuMobile, StyledHeaderMobile } from "@/styles/HeaderMobile";
import { useState } from "react";
import { useModal } from "@/context/ModalContext";
import { useAuth } from "@/context/AuthContext";

export const DashboardHeaderMobile = () => {
  const [navbarMobile, setNavbarMobile] = useState(false);
  const {
    setIsModalUpdateClientOpen,
    setIsModalAllUsersOpen,
    setIsModalCreateContactOpen,
    setIsModalDeleteClientOpen,
  } = useModal();
  const { clientObject } = useAuth();

  const { clientContactObject } = useAuth();

  function handleClick() {
    setNavbarMobile((isOpen) => !isOpen);
  }

  return (
    <StyledHeaderMobile>
      <div className="userInfo">
        <Image src={user} alt="user image" />
        <div>
          <h1>{clientObject?.fullName}</h1>
          <span>{clientObject?.email}</span>
        </div>
      </div>
      <MenuMobile onClick={() => handleClick()}>
        {navbarMobile && (
          <nav className="navbarMobile">
            <input type={"text"} id={"search"} placeholder="search" />
            <div className="navOptions">
              <h2>My contacts</h2>
              <h2 onClick={() => setIsModalUpdateClientOpen(true)}>
                Update profile
              </h2>
              <h2 onClick={() => setIsModalAllUsersOpen(true)}>All users</h2>
              <h2 onClick={() => setIsModalCreateContactOpen(true)}>
                Create Contact
              </h2>
              <h2 onClick={() => setIsModalDeleteClientOpen(true)}>
                Delete my account
              </h2>
            </div>
            <div className="searchArea">
              <button>Logout</button>
            </div>
          </nav>
        )}
        <Barr />
        <Barr />
        <Barr />
      </MenuMobile>
    </StyledHeaderMobile>
  );
};
