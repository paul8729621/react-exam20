import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 p-8">
      <h1 className="text-4xl font-bold mb-4">😵‍💫 페이지를 찾을 수 없어요!</h1>
      <p className="text-lg mb-6">
        요청하신 포켓몬은 도감을 탈주했을지도 몰라요...
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
      >
        포켓몬 도감으로 돌아가기
      </Link>
    </div>
  );
}
