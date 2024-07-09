import ArtPieces from "@/components/ArtPieces";

export default function OverviewPage({ pieces }) {
  console.log(pieces);
  return (
    <>
      <ArtPieces pieces={pieces} />
    </>
  );
}
