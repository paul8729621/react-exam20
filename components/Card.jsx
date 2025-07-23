'use client';

import Image from "next/image";
import DefaultImage from "@/assets/defaultImage.jpg";
import { useFavorites } from "@/app/context/FavoritesContext";

const Card = ({ pokemon }) => {
  const { isFavorite, toggleFavorite } = useFavorites();

  return (
    <section className="w-[200px] h-[240px] border border-gray-500 flex flex-col justify-center items-center gap-[10px] pb-[10px] rounded-[10px] border-b-[5px] border-b-black border-r-[5px] border-r-black relative">
      <Image
        src={pokemon.front || DefaultImage}
        alt="포켓몬 사진"
        width={120}
        height={120}
        placeholder="blur"
        blurDataURL={pokemon.front}
      />
      <div>{pokemon.name}</div>

      {/* ❤️/🤍 버튼 */}
      <button
        onClick={() => toggleFavorite(pokemon)}
        className="absolute top-2 right-2 text-[20px] hover:scale-110 transition-transform"
        aria-label="찜 버튼"
      >
        {isFavorite(pokemon) ? '❤️' : '🤍'}
      </button>
    </section>
  );
};

export default Card;
