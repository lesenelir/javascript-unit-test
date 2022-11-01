class TrafficLight {
  constructor() {
    this.lightIndex = 0
  }

  static get colors() {
    return ['green', 'yellow', 'red']
  }

  get light() {
    return TrafficLight.colors[this.lightIndex]
  }

  next() {
    this.lightIndex++
    // intentionally wrong  -  The edge-cases wrong!
    // if (this.lightIndex > TrafficLight.colors.length) {
    //   this.lightIndex = 0
    // }
    if (this.lightIndex >= TrafficLight.colors.length) {
      this.lightIndex = 0
    }
  }
}

// const traffic = new TrafficLight()
// console.log(traffic.light)
// traffic.next()
// console.log(traffic.light)
// traffic.next()
// console.log(traffic.light)
// traffic.next()
// console.log(traffic.light) // undefined

module.exports = TrafficLight
