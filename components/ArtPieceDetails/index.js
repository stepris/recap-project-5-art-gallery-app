import Image from "next/image";
import Link from "next/link";

export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  return (
    <>
      <Image src={image} alt={title} height={300} width={300} />
      <p>
        {artist}: {title}
      </p>
      <p>Year: {year}</p>
      <p>Genre: {genre}</p>
      <Link href="/art-pieces">Back</Link>
    </>
  );
}
