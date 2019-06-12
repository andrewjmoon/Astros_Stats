import React from "react";
import { Link } from "react-router-dom";
import Tabletop from "tabletop";

export default class Batters extends React.Component {
  state = {
    data: []
  };

  componentDidMount() {
    Tabletop.init({
      key: process.env.REACT_APP_API_KEY,
      callback: googleData => {
        this.setState({
          data: googleData
        });
      },
      simpleSheet: true
    });
  }
  render() {
    console.log("updated state --->", this.state);
    const { data } = this.state;
    return (
      <div className="App">
        <Link to="/">
          <li>Home</li>
        </Link>

        <>
          {data.map(a => {
            return (
              <div key={a.Player}>
                <p>Player :{a.Player}</p>
                <p>
                  Position {a.Position}: Batting Average {a.BA}
                </p>
              </div>
            );
          })}
        </>
      </div>
    );
  }
}
