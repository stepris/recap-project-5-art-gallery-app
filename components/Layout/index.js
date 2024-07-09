import Navigation from "@/components/Navigation";

export default function Layout({ children }) {
  return (
    <>
      <h1>{"Art Gallery".toUpperCase()}</h1>
      <main>{children}</main>
      <Navigation />
    </>
  );
}
