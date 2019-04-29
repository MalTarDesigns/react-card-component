import React from "react";
import "./styles.css";

class Card extends React.Component {
  render() {
    console.log(this.props.movies);

    return this.props.movies.map(movie => (
      <div className="row pt-5">
        <div className="card-table">
          <img
            class="show-poster"
            src="https://cdn.glitch.com/bf244f65-c514-428a-b4b2-ac2746281e91%2Fposter.jpg?1555596324072"
            alt="show poster"
          />
          <h2 className="movie-title">
            {movie.title}
            <span className="tickets-text"> Tickets</span>
          </h2>
          <div className="ticket-price">$29.00 - $215.00</div>
          <div className="learn-more-box">
            <img
              className="info-icon"
              src="https://cdn.glitch.com/bf244f65-c514-428a-b4b2-ac2746281e91%2Finfo.svg?1555596324183"
              alt="info icon"
            />
            <a className="learn-more-link" href="#" role="button">
              Learn More
            </a>
          </div>

          <table className="table">
            <tbody>
              {movie.dates.map(date => (
                <tr>
                  <th className="text-center">
                    <div className="show-day">{date.day}</div>{" "}
                    <div className="show-date">{date.date}</div>
                  </th>
                  <td>
                    {date.times.map(time => (
                      <button className="btn btn-primary btn-time">
                        {time}pm
                      </button>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="more-performances text-center">
            <a href="#" role="button">
              More Performances (4)
            </a>
            <img
              className="float-right"
              src="https://cdn.glitch.com/bf244f65-c514-428a-b4b2-ac2746281e91%2Fchevron.svg?1555596324053"
              alt="chevron icon"
            />
          </div>
        </div>
      </div>
    ));
  }
}

export default Card;
