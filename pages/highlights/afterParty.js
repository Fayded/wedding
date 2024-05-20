import RootLayout from '@/components/Layout';
import HighlightsLayout from '@/components/HighlightsLayout';

const AfterParty = () => {
  return <div>After Party</div>;
};

AfterParty.getLayout = (page) => (
  <RootLayout>
    <HighlightsLayout>{page}</HighlightsLayout>
  </RootLayout>
);

export default AfterParty;