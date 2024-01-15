
import React, { Component } from 'react'
import { urlApi } from '../dati/dati'

export default class CommentArea extends Component {

    state = {
        url: {urlApi}
    }

componentDidMount() {
    fetch(this.state.urlApi)
    .then(response => response.json())
    .then(json => this.setState({ data: json}))
    .catch(err => console.error(err))
}

  render() {
    return (
        console.dir(this.state.data)        
    )
  }
}

{/* <Card.Text>
            Comment Area
            <CommentsList comments={this.state.comments} selectedClosed={this.props.selectedClosed} />
            <AddComment book={this.props.book} />
        </Card.Text> */}