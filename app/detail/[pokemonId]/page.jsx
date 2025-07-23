import FlipCard from "@/components/FlipCard";
import NotFound from "./not-found";

const url = process.env.NEXT_PUBLIC_URL;

const getPokemon = async (pokemonId) => {
  // SSR 사용을 위한 cache 설정
  const pokemonList = await fetch(url + "/api/pokemon/" + pokemonId + "/", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
  });
  const pokemon = await pokemonList.json();
  return { pokemon: pokemon.pokemonData };
};

export default async function Detail({ params }) {
  const { pokemonId } = params;
  const { pokemon } = await getPokemon(pokemonId);
  console.log(pokemon);
  if (Number(pokemonId) > 151) {
    return <NotFound />;
  } else {
    return (
      <div className="bg-white w-96 m-auto mt-10 flex flex-col justify-center items-center border py-[30px] px-[60px] rounded-[10px] border-b-[8px] border-r-[8px] border-black">
        <div className="text-[28px] mb-[10px]">{pokemon.name}</div>
        <div className="whitespace-pre-wrap text-center">
          {pokemon.description}
        </div>
        <FlipCard front={pokemon.front} back={pokemon.back} />
      </div>
    );
  }
}
