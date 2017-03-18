import React from 'react';
import { Link } from 'react-router';

const AthletesMenu = ({ athletes }) => (
  <nav className="athletes-menu">
    {athletes.map(menuAthlete => {
      return (
        <Link key={menuAthlete.id}
              to={`/athlete/${menuAthlete.id}`}
              activeClassName="active">
          {menuAthlete.name}
        </Link>
      );
    })}
  </nav>
);

export default AthletesMenu;