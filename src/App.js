import React from "react";
import "./App.scss";
import { Add } from "./components/Add/Add.jsx";
import { News } from "./components/News/News.jsx";
import newsData from "./data/newsData";

class App extends React.Component {
  state = {
    news: newsData
  };
  handleAddNews = data => {
    const nextNews = [data, ...this.state.news];
    this.setState({ news: nextNews });
  };
  render() {
    return (
      <React.Fragment>
        <div className="app__wrapper">
          <h3 className="app__title">
            Бложик про движение Ниночки по волнам js
          </h3>
          <p className="app__info">Тут я буду записывать все свои шаги развития в frontend разработке. Прошу строго не судить за дизайн.</p>
          <News data={this.state.news} />
          <Add onAddNews={this.handleAddNews} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
