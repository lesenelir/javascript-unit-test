const TrafficLight = require('../src/traffic')
const assert = require('node:assert')


describe('TrafficLight', () => {
  describe('colors', () => {
    // check whether has 3 color
    it('has 3 states', () => {  // defined test unit function
      assert.equal(TrafficLight.colors.length, 3)
    })

    // check traffic light color are correct and in order
    it('colors in order', () => {
      const expectedLightOrder = ['green', 'yellow', 'red']
      for (let i = 0; i < expectedLightOrder.length; i++) {
        assert.equal(expectedLightOrder[i], TrafficLight.colors[i])
      }
    })
  })

  describe('next()', () => {
    it('change lights in order', () => {
      const traffic = new TrafficLight()
      for (let i = 0; i < TrafficLight.colors.length; i++) {
        assert.equal(traffic.light, TrafficLight.colors[i])
        traffic.next()
      }
    })

    it('loops back to green', function () {
      const traffic = new TrafficLight()
      for (let i = 0; i < 3; i++) {
        traffic.next()
      }
      assert.equal(traffic.light, TrafficLight.colors[0])
    })
  })
})

