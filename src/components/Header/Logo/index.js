import Image from "next/image";
import Logo from "../../../../public/icon/logo.svg"

export default function LogoSVG() {
  return (
    <>
      <Image
        alt="Logo App"
        src={Logo}
        width={40}
        height={40}
      />
    </>
  );
}

