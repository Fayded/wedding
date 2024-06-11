import RootLayout from '@/components/Layout';
import HighlightsLayout from '@/components/HighlightsLayout';
import { pictures } from "@/components/pictures";
import OptimizedImage from "@/components/OptimizedImage";
import Link from 'next/link';

const CathedralArrivals = () => {
	const { cathedralArrivals } = pictures[0]
	return (
		<ul className="px-4 md:columns-2 md:gap-4 md:gap-y-4 md:px-4 lg:columns-5 lg:gap-4 lg:gap-y-4 lg:px-20 mt-10">
			{cathedralArrivals && cathedralArrivals.map((photo, index) => (
				<li key={index} className="mb-4">
					<Link href={`https://fayco.imgix.net/${photo.src}?&dl=${photo.src}`}>
						<OptimizedImage src={photo.src} alt={photo.alt} width={480} height={333} />
					</Link>
				</li>
			))}
		</ul>
	)
};

CathedralArrivals.getLayout = (page) => (
  <RootLayout>
    <HighlightsLayout>{page}</HighlightsLayout>
  </RootLayout>
);

export default CathedralArrivals;