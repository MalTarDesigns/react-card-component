import React from "react";

import Card from "./card/card";
import "./App.css";

class App extends React.Component {
  state = {
    movies: [
      {
        title: "The Phatom of the opera",
        dates: [
          {
            day: "Tue",
            date: "Sep 22",
            times: ["2:00", "5:00"]
          },
          {
            day: "Wed",
            date: "Sep 23",
            times: ["1:00", "5:00", "8:00"]
          },
          {
            day: "Thru",
            date: "Sep 24",
            times: ["1:00", "5:00", "8:00"]
          }
        ]
      },
      {
        title: "Second Movie",
        dates: [
          {
            day: "Tue",
            date: "Sep 22",
            times: ["8:00", "5:00"]
          }
        ]
      },
      {
        title: "Third Movie",
        dates: [
          {
            day: "Tue",
            date: "Sep 22",
            times: ["8:00", "5:00"]
          }
        ]
      }
    ]
  };
  render() {
    return (
      <div className="container">
        <Card movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
