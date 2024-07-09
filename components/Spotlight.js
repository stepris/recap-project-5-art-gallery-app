import Image from "next/image";
import getRandomArrayElement from "@/utils/getRandomArrayElement.js";

export default function Spotlight({ pieces }) {
  const {
    imageSource: image,
    artist,
    name: title,
  } = getRandomArrayElement(pieces);

  return (
    <article>
      <Image src={image} alt={title} height={300} width={300} />
      <p>{artist}</p>
    </article>
  );
}
