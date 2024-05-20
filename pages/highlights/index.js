import { Montserrat } from 'next/font/google'
import RootLayout from '@/components/Layout';
import HighlightsLayout from '@/components/HighlightsLayout';
const montserrat = Montserrat({ subsets: ['latin'] })
import { pictures } from "@/components/pictures";
import OptimizedImage from "@/components/OptimizedImage";

export default function Highlights({children}) {
  const { firstLooks } = pictures[0]
	return (
		<ul className="columns-5 gap-4 gap-y-4 mt-10 px-20">
			{firstLooks && firstLooks.map((photo, index) => (
				<li key={index} className="mb-4">
					<OptimizedImage src={photo.src} alt={photo.alt} width={480} height={333} />
				</li>
			))}
		</ul>
	)
};

Highlights.getLayout = (page) => (
  <RootLayout>
    <HighlightsLayout>{page}</HighlightsLayout>
  </RootLayout>
);