import Link from 'next/link'
import { usePathname } from 'next/navigation';

const ActiveMenuLink = ({ children, href }) => {
  const pathname = usePathname();
  const active = href === pathname;
  return (
		<li className={`py-1 hover:border-b no-underline ${ active ? 'border-b border-slate-200' : 'border-b border-transparent' }`}>
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
		<nav className={isOpen ? 'left-0' : 'lg:left-0 absolute lg:relative left-[-100%]'}>
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