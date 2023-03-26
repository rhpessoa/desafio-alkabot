import Image from "next/image";
import User from "../../../public/icon/user.svg"

export default function UserSVG() {
  return (
    <>
      <Image
        alt="User Foto"
        src={User}
        width={40}
        height={40}
      />
    </>
  );
}

