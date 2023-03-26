import styled from "styled-components";
import SocialMedia from "./SocialMedia";
const FooterContain = styled.div`
  position: fixed;
  width: 100%;
  height: 8rem;
  bottom: 0;
  background-color: #3e74c9;
  .FooterInfoContainer {
    padding-top: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .TextoFooter {
    margin: 0 5rem;
    text-align: center;
    color: white;
  }
  @media screen and (min-width: 768px) {
    height: 9rem;
    .FooterInfoContainer {
      padding: 0.5rem 0;
    }
    .TextoFooter {
      margin: 0 14rem;
      font-size: 24px;
    }
  }
  @media screen and (min-width: 1440px) {
    .TextoFooter {
      margin: 0 14rem;
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
