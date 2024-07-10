import ArtPiecePreview from "@/components/ArtPiecePreview";

export default function ArtPieces({ pieces, artPiecesInfoObject }) {
  return (
    <section>
      <ul>
        {pieces.map((piece) => {
          const { slug } = piece;
          return (
            <ArtPiecePreview
              key={slug}
              artPiecesInfoObject={artPiecesInfoObject}
              {...piece}
            />
          );
        })}
      </ul>
    </section>
  );
}
