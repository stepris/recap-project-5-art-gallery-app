import ArtPieceDetails from "@/components/ArtPieceDetails";
import { useRouter } from "next/router";

export default function DetailsPage({ pieces, artPiecesInfoObject }) {
  const router = useRouter();
  const { slug } = router.query;
  const piece = pieces.find((pieceToFind) => pieceToFind.slug === slug);
  return (
    <ArtPieceDetails {...piece} artPiecesInfoObject={artPiecesInfoObject} />
  );
}
