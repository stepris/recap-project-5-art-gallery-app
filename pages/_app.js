import GlobalStyle from "../styles";
import useSWR from "swr";

export default function App({ Component, pageProps }) {
  // console.log("hi from app js");
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
  // console.log("pieces from app.js", pieces);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} pieces={pieces} />
    </>
  );
}
