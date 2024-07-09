import ArtPieces from "@/components/ArtPieces";
import Spotlight from "@/components/Spotlight";

export default function HomePage({ pieces }) {
  return (
    <>
      <h1>{"Art Gallery".toUpperCase()}</h1>
      <Spotlight pieces={pieces} />
      <ArtPieces pieces={pieces} />
    </>
  );
}
