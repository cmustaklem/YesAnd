import React, { Component } from 'react'
import ReactDOM from 'react-dom'
class NewGame extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.addGame = this.addGame.bind(this);
    this.state = {items: [], text: ''};
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3">
            <TodoList items={this.state.items} />
            {/* <select className="form-control" id="gameDropDownMenu">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select> */}
          </div>
          <div className="col-sm-9" id="newGameForm">
            <form>
              <input type="text" id="gameName" className="form-control" placeholder="Game Name" /><br />
              <textarea id="gameDescription" className="form-control" rows="3" placeholder="Game Description"></textarea><br />
              <input type="text" id="gameSuggestion" className="form-control" placeholder="Game Suggestion" /><br />
              <button type="submit" id="gameSubmit" className="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
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

  class ListOfGames extends React.Component {
    render() {
      return (
        <select className="form-control" id="gameDropDownMenu">
          {this.props.items.map(item => (
            <option key={item.id}>{item.name}</option>
          ))}
          {/* <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option> */}
        </select>
      )
    }
  }

  console.log('Funny')

  export default NewGame
