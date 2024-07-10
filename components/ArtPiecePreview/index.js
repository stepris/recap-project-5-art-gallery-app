import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import FavoriteButton from "@/components/FavoriteButton";

export default function ArtPiecePreview({
  title,
  artist,
  image,
  slug,
  artPiecesInfoObject,
}) {
  return (
    <StyledListItem>
      <FavoriteButton {...artPiecesInfoObject} slug={slug} />
      <Link href={`/art-pieces/${slug}`}>
        <Image src={image} alt={title} height={200} width={200} />
        <p>
          {title} by {artist}
        </p>
      </Link>
    </StyledListItem>
  );
}

const StyledListItem = styled.li`
  background-color: orange;
  list-style-type: none;
  display: flex;
`;
