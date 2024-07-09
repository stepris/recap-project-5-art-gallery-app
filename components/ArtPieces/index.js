import ArtPiecePreview from "@/components/ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  return (
    <section>
      <ul>
        {pieces.map((piece) => {
          const { slug } = piece;
          return <ArtPiecePreview key={slug} {...piece} />;
        })}
      </ul>
    </section>
  );
}
