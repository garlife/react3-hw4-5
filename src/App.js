import React from 'react';
import './style.css';

function Car(props) {
  const classes = ['card'];
  if (props.car.marked) {
    classes.push('marked');
  }

  return (
    <div className={classes.join(' ')} onClick={props.onMark}>
      <div style={{ width: '200px%' }}>
        <div className="card-img">
          <img
            style={{ maxWidth: '200px' }}
            src={props.car.src}
            alt={props.car.model}
          />
        </div>
        <h3>{props.car.mark} {props.car.model}</h3>
        <p>{props.car.price}&#8381;</p>
      </div>
    </div>
  );
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: [
        {
          mark: 'bmw',
          model: 'x3',
          price: '4 670 000',
          src: 'https://cdn.kodixauto.ru/media/image/5d8e13a659f5e20001c81a7d',
          marked: false,
        },
        {
          mark: 'bmw',
          model: '5',
          price: '4 120 000',
          src: 'https://cdn.kodixauto.ru/media/image/5f3121205c3ba500016cf657',
          marked: false,
        },
        {
          mark: 'bmw',
          model: 'Z4 roadster',
          price: '6 797 800',
          src: 'https://cdn.kodixauto.ru/media/image/5d8e161359f5e20001c81a8c',
          marked: false,
        },
      ],
    };
  }

  handleMarked(model) {
    console.log(model);
    const cars = this.state.cars.concat();
    const car = cars.find((c) => c.model === model);
    car.marked = !car.marked;
    this.setState({ cars: cars });
  }

  renderCars() {
    return this.state.cars.map((car) => {
      return (
        <Car
          car={car}
          key={car.model + Math.random()}
          onMark={this.handleMarked.bind(this, car.model)}
        />
      );
    });
  }

  render() {
    return (
      <div className="app">
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h1>Выбери свое BMW!</h1>
        </div>
        <div
          className="list"
          style={{
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          {this.renderCars()}
        </div>
      </div>
    );
  }
}
