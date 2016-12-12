import React from 'react'
import ReactDOM from 'react-dom'

class ListOfGames extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            description: '',
            suggestion: ''
        }
    }
    componentDidMount() {
      fetch('/api/v1/invite', {
          body: JSON.stringify({
            name: this.state.name,
            description: this.state.description,
            suggestion: this.state.suggestion,
          }),
          credentials: 'same-origin',
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => response.json())
        .then((item)=>{
            this.setState({
                name:item.name,
                description:item.description,
                suggestion:item.suggestion,
            })
            console.log(item)
        })

    }
    render() {
        return <div className="panel-group" id="accordion" aria-multiselectable="true">
    <div className="panel panel-default">
      <div className="panel-heading" role="tab" id="headingTwo">
        <h4 className="panel-title">
          <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            {this.props.name}
          </a>
        </h4>
      </div>
      <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
        <div className="panel-body">
          <p>{this.props.description}</p>
          <p>{this.props.suggestion}</p>
        </div>
      </div>
    </div>
  </div>
    }
}

export default ListOfGames
