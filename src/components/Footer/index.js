import styled from "styled-components";
import SocialMedia from "./SocialMedia";
import LogoSVG from "../Header/Logo";
const FooterContain = styled.div`
  position: fixed;
  width: 100%;
  height: 7rem;
  bottom: 0;
  background-color: #d9d9d9;
  .FooterInfoContainer{
    display:flex;
    justify-content:space-between;
    align-items:center;
    height: 100%;
  }
  .InfoFooter {
    margin-left:1.3rem;
  }
  .RedesFooter {
    margin-right: 2rem;
  }
`;
export default function Footer() {
  return (
    <FooterContain>
      <div className="FooterInfoContainer">
        <div className="InfoFooter">
          <LogoSVG />
        </div>
        <div className="RedesFooter">
          <span>Acesse nossas redes:</span>
          <SocialMedia />
        </div>
      </div>
    </FooterContain>
  );
}
