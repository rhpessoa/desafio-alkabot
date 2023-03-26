import Image from "next/image";
import share from "../../../public/icon/share.svg";
export default function Share() {
  return (
    <>
      <Image alt="User Foto" src={share} width={35} height={35} />
    </>
  );
}
