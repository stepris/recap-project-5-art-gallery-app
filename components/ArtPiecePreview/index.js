import Image from "next/image";
import Link from "next/link";

export default function ArtPiecePreview({ title, artist, image, slug }) {
  return (
    <Link href={`/art-pieces/${slug}`}>
      <li style={{ listStyleType: "none" }}>
        <Image src={image} alt={title} height={200} width={200} />
        <p>
          {title} by {artist}
        </p>
      </li>
    </Link>
  );
}
