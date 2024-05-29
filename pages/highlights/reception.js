import RootLayout from "@/components/Layout";
import HighlightsLayout from "@/components/HighlightsLayout";
import { pictures } from "@/components/pictures";
import OptimizedImage from "@/components/OptimizedImage";

const Reception = () => {
  const { reception } = pictures[0]
	return (
		<ul className="px-4 md:columns-2 md:gap-4 md:gap-y-4 md:px-4 lg:columns-5 lg:gap-4 lg:gap-y-4 lg:px-20 mt-10">
			{reception && reception.map((photo, index) => (
				<li key={index} className="mb-4">
					<OptimizedImage src={photo.src} alt={photo.alt} width={480} height={333} />
				</li>
			))}
		</ul>
	)
};

Reception.getLayout = (page) => (
  <RootLayout>
    <HighlightsLayout>{page}</HighlightsLayout>
  </RootLayout>
);

export default Reception;
