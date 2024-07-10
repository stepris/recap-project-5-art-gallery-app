import ArtPieces from "@/components/ArtPieces";

export default function Favorites({ pieces: allPieces, artPiecesInfoObject }) {
  const { artPiecesInfo } = artPiecesInfoObject;

  const favoritePieces = allPieces.reduce((acc, piece) => {
    if (
      artPiecesInfo.find(
        (favPiece) => favPiece.slug === piece.slug && favPiece.isFavorite
      )
    ) {
      acc.push(piece);
    }
    return acc;
  }, []);

  console.log(favoritePieces);

  return (
    <ArtPieces
      pieces={favoritePieces}
      artPiecesInfoObject={artPiecesInfoObject}
      gi
    />
  );
}
