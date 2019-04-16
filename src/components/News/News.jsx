import React from "react";
import { Article } from "../Article/Article.jsx";
import './News.scss';

export class News extends React.Component {
  renderNews = () => {
    const { data } = this.props;
    let newsTemplate = null;

    if (data.length) {
      newsTemplate = data.map(function(item) {
        return <Article key={item.id} data={item} />;
      });
    } else {
      newsTemplate = <p>Иди работай, холоп</p>;
    }

    return newsTemplate;
  };

  render() {
    const { data } = this.props;

    return (
      <div className="news">
        {this.renderNews()}
        {data.length ? (
          <strong className={"news__count"}>
            Всего записей: {data.length}
          </strong>
        ) : null}
      </div>
    );
  }
}

// News.propTypes = {
//   data: PropTypes.array.isRequired
// };
