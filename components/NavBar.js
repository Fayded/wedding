import Link from 'next/link'
import { usePathname } from 'next/navigation';

const ActiveMenuLink = ({ children, href }) => {
  const pathname = usePathname();
  const active = href === pathname;
  return (
		<li className={`py-1 lg:hover:border-b no-underline ${ active ? 'lg:border-b lg:border-slate-200' : 'lg:border-b lg:border-transparent' }`}>
			<Link
				href={href}
				className="mx-5 uppercase no-underline hover:no-underline">
				{children}
			</Link>
		</li>
  );
};

export default function NavBar(props) {
	const { isOpen } = props;
	return (
		<nav className={`${isOpen ? 'max-h-80' : 'max-h-0'} lg:max-h-100 overflow-hidden lg:overflow-visible transition-all duration-500 ease`}>
			<ul className="block lg:flex justify-center">
				<ActiveMenuLink href="/highlights/firstLooks">First Looks</ActiveMenuLink>
				<ActiveMenuLink href="/highlights/cathedralArrivals">Cathedral Arrivals</ActiveMenuLink>
				<ActiveMenuLink href="/highlights/familyPhotos">Family Photos</ActiveMenuLink>
				<ActiveMenuLink href="/highlights/ceremony">Ceremony</ActiveMenuLink>
				<ActiveMenuLink href="/highlights/cocktailParty">Cocktail Party</ActiveMenuLink>
				<ActiveMenuLink href="/highlights/reception">Reception</ActiveMenuLink>
				<ActiveMenuLink href="/highlights/afterParty">After Party</ActiveMenuLink>
			</ul>
		</nav>
	)
}