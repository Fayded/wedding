import { useEffect, useRef, useState} from "react";
import RootLayout from "@/components/Layout";
import HighlightsLayout from "@/components/HighlightsLayout";

export default function Highlights() {
	const videoRef = useRef();
	const [muted, setMuted] = useState(false);
	const [play, setPlay] = useState(false);

	useEffect(() => {
		if (videoRef.current) {
			window.requestAnimationFrame(() => 
				videoRef.current?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
			)
		}
		videoRef.current.play();
		videoRef.current.muted = false;
	}, [])

  return (
    <section className="flex justify-center mt-10">
      <video controls ref={videoRef} preload="none" muted width="100%" poster="https://fayco.imgix.net/Reception/1S5A3399.jpg">
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
