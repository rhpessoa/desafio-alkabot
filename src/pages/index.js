import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Alkabot</h1>
      <Link href={"/posts"}>
        <h1>Me clica</h1>
      </Link>
    </div>
  );
}
