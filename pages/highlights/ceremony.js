import RootLayout from "@/components/Layout";
import HighlightsLayout from "@/components/HighlightsLayout";
import { pictures } from "./pictures";
import OptimizedImage from "@/components/OptimizedImage";

const Ceremony = () => {
	const { ceremony } = pictures[0]
	return (
		<ul className="flex flex-wrap">
			{ceremony && ceremony.map((photo, index) => (
				<li key={index}>
					<OptimizedImage src={photo.src} alt={photo.alt} width={480} height={333} />
				</li>
			))}
		</ul>
	)
};

Ceremony.getLayout = (page) => (
  <RootLayout>
    <HighlightsLayout>{page}</HighlightsLayout>
  </RootLayout>
);

export default Ceremony;
