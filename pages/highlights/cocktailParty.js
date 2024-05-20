import RootLayout from "@/components/Layout";
import HighlightsLayout from "@/components/HighlightsLayout";
import { pictures } from "./pictures";

const CocktailParty = () => {
  return <div>Cocktail Party</div>;
};

CocktailParty.getLayout = (page) => (
  <RootLayout>
    <HighlightsLayout>{page}</HighlightsLayout>
  </RootLayout>
);

export default CocktailParty;
