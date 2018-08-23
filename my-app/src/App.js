import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function formatDate(date) {
  return date.toLocaleDateString();
}

function Name(props) {
  return (
    <div className="UserInfo-name">
      {props.user.name}
    </div>
  );
}

function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

function MessageReact(props) {
  return (
    <div className="Comment-text">{props.message}</div>
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <Name user={props.user} />
    </div>
    
  );
}

function Data(props) {
  return (
    <div className="Comment-date">
        {formatDate(props.thisDate)}
      </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <MessageReact message={props.text} />
      <Data thisDate={props.date} />
    </div>
  );
}

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64',
  },
};

class App extends Component {
  
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="Kitty">
        <Comment
          date={comment.date}
          text={comment.text}
          author={comment.author}
        />
      </div>
      </div>
    );
  }
}

export default App;
