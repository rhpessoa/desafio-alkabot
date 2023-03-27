import styled from "styled-components";
import SocialMedia from "./SocialMedia";
const FooterContain = styled.div`
  position: fixed;
  width: 100%;
  height: 6rem;
  bottom: 0;
  background-color: #3e74c9;
  .FooterInfoContainer {
    padding-top: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .TextoFooter {
    margin: 0 3rem;
    text-align: center;
    color: white;
  }
  @media screen and (min-width: 768px) {
    height: 6rem;
    .FooterInfoContainer {
      padding: 0.5rem 0;
    }
    .TextoFooter {
      font-size: 22px;
    }
  }
  @media screen and (min-width: 1440px) {
    .TextoFooter {
      font-size: 28px;
    }
  }
`;
export default function Footer() {
  return (
    <FooterContain>
      <div className="FooterInfoContainer">
        <div className="TextoFooter">
          <p>
            Acompanhe <strong>Alkabot </strong>também nas suas redes sociais.
          </p>
        </div>
        <SocialMedia />
      </div>
    </FooterContain>
  );
}
