import React, { Component } from "react";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import { Add } from "./components/Add/Add";
import News from "./containers/News/News";
import "./App.scss";
import * as actions from "./actions/requests";

interface IOwnProps {} // tslint:disable-line:no-empty-interface
type IProps = IOwnProps & DispatchFromProps;

class App extends Component<IProps> {
  render() {
    return (
      <div className="app__wrapper">
        <h3 className="app__title">Бложик про движение Ниночки по волнам js</h3>
        <p className="app__info">
          Тут я буду записывать все свои шаги развития в frontend разработке.
          Прошу строго не судить за дизайн.
        </p>
        <News />
        <Add addPost={this.props.add} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    add: (id: number, day: string, text: string) =>
      dispatch(actions.addPostPending({ id, day, text }))
  };
};
type DispatchFromProps = ReturnType<typeof mapDispatchToProps>;

export default connect(
  null,
  mapDispatchToProps
)(App);
