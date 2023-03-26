import Image from "next/image";
import dislike from "../../../public/dislike.svg";
export default function Dislike() {
  return (
    <>
      <Image alt="User Foto" src={dislike} width={35} height={35} />
    </>
  );
}
