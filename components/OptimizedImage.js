import Image from "next/image";
import Link from "next/link";

const imgixLoader = ({src, width}) => {
	const [page, picture] = src.split('/')
	const imgixUrl = new URL('https://fayco.imgix.net')
	imgixUrl.pathname = `${page}/${picture}`
	imgixUrl.searchParams.set("auto", "format, compress")
  	imgixUrl.searchParams.set("w", width.toString());
	imgixUrl.searchParams.set("dl", imgixUrl.pathname)
	imgixUrl.searchParams.set("q", "75")
	return imgixUrl.href;
};

export default function OptimizedImage({ src, width, height, alt }) {
  return <Image loader={imgixLoader} className='cursor-pointer' src={src} alt={alt} width={width} height={height} />
}
