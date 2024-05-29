import React, { useState } from 'react';

const HighlightsLayout = ({ children }) => {  
  const [isOpen, setIsOpen] = useState(false);

	const handleClick = (e) => {
		e.preventDefault()
		setIsOpen(prevOpen => !prevOpen)
	}

  return (
    <>
      {children}
    </>
  );
};

export default HighlightsLayout;