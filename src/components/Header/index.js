import styled from "styled-components";
import LogoSVG from "./Logo";
import MenuSVG from "./Menu";
import React from "react";
const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
  margin-bottom: 5rem;
  background-color: #d9d9d9;
  border-bottom: 1px solid black;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  .LogoMenu {
    margin-right: 1.3rem;
  }
  .LogoHeader {
    margin-left: 1.3rem;
    display: flex;
    align-items: center;
    p {
      margin-left: 1rem;
      font-size: 18px;
    }
  }
`;
export default function Header() {
  const [isMenuOpened, setIsMenuOpened] = React.useState(false);

  return (
    <HeaderContainer>
      <div className="LogoHeader">
        <LogoSVG />
        {isMenuOpened && <p>Alkabot</p>}
      </div>
      <div className="LogoMenu">
        <MenuSVG
          isMenuOpened={isMenuOpened}
          setIsMenuOpened={setIsMenuOpened}
        />
      </div>
    </HeaderContainer>
  );
}
