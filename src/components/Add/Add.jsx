import React from "react";
import "./Add.scss";

export class Add extends React.Component {
  state = {
    date: "",
    text: "",
    isAddNews: false
  };
  onBtnClickHandler = e => {
    e.preventDefault();
    const { date, text, bigText } = this.state;
    this.props.onAddNews({
      id: +new Date(),
      date: date,
      text,
      bigText
    });
  };

  onBtnClickNewPost = () => {
    const { isaddNews } = this.state;
    this.setState({ isaddNews: !isaddNews });
  };

  handleChange = e => {
    const { id } = e.currentTarget;
    this.setState({ [id]: e.currentTarget.value });
  };

  validate = () => {
    const { date, text } = this.state;
    if (date.trim() && text.trim()) {
      return true;
    }
    return false;
  };

  render() {
    const { date, text, isaddNews } = this.state;
    return (
      <>
        <div className="add__newButton-wrapper">
          <button className="add__newButton" onClick={this.onBtnClickNewPost}>
            {isaddNews ? `Скрыть` : `+ Добавить новость`}
          </button>
        </div>
        {isaddNews && (

            <form className="add">
              <label className="add__label" for="date">
                Дата
              </label>
              <input
                id="date"
                type="text"
                onChange={this.handleChange}
                className="add__date"
                value={date}
              />
              <label className="add__label" for="text">
                Как ты прокачалась?
              </label>
              <textarea
                id="text"
                onChange={this.handleChange}
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

// Add.propTypes = {
//   onAddNews: PropTypes.func.isRequired
// };
