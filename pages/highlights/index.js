import { Montserrat } from 'next/font/google'
import RootLayout from '@/components/Layout';
import HighlightsLayout from '@/components/HighlightsLayout';
const montserrat = Montserrat({ subsets: ['latin'] })
import { pictures } from "@/components/pictures";
import OptimizedImage from "@/components/OptimizedImage";

export default function Highlights() {
	return (
		<h1>Highlights</h1>
	)
};

Highlights.getLayout = (page) => (
  <RootLayout>
    <HighlightsLayout>{page}</HighlightsLayout>
  </RootLayout>
);