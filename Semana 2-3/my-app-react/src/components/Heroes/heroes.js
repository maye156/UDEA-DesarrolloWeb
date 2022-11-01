import React from "react";
import PropTypes from 'prop-types';
import './heroes.css';
import { showAdditional } from "../App/Marvel";

export default function HeroesCard({ name, id, additional, owner }) {

    return <div className="heroe-wrapper">
        <h2> {name}  </h2>
        <h3>{id} </h3>
        <h4>{owner} </h4>
        <button onClick={() => showAdditional(additional)}> More Info </button>
    </div>
}

HeroesCard.propTypes = {
    additional: PropTypes.shape({
        notes: PropTypes.string,
        link: PropTypes.string
    }),
    name: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    //showAdditional: PropTypes.func.isRequired
}

HeroesCard.defaultProps = {
    additional: {
      notes: 'No Additional Information'
    }
  }


