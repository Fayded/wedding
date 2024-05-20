import RootLayout from '@/components/Layout';
import HighlightsLayout from '@/components/HighlightsLayout';

const FamilyPhotos = () => {
  return <div>Family Photos</div>;
};

FamilyPhotos.getLayout = (page) => (
  <RootLayout>
    <HighlightsLayout>{page}</HighlightsLayout>
  </RootLayout>
);

export default FamilyPhotos;