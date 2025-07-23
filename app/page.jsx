import Link from "next/link";
import Card from "@/components/Card";

const url = process.env.NEXT_PUBLIC_URL;

const getAllPokemon = async () => {
  // SSR 사용을 위한 cache 설정
  const pokemonList = await fetch(url + "/api/pokemon", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
  });
  const pokemonData = await pokemonList.json();

  return { pokemonData: [...pokemonData.pokemonData] };
};

export default async function Main() {
  const { pokemonData } = await getAllPokemon();
  console.log(pokemonData);
  return (
    <div className="flex flex-wrap gap-3 justify-center items-center mt-3">
      {pokemonData.map((el) => (
        <Link key={el.id} href={`/detail/${el.id}`}>
          <Card pokemon={el} />
        </Link>
      ))}
    </div>
  );
}
