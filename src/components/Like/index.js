import Image from "next/image";
import like from "../../../public/icon/like.svg";
export default function Like() {
  return (
    <>
      <Image alt="User Foto" src={like} width={35} height={35} />
    </>
  );
}
