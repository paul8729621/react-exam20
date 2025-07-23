import Link from "next/link";

export default function Header() {
  return (
    <header>
      <h1 className="border-t-[50px] border-t-[red] bg-black text-white text-[40px] text-center">
        포켓몬 도감
      </h1>
      <nav className="py-[10px] border-b-[3px] border-b-black flex gap-[20px] justify-center">
        <Link href="/">메인</Link>
      </nav>
    </header>
  );
}
