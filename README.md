# Car interface using useReducer

The car has the following values, which should be displayed on the "speedometer":

- started
- speed

The car has the following functions:

- turn on/off
- accelerate
- brake

## Requirements

- When accelerating, the speed is accelerated by 5 km/h.
- When braking, the speed is decelerated by 5km/h.
- Accelerating is possible only when the car is switched on.
- Switching off is possible only when the car is stopped (0km/h).
- A car cannot drive at negative km/h.

- used [react-d3-speedometer](https://www.npmjs.com/package/react-d3-speedometer) npm package to build the speedometer.
