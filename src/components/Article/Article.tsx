import * as React from "react";
import { Post } from "../../interfaces";
import "./Article.scss";

interface IProps {
  key: number; //c этим надо что то сделать
  data: Post;
}
export class Article extends React.PureComponent<IProps> {
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
