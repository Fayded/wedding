import RootLayout from '@/components/Layout';
import HighlightsLayout from '@/components/HighlightsLayout';

const CathedralArrivals = () => {
  return <div>Cathedral Arrivals</div>;
};

CathedralArrivals.getLayout = (page) => (
  <RootLayout>
    <HighlightsLayout>{page}</HighlightsLayout>
  </RootLayout>
);

export default CathedralArrivals;