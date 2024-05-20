import Link from 'next/link';
import NavBar from './NavBar';

const HighlightsLayout = ({ children }) => {
  return (
    <>
      <NavBar /> 
      <section>
        {children}
      </section>
    </>
  );
};

export default HighlightsLayout;