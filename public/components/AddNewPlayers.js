import React from 'react'

class AddNewPlayers extends React.Component {
  constructor(props) {
    super(props);
    this.sendInvite = this.sendInvite.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      prospect: ''
    }
  }

  handleChange(event) {
    this.setState({prospect: event.target.value});
  }

  sendInvite(e){
    fetch('/api/v1/invite', {
      body: JSON.stringify({
        email: this.state.prospect,
      }),
      credentials: 'same-origin',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(response => {
      alert('We have sent an invite to ' + this.state.prospect);
    })
}

  render() {
    return (
      <div className="row">
        <div className="col-lg-6 addNewPlayerRow">
          <div className="input-group">
            <input type="text" className="form-control" onChange={this.handleChange} placeholder="Email Address" />
            <span className="input-group-btn">
              <button className="btn btn-default" onClick={this.sendInvite} type="button">Reach out!</button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default AddNewPlayers











// import React, { Component } from 'react'
// //I am using class to define this component.
// class AddNewPlayers extends Component {
//     constructor(props) {
//         super(props)
//         this.typing = this.typing.bind(this)
//         this.enter = this.enter.bind(this)
//         this.click = this.click.bind(this)
//         this.state = {
//             newPlayer: '',
//             players: []
//         } //this sets it so there is no data loaded in when opening the page. I added a value within the newPlayer string and it gave the input field a default value
//     }
//     typing(e) {
//         this.setState({
//             newPlayer: e.target.value
//         })
//     }
//     enter(e) {
//         if (e.key === 'Enter' && e.target.value !== '') {
//             let newPlayers = this.state.player
//
//             newPlayers.push({
//                 text: e.target.value
//             })
//             this.setState({
//                 newPlayer: '',
//                 players: newPlayers
//             })
//         }
//     }
//     click(e) {
//         if (e.target.value !== '') {
//             let newPlayers = this.state.player
//
//             newPlayers.push({
//                 text: e.target.value
//             })
//
//             this.setState({
//                 newPlayer: '',
//                 players: newPlayers
//             })
//     }}
//
//     render() {  var player = 1;
//      var value
//      function add_fields() {
//          player++;
//          var addToList = document.getElementById('addPlayers')
//          var addingplayerline = document.createElement("div");
//          addingplayerline.innerHTML = '<div class="form-group"> Add Player ' + player +':</div><div class="content addNewPlayerRow"><span><input type="email" class="addNewPlayerRow" name="newplayeremailaddress" placeholder="newplayer@funnymail.com" value="" /></span></div>';
//
//     addToList.appendChild(addingplayerline)
//         return <div className="row">
//             <div className ="col-sm-8 col-sm-offset-2">
//                 <div class="form-group"> Add Player ' + player +':</div><div class="content addNewPlayerRow"><span><input type="email" class="addNewPlayerRow" name="newplayeremailaddress" placeholder="newplayer@funnymail.com" value="" /></span></div>
//                 <button type="button" className="btn btn-default" id="sendNewUserEmail" action>Submit</button>
//             </div>
//         {/* <div className="col-sm-6">
//             <input type="text" className="form-control" value={this.state.newPlayer} onChange={this.typing} onKeyPress={this.enter}  />
//                 <div className="text-center button">
//                 <button value={this.state.newPlayer} className="btn btn-success" onClick={this.click} onChange={this.typing} type="button" id="addBtn">Add to my list</button>
//                 </div>
//             </div>
//             <ul className="col-sm-6">
//             {TodoItems}
//             </ul>
//             </div> */}
//         }}
//
// export default AddNewPlayers
