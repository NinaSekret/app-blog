import * as React from "react";
import { Article } from "../Article/Article";
import { IPost } from "../../interfaces";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import { getPosts, deletePost } from "../../actions/requests";
import "./News.scss";
import { IAppState } from "../../redusers/index";

interface IOwnProps {} // tslint:disable-line:no-empty-interface
type IProps = IOwnProps & StateFromProps & DispatchFromProps;

class News extends React.Component<IProps> {
  componentDidMount() {
    this.props.getPosts();
  }

  renderNews = () => {
    const { posts } = this.props;
    let newsTemplate = null;

    if (posts.length) {
      newsTemplate = posts.map((item: IPost) => {
        return (
          <Article
            key={item.id}
            data={item}
            deletePost={this.props.deletePost}
          />
        );
      });
    } else {
      newsTemplate = <p>Иди работай, холоп</p>;
    }

    return newsTemplate;
  };

  render() {
    const { posts } = this.props;

    return (
      <div className="news">
        {this.renderNews()}
        {posts.length ? (
          <strong className={"news__count"}>
            Всего записей: {posts.length}
          </strong>
        ) : null}
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

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      getPosts,
      deletePost
    },
    dispatch
  );

type DispatchFromProps = ReturnType<typeof mapDispatchToProps>;
type StateFromProps = ReturnType<typeof mapStateToProps>;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News);
