import RootLayout from '@/components/Layout';
import HighlightsLayout from '@/components/HighlightsLayout';

const Reception = () => {
  return <div>Reception</div>;
};

Reception.getLayout = (page) => (
  <RootLayout>
    <HighlightsLayout>{page}</HighlightsLayout>
  </RootLayout>
);

export default Reception;