import styled from "styled-components";
import SocialMedia from "./SocialMedia";
import LogoSVG from "../Header/Logo";
const FooterContain = styled.div`
  position: fixed;
  width: 100%;
  height: 7rem;
  bottom: 0;
  background-color: #3e74c9;
  .FooterInfoContainer{
    padding-top: 0.5rem;
    display:flex;
    flex-direction:column;
    justify-content:center;
  }
  .TextoFooter {
    margin: 0 5rem;
    text-align: center;
    color: white;
  }
`;
export default function Footer() {
  return (
    <FooterContain>
      <div className="FooterInfoContainer">
        <div className="TextoFooter">
          <p>Acompanhe <strong>Alkabot </strong>também nas suas redes sociais.</p>
        </div>
        <SocialMedia />
      </div>
    </FooterContain>
  );
}
