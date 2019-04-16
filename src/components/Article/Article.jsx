import React from "react";
import './Article.scss'
//import PropTypes from 'prop-types' //

export class Article extends React.Component {

  render() {
    const { date, text } = this.props.data;
    return (
      <div className="article">
        <p className="news__date">{date}</p>
        <p className="news__text">{text}</p>
      </div>
    );
  }
}

// Article.propTypes = {
//   data: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     date: PropTypes.string.isRequired,
//     text: PropTypes.string.isRequired,
//   }),
// }
