import React, { Component } from 'react'
class NewShow2 extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.addGame = this.addGame.bind(this);
    this.state = {items: [], text: ''};
  }

  render() {
    return (
      <div className="row">
      <div className="col-sm-3">
        <h3>Add Cast and Games</h3>

        <form onSubmit={this.addGame}>
          <input onChange={this.handleChange} value={this.state.text} />
          <button className="btn-primary">Add Game and Cast</button>
        </form>
      </div>
      <div className="col-sm-6 text-left" id="newGameTable">
        <TodoList items={this.state.items} />
      </div>

      </div>
    );
  }

  handleChange(e) {
    this.setState({text: e.target.value});
  }

  addGame(e) {
    e.preventDefault();
    var newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState((prevState) => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

export default NewShow2
