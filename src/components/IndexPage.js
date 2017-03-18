import React from 'react';
import AthletePreview from './AthletePreview';
import athletes from '../data/athletes';

const IndexPage = () => (
  <div className="home">
    <div className="athletes-selector">
      {athletes.map(athlete => <AthletePreview key={athlete.id} {...athlete} />)}
    </div>
  </div>
);

export default IndexPage;