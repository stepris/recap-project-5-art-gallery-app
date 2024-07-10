import ArtPieces from "@/components/ArtPieces";

export default function OverviewPage({ pieces, artPiecesInfoObject }) {
  return (
    <>
      <ArtPieces pieces={pieces} artPiecesInfoObject={artPiecesInfoObject} />
    </>
  );
}
