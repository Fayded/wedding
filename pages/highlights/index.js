import RootLayout from "@/components/Layout";
import HighlightsLayout from "@/components/HighlightsLayout";

export default function Highlights() {
  return (
    <>
      <h1>Highlights</h1>
    </>
  );
}

Highlights.getLayout = (page) => (
  <RootLayout>
    <HighlightsLayout>{page}</HighlightsLayout>
  </RootLayout>
);
