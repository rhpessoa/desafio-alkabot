import Image from "next/image";
import WPPIcon from "../../../../public/icon/whatsapp.svg";
import TwitchIcon from "../../../../public/icon/twitch.svg";
import InstaIcon from "../../../../public/icon/instagram.svg";
import TwitterIcon from "../../../../public/icon/twitter.svg";
import styled from "styled-components";

const SocialMediaContain = styled.div`
  margin-top: 0.5em;
  display: flex;
  justify-content: center;
  .IconesContain{
    width:40px;
    height:40px;
  }
  .IconesContain:not(:last-child) {
    padding-right: 0.5em;
  }
`;
export default function SocialMedia() {
  return (
    <SocialMediaContain >
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
