import { useEffect, useRef } from "react";
import RootLayout from "@/components/Layout";
import HighlightsLayout from "@/components/HighlightsLayout";

export default function Highlights() {  
  return (
    <section className="flex justify-center mt-10">
      <video controls preload="none" autoPlay width="100%" muted>
        <source src="https://fayco.imgix.net/E-K_1080.mp4" type="video/mp4" />
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
