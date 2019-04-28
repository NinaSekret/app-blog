import * as React from "react";
import { IPost } from "../../interfaces";
import "./Article.scss";

interface IProps {
  key: number; //c этим надо что то сделать
  data: IPost;
  deletePost: (id: number) => void; // тут правильно?
}

export class Article extends React.PureComponent<IProps> {
  onBtnClickHandler = () => {
    this.props.deletePost(this.props.data.id)
  };

  render() {
    const { day, text } = this.props.data;
    return (
      <div className="article">
        <p className="article__day">{day}</p>
        <p className="article__text">{text}</p>
        <button className="article__btn" onClick={this.onBtnClickHandler}>Удалить</button>
      </div>
    );
  }
}
