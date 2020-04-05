import React, { Component } from 'react'

export default class BigCategoriesComponent extends Component {
  constructor(props) {
    super(props)
    this.setState({
      color: '#000'
    })
  }

  render() {
    return (
      <div className='big-categories' style={{ background: this.props.color }}>
        <p style={{ color: 'white' }}>{this.props.name}</p>
      </div>
    )
  }
}