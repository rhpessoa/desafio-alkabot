import styled from "styled-components";
import LogoSVG from "./Logo";
import MenuSVG from "./Menu";
const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
  background-color: #d9d9d9;
  border-bottom: 1px solid black;
  .LogoMenu {
    margin-right: 1.3rem;
  }
  .LogoHeader {
    margin-left: 1.3rem;
  }
`;
export default function Header() {
  return (
    <HeaderContainer>
      <div className="LogoHeader">
        <LogoSVG />
      </div>
      <div className="LogoMenu">
        <MenuSVG />
      </div>
    </HeaderContainer>
  );
}
