import * as React from "react";
import { Article } from "../Article/Article";
import { Post } from "../../interfaces";
import "./News.scss";

interface IProps {
  blogData: Post[];
}

export class News extends React.Component<IProps> {
  renderNews = () => {
    const { blogData } = this.props;
    let newsTemplate = null;

    if (blogData.length) {
      newsTemplate = blogData.map(function(item) {
        return <Article key={item.id} data={item} />;
      });
    } else {
      newsTemplate = <p>Иди работай, холоп</p>;
    }

    return newsTemplate;
  };

  render() {
    const { blogData } = this.props;

    return (
      <div className="news">
        {this.renderNews()}
        {blogData.length ? (
          <strong className={"news__count"}>
            Всего записей: {blogData.length}
          </strong>
        ) : null}
      </div>
    );
  }
}
