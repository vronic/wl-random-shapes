import React, {PropTypes} from 'react'

export default class RandomShape extends React.Component {

  static propTypes = {
    index: PropTypes.string.isRequired,
    cb: PropTypes.func.isRequired,
    clientY: PropTypes.number.isRequired,
    clientX: PropTypes.number.isRequired
  }

  render () {
    const randomColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16)
    const isCircle = this.getRandomInt(1, 100) % 2

    const maxSize = isCircle ? 200 : 150
    const minSize = isCircle ? 30 : 20

    const size = this.getRandomInt(minSize, maxSize)
    const radius = isCircle ? size / 2 : 0

    const styleShape = {
      position: 'absolute',
      left: this.props.clientX,
      top: this.props.clientY,

      cursor: 'pointer',

      background: randomColor,
      width: size,
      height: size,

      MozBorderRadius: radius,
      WebkitBorderRadius: radius,
      borderRadius: radius
    }

    return (
      <div
        style={styleShape}
        onClick={::this.handlerClick}
      />
    )
  }

  getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  handlerClick (evt) {
    evt.stopPropagation()
    this.props.cb(this.props.index)
  }
}
