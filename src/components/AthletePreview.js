import React from 'react';
import { Link } from 'react-router';

const AthletePreview = ({ id, image, name, medals }) => (
  <Link to={`/athlete/${id}`}>
    <div className="athlete-preview">
      <img src={`img/${image}`}/>
      <h2 className="name">{name}</h2>
      <span className="medals-count"><img src="/img/medal.png"/> {medals.length}</span>
    </div>
  </Link>
);

export default AthletePreview;