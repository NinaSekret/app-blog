import * as React from "react";

import "./Add.scss";

interface IProps {
  addPost: (id: number, text: string, day: string) => void;
}

interface IState {
  day: string;
  text: string;
  isAddNews: boolean;
}

export class Add extends React.PureComponent<IProps, IState> {
  state = {
    day: "",
    text: "",
    isAddNews: false
  };

  onBtnClickHandler = (e: any) => {
    e.preventDefault();
    const { day, text } = this.state;
    const id = Math.floor(Math.random() * (10000 - 1 + 1)) + 1;

    this.props.addPost(id, day, text);

    this.setState({
      day: "",
      text: ""
    });
  };

  onBtnClickNewIPost = () => {
    const { isAddNews } = this.state;
    this.setState({ isAddNews: !isAddNews });
  };

  handleNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ day: e.currentTarget.value });
  };

  handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ text: e.currentTarget.value });
  };

  validate = () => {
    const { day, text } = this.state;
    if (day.trim() && text.trim()) {
      return true;
    }
    return false;
  };

  render() {
    const { day, text, isAddNews } = this.state;

    return (
      <>
        <div className="add__newButton-wrapper">
          <button className="add__newButton" onClick={this.onBtnClickNewIPost}>
            {isAddNews ? `Скрыть` : `+ Добавить новость`}
          </button>
        </div>
        {isAddNews && (
          <form className="add">
            <label className="add__label" htmlFor="day">
              Дата
            </label>
            <input
              type="date"
              onChange={this.handleNameChange}
              className="add__day"
              value={day}
            />
            <label className="add__label" htmlFor="text">
              Как ты прокачалась?
            </label>
            <textarea
              onChange={this.handleTextChange}
              className="add__text"
              value={text}
            />
            <button
              className="add__sentButton"
              onClick={this.onBtnClickHandler}
              disabled={!this.validate()}
            >
              Отправить
            </button>
          </form>
        )}
      </>
    );
  }
}
