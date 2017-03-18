import React from 'react';

const typeMap = {
  'G': 'Gold',
  'S': 'Silver',
  'B': 'Bronze'
};

const Medal = ({ type, year, city, event, category }) => (
  <li className="medal">
    <span className={`symbol symbol-${type}`} title={typeMap[type]}>{type}</span>
    <span className="year">{year}</span>
    <span className="city"> {city}</span>
    <span className="event"> ({event})</span>
    <span className="category"> {category}</span>
  </li>
);

export default Medal;