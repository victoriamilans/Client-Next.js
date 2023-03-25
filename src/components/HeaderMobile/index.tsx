import user from "../../assets/user.png";
import Image from "next/image";
import { Barr, MenuMobile, StyledHeaderMobile } from "@/styles/HeaderMobile";
import { useState } from "react";

export const DashboardHeaderMobile = () => {
  const [navbarMobile, setNavbarMobile] = useState(false);

  function handleClick() {
    setNavbarMobile((isOpen) => !isOpen);
  }

  return (
    <StyledHeaderMobile>
      <div className="userInfo">
        <Image src={user} alt="user image" />
        <div>
          <h1>Username</h1>
          <span>useremail@mail.com</span>
        </div>
      </div>
      <MenuMobile onClick={() => handleClick()}>
        {navbarMobile && (
          <nav className="navbarMobile">
            <input type={"text"} id={"search"} placeholder="search" />
            <div className="navOptions">
              <h2>My contacts</h2>
              <h2>Update profile</h2>
              <h2>All users</h2>
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
