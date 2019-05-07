import * as React from "react";
import { IPost } from "../../interfaces";
import "./Article.scss";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as actions from "../../actions/requests";

interface IOwnProps {
  key: number;
  data: IPost;
}
type IProps = IOwnProps & DispatchFromProps;

class Article extends React.PureComponent<IProps> {
  onBtnClickHandler = () => {
    this.props.delete(this.props.data.id);
  };

  render() {
    const { day, text } = this.props.data;
    return (
      <div className="article">
        <p className="article__day">{day}</p>
        <p className="article__text">{text}</p>
        <button className="article__btn" onClick={this.onBtnClickHandler}>
          Удалить
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    delete: (id: number) =>
      dispatch(actions.deletePostPending(id))
  };
};

type DispatchFromProps = ReturnType<typeof mapDispatchToProps>;

const connected = connect(
  null,
  mapDispatchToProps
)(Article);

export { connected as Article };
