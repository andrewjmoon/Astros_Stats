import React from "react";
import { Link } from "react-router-dom";
import Tabletop from "tabletop";

export default class Pitchers extends React.Component {
  state = {
    data: []
  };

  componentDidMount() {
    Tabletop.init({
      key: process.env.REACT_APP_API_KEY2,
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
              <div key={a.Pitcher}>
                <p>Player :{a.Pitcher}</p>
                <p>
                  Position {a.Role}: ERA {a.ERA}: Wins {a.W}: Loses {a.L}: Games{" "}
                  {a.Games}
                </p>
              </div>
            );
          })}
        </>
      </div>
    );
  }
}
