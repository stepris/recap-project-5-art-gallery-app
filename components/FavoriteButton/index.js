import Image from "next/image";

export default function FavoriteButton({ onToggleFavorite, slug }) {
  return (
    <Image
      src="/heart.svg"
      alt="Favoriting icon"
      width={50}
      height={50}
      onClick={() => onToggleFavorite(slug)}
    />
  );
}
