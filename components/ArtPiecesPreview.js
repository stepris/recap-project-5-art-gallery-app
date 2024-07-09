import Image from "next/image";

export default function ArtPiecesPreview({ title, artist, image }) {
  return (
    <li style={{ listStyleType: "none" }}>
      <Image src={image} alt={title} height={200} width={200} />
      <p>
        {title} by {artist}
      </p>
    </li>
  );
}
