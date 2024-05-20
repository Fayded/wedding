import NavBar from './NavBar';

const HighlightsLayout = ({ children }) => {  
  return (
    <>
      <NavBar />   
      {children}
    </>
  );
};

export default HighlightsLayout;