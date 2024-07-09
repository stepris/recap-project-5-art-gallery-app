import useSWR from "swr";
import ArtPieces from "@/components/ArtPieces";

export default function HomePage() {
  const URL = "https://example-apis.vercel.app/api/art";

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data: pieces, error, isLoading } = useSWR(URL, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <h1>{"Art Gallery".toUpperCase()}</h1>
      <ArtPieces pieces={pieces}></ArtPieces>
    </>
  );
}
