import GlobalStyle from "@/styles";
import Layout from "@/components/Layout";
import useSWR from "swr";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const URL = "https://example-apis.vercel.app/api/art";

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(URL, fetcher);
  const [artPiecesInfo, setArtPiecesInfo] = useState([]);

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

  function handleToggleFavorite(slugToFavorite) {
    const elementToFavorite = artPiecesInfo.find((piece) => {
      return piece.slug === slugToFavorite;
    });

    if (!elementToFavorite) {
      const newFavoritesArray = [
        ...artPiecesInfo,
        { slug: slugToFavorite, isFavorite: true },
      ];

      setArtPiecesInfo(newFavoritesArray);
    } else {
      const newArray = artPiecesInfo.map((piece) => {
        if (piece.slug === slugToFavorite) {
          return { ...piece, isFavorite: !piece.isFavorite };
        } else {
          return piece;
        }
      });
      setArtPiecesInfo(newArray);
    }
    console.log(artPiecesInfo);
  }
  console.log(artPiecesInfo);

  const artPiecesInfoObject = {
    artPiecesInfo,
    handleToggleFavorite,
    onToggleFavorite: handleToggleFavorite,
  };

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component
          {...pageProps}
          pieces={pieces}
          artPiecesInfoObject={artPiecesInfoObject}
        />
      </Layout>
    </>
  );
}
