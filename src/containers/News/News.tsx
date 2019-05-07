import * as React from "react";
import { Article } from "../Article/Article";
import { IPost } from "../../interfaces";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import "./News.scss";
import { IAppState } from "../../reducers/index";
import * as actions from "../../actions/requests";

interface IOwnProps {} // tslint:disable-line:no-empty-interface
type IProps = IOwnProps & StateFromProps & DispatchFromProps;

class News extends React.Component<IProps> {
  componentDidMount() {
    this.props.fetch();
  }

  renderNews = () => {
    const { posts } = this.props;

    if (posts.length) {
      return posts.map((item: IPost) => <Article key={item.id} data={item} />);
    }

    return <p>Иди работай, холоп</p>;
  };

  render() {
    const { posts } = this.props;

    return (
      <div className="news">
        {this.renderNews()}
        {posts.length > 0 && (
          <strong className={"news__count"}>
            Всего записей: {posts.length}
          </strong>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state: IAppState) => {
  return {
    posts: state.requests.posts,
    isloading: state.requests.isloading
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    fetch: () => dispatch(actions.getPostsPending()),
  };
};

type DispatchFromProps = ReturnType<typeof mapDispatchToProps>;
type StateFromProps = ReturnType<typeof mapStateToProps>;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News);
