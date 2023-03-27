import styled from "styled-components";
import {
  faWhatsapp,
  faTwitch,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core";

const SocialMediaContain = styled.div`
  margin: 0.5em 0;
  display: flex;
  justify-content: center;

  .IconesContain:not(:last-child) {
    margin-right: 0.5rem;
  }
  .IconesRedesSociais {
    width: 1.6rem;
    height: 1.6rem;
    color: white;
  }
  @media screen and (min-width: 768px) {
    .IconesRedesSociais {
      width: 2rem;
      height: 2rem;
    }
    .IconesContain:not(:last-child) {
      margin-right: 0.8rem;
    }
  }
  @media screen and (min-width: 1440px) {
    .IconesContain:not(:last-child) {
      margin-right: 1rem;
    }
  }
`;
export default function SocialMedia() {
  return (
    <SocialMediaContain>
      <div className="IconesContain">
        <a href="#">
          <FontAwesomeIcon
            className="IconesRedesSociais"
            icon={icon(faWhatsapp)}
          />
        </a>
      </div>
      <div className="IconesContain">
        <a href="#">
          <FontAwesomeIcon
            className="IconesRedesSociais"
            icon={icon(faTwitch)}
          />
        </a>
      </div>
      <div className="IconesContain">
        <a href="#">
          <FontAwesomeIcon
            className="IconesRedesSociais"
            icon={icon(faInstagram)}
          />
        </a>
      </div>
      <div className="IconesContain">
        <a href="#">
          <FontAwesomeIcon
            className="IconesRedesSociais"
            icon={icon(faTwitter)}
          />
        </a>
      </div>
    </SocialMediaContain>
  );
}
