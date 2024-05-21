import RootLayout from "@/components/Layout";
import HighlightsLayout from "@/components/HighlightsLayout";
import { pictures } from "@/components/pictures";
import OptimizedImage from "@/components/OptimizedImage";

const AfterParty = () => {
	const { afterParty } = pictures[0]
	return (
		<ul className="columns-5 gap-4 gap-y-4 mt-10 px-20">
			{afterParty && afterParty.map((photo, index) => (
				<li key={index} className="mb-4">
					<OptimizedImage src={photo.src} alt={photo.alt} width={480} height={333} />
				</li>
			))}
		</ul>
	)
};

AfterParty.getLayout = (page) => (
  <RootLayout>
    <HighlightsLayout>{page}</HighlightsLayout>
  </RootLayout>
);

export default AfterParty;
