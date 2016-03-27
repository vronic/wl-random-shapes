/* @flow */
import React from 'react'
import classes from './HomeView.scss'
import RandomShape from './RandomShape'

export class HomeView extends React.Component {

  constructor (props) {
    super(props)
    this.state = {shapes: []}
  }

  /* eslint-disable react/jsx-no-bind */
  /* eslint-disable no-return-assign */
  render () {
    const shapes = this.state.shapes
    return (
      <div
        className={classes['full_height'] + ' text-center'}
        onClick={::this.handlerClick}
      >
        <h1>WebLabs random shapes</h1>
        {shapes}
      </div>
    )
  }

  handlerClick ({clientX, clientY}) {
    this.showRandomShape({clientX, clientY})
  }

  showRandomShape (coord) {
    const key = `key-${coord.clientX}-${coord.clientY}`
    this.setState((state) => {
      state.shapes = [
        ...state.shapes,
        <RandomShape {...coord} key={key} index={key} cb={::this.deleteShape} />
      ]
    })
  }

  deleteShape (key) {
    let shapes = [...this.state.shapes]
    const index = shapes.findIndex((shape) => shape.key === key)
    shapes.splice(index, 1)
    this.setState({
      shapes: [...shapes]
    })
  }
}

export default HomeView
