import RootLayout from '@/components/Layout';
import HighlightsLayout from '@/components/HighlightsLayout';

const Ceremony = () => {
  return <div>Ceremony</div>;
};

Ceremony.getLayout = (page) => (
  <RootLayout>
    <HighlightsLayout>{page}</HighlightsLayout>
  </RootLayout>
);

export default Ceremony;