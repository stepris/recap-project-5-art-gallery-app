import Image from "next/image";
import getRandomArrayElement from "@/utils/getRandomArrayElement";

export default function Spotlight({ pieces }) {
  const { image, artist, title } = getRandomArrayElement(pieces);

  return (
    <article>
      <Image src={image} alt={title} height={300} width={300} />
      <p>{artist}</p>
    </article>
  );
}
