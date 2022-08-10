import { useEffect, useState } from 'react';
import * as React from 'react';

const TradingSectionTitle = ({
  section,
  selectedSection,
  setSelectedSection
}) => {
  const [isSelected, setIsSelected] = useState(section.id === selectedSection.id);

  useEffect(() => {
    setIsSelected(section.id === selectedSection.id)
  }, [selectedSection]);

  return (
    <div className={`trading-section-title ${isSelected ? 'trading-section-title__active' : ''}`}
         onClick={() => {
           setSelectedSection(section);
         }}
    >
      {section.title}
    </div>
  )
}

export default TradingSectionTitle;