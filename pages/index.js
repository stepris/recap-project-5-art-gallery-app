import useSWR from "swr";
import ArtPieces from "@/components/ArtPieces";
import Spotlight from "@/components/Spotlight";

export default function HomePage() {
  const URL = "https://example-apis.vercel.app/api/art";

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(URL, fetcher);

  function remodelData() {
    const {
      slug,
      artist,
      name: title,
      imageSource: image,
      year,
      genre,
      colors,
      dimensions,
    } = this;
    return {
      slug,
      artist,
      title,
      image,
      year,
      genre,
      colors,
      dimensions,
    };
  }

  const pieces = data && data.map((piece) => remodelData.call(piece));

  console.log(pieces);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <h1>{"Art Gallery".toUpperCase()}</h1>
      <Spotlight pieces={pieces} />
      <ArtPieces pieces={pieces} />
    </>
  );
}
