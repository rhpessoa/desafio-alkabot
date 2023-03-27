import Image from "next/image";
import WPPIcon from "../../../../public/icon/whatsapp.svg";
import TwitchIcon from "../../../../public/icon/twitch.svg";
import InstaIcon from "../../../../public/icon/instagram.svg";
import TwitterIcon from "../../../../public/icon/twitter.svg";
import styled from "styled-components";

const SocialMediaContain = styled.div`
  margin: 0.5em 0;
  display: flex;
  justify-content: center;
  .IconesContain {
    width: 1.6rem;
    height: 1.6rem;
  }
  .IconesContain:not(:last-child) {
    margin-right: 0.5rem;
  }
  @media screen and (min-width: 768px) {
    .IconesContain {
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
          <Image alt="Wpp icone" src={WPPIcon} width={40} height={40} />
        </a>
      </div>
      <div className="IconesContain">
        <a href="#">
          <Image alt="Twitch icone" src={TwitchIcon} width={40} height={40} />
        </a>
      </div>
      <div className="IconesContain">
        <a href="#">
          <Image alt="Insta icone" src={InstaIcon} width={40} height={40} />
        </a>
      </div>
      <div className="IconesContain">
        <a href="#">
          <Image alt="Twitter icone" src={TwitterIcon} width={40} height={40} />
        </a>
      </div>
    </SocialMediaContain>
  );
}
