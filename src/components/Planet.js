import React, { Component } from 'react';
import api from '../service/api';
import './Planet.css';

class Planet extends Component {
  state = {
    planets: [],
    err: false
  }

  getPlanet = async (event) => {
    const randomPlanet = (min, max) => {
      const maximum = Math.floor(max);
      const minimun = Math.ceil(min);
      const randomNum = Math.floor(Math.random() * (maximum - minimun + 1)) + minimun;

      // eslint-disable-next-line
      if (randomNum === randomNum) {
        return randomNum + 1;
      }
      return randomNum;
    }
  const Planet = randomPlanet(1, 61);
  try {
    const resp = await api.get(`planets/${Planet}`);

    this.setState({
      planets: [
        {
          id: Math.floor(Math.random() * 61),
          name: resp.data.name,
          population: resp.data.population,
          climate: resp.data.climate,
          terrain: resp.data.terrain,
          films: resp.data.films,
        }
      ],
      err: false
    });
  } catch (err) {
    this.setState({
      err: true,
    })
  }
}

componentDidMount() {
  this.getPlanet()
}

  render() {
    const { planets } = this.state;
    return (
      <div className="container">
        <div className="planet-box">
            {planets.map(planet => (
            <div key={planet.id}>
                <div className="planet-name">
                    <h1>{planet.name}</h1>
                </div>
                <div className="mt-5">
                    <p className="read"><strong>Population:</strong> {planet.population}</p>
                    <p className="read"><strong>Climate:</strong> {planet.climate}</p>
                    <p className="read"><strong>Terrain:</strong> {planet.terrain}</p>
                    <br />
                    <br />
                    <p className="read text-center">Featured in {planet.films.length} Films</p>
                </div>
            </div>
            ))}
        </div>
        <div className="mt-5">
            <button className="planet-btn" onClick={this.getPlanet}>NEXT</button>
        </div>
      </div>
    )
  }
}

export default Planet;
