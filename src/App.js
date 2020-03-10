import React, { Component } from "react";
import Header from "./component/header";
import "./app.scss";
import HeadLine from "./component/headline";
import SharedButton from "./component/button";
import ListItem from "./component/listItem";
import { connect } from "react-redux";
import { fetchPosts } from "./reducers/posts/reducer";

const tempArr = [
  {
    fName: "Joe",
    lName: "Bloggs",
    email: "joebloggs@gmail.com",
    age: 24,
    onlineStatus: true
  }
];
const initialState = {
  hideBtn: false
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
      hideBtn: false
    };
    this.fetch = this.fetch.bind(this);
  }

  fetch() {
    this.props.fetchPosts();
    this.exampleMethod_updatesState();
  }

  exampleMethod_updatesState() {
    const { hideBtn } = this.state;
    this.setState({
      hideBtn: !hideBtn
    });
  }

  exampleMethod_returnsAValue(number) {
    return number + 1;
  }

  render() {
    const { posts } = this.props;
    const { hideBtn } = this.state;
    const configButton = {
      buttonText: "Get posts",
      emitEvent: this.fetch
    };

    return (
      <div className='App' data-test='appComponent'>
        <Header />
        <section className='main'>
          <HeadLine
            header='Posts'
            desc='Click the button to render posts!'
            tempArr={tempArr}
          />
          {!hideBtn && <SharedButton {...configButton} />}
          {posts.data &&
            posts.data.length > 0 &&
            posts.data.map((item, index) => {
              let props = {
                title: item.title,
                desc: item.body
              };
              return <ListItem key={index} {...props}></ListItem>;
            })}
        </section>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps, { fetchPosts })(App);
