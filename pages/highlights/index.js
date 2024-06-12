import { useEffect, useRef } from "react";
import RootLayout from "@/components/Layout";
import HighlightsLayout from "@/components/HighlightsLayout";

export default function Highlights() {
	useEffect(() => {
		const video = document.querySelector("video").scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
	}, []);
  return (
    <section className="flex justify-center mt-10">
      <video controls preload="none" autoPlay width="100%">
				<source src="https://fayco.imgix.net/E-K_432.mp4.mp4" media="(max-width: 599px)" type="video/mp4" />
        <source src="https://fayco.imgix.net/E-K_1080.mp4.mp4" type="video/mp4" />
        <track
          src="/path/to/captions.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}

Highlights.getLayout = (page) => (
  <RootLayout>
    <HighlightsLayout>{page}</HighlightsLayout>
  </RootLayout>
);
