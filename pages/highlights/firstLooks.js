import RootLayout from '@/components/Layout';
import HighlightsLayout from '@/components/HighlightsLayout';

const FirstLooks = () => {
  return <div>First Looks</div>;
};

FirstLooks.getLayout = (page) => (
  <RootLayout>
    <HighlightsLayout>{page}</HighlightsLayout>
  </RootLayout>
);

export default FirstLooks;