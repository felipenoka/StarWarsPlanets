import React, { Component } from 'react';
import './Planet.css'

class Planet extends Component {
  state = {
    data: []
  }
  componentDidMount() {
    const url = 'https://swapi.co/api/planets/'
    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.setState({
          data: response.results,
        })
      })
  }

  getPlanet = (event) => {
    this.forceUpdate()
  }
  render() {
    const index = Math.floor(Math.random() * this.state.data.length)
    const planet = this.state.data[index]

    return (
      <div className="container">
        <div className="planet-box">
            {planet &&
            <div>
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
            </div>}
        </div>
        <div className="mt-5">
            <button className="planet-btn" onClick={this.getPlanet}>NEXT</button>
        </div>
      </div>
    )
  }
}

export default Planet;
