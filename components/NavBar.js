import Link from 'next/link'
import { usePathname } from 'next/navigation';

const ActiveMenuLink = ({ children, href }) => {
  const pathname = usePathname();
  const active = href === pathname;

  return (
    <Link
      href={href}
      className={`hover:bg-gray-100 p-2 rounded block text-sm ${
        active ? 'text-black font-semibold' : 'text-gray-500'
      }`}
    >
      {children}
    </Link>
  );
};

export default function NavBar() {
	return (
		<nav>
			<ul className="flex justify-center">
				<li className="mx-5 uppercase">
					<ActiveMenuLink href="/highlights/firstLooks">First Looks</ActiveMenuLink>
				</li>
				<li className="mx-5 uppercase">
					<ActiveMenuLink href="/highlights/cathedralArrivals">Cathedral Arrivals</ActiveMenuLink>
				</li>
				<li className="mx-5 uppercase">
					<ActiveMenuLink href="/highlights/familyPhotos">Family Photos</ActiveMenuLink>
				</li>
				<li className="mx-5 uppercase">
					<ActiveMenuLink href="/highlights/ceremony">Ceremony</ActiveMenuLink>
				</li>
				<li className="mx-5 uppercase">
					<ActiveMenuLink href="/highlights/cocktailParty">Cocktail Party</ActiveMenuLink>
				</li>
				<li className="mx-5 uppercase">
					<ActiveMenuLink href="/highlights/reception">Reception</ActiveMenuLink>
				</li>
				<li className="mx-5 uppercase">
					<ActiveMenuLink href="/highlights/afterParty">After Party</ActiveMenuLink>
				</li>
			</ul>
		</nav>
	)
}