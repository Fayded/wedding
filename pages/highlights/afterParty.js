import RootLayout from "@/components/Layout";
import HighlightsLayout from "@/components/HighlightsLayout";

const AfterParty = () => {
	return (<h1>After Party</h1>)
};

AfterParty.getLayout = (page) => (
  <RootLayout>
    <HighlightsLayout>{page}</HighlightsLayout>
  </RootLayout>
);

export default AfterParty;
