import * as React from "react";
import "./Add.scss";

interface IProps {
  onAddNews: ({}) => void;
}

interface IState {
  date: string;
  text: string;
  isAddNews: boolean;
}

export class Add extends React.PureComponent<IProps, IState> {
  state = {
    date: "",
    text: "",
    isAddNews: false
  };

  onBtnClickHandler = (e: any) => {
    e.preventDefault();
    const { date, text } = this.state;

    this.props.onAddNews({
      id: +new Date(),
      date: date,
      text
    });
  };

  onBtnClickNewPost = () => {
    const { isAddNews } = this.state;
    this.setState({ isAddNews: !isAddNews });
  };

  handleNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ date: e.currentTarget.value });
  };

  handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ text: e.currentTarget.value })
  }
  validate = () => {
    const { date, text } = this.state;
    if (date.trim() && text.trim()) {
      return true;
    }
    return false;
  };

  render() {
    const { date, text, isAddNews } = this.state;
    return (
      <>
        <div className="add__newButton-wrapper">
          <button className="add__newButton" onClick={this.onBtnClickNewPost}>
            {isAddNews ? `Скрыть` : `+ Добавить новость`}
          </button>
        </div>
        {isAddNews && (
          <form className="add">
            <label className="add__label" htmlFor="date">
              Дата
            </label>
            <input
              type="date"
              onChange={this.handleNameChange}
              className="add__date"
              value={date}
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
