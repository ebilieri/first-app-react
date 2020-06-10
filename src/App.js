import React from 'react';
import './App.css';

import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'


import Titulo from './componentes/Titulo'
import Example from './componentes/Example'
import SecondExample from './componentes/SecondExample'
import CenterMode from './componentes/CenterMode'



function Example2(props) {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      imagem: "https://www.imagenswiki.com/Uploads/imagenswiki.com/ImagensGrandes/carros-bmw-tuning.jpg"
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      imagem: "https://images.wallpaperscraft.com/image/mclaren_p1_red_sports_car_side_view_109728_1280x720.jpg"
    }
  ]

  return (
    <Carousel autoPlay={false}>
      {
        items.map(item => <Item item={item} />)
      }
    </Carousel>
  )
}

function Item(props) {
  return (
    <Paper>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <div>
        <img className="imgCorousel" src={props.item.imagem} />
      </div>
    </Paper>
  )
}

function App() {
  return (
    <div className="App">

      <Titulo>
        Live Digital Innovation One - Default
      </Titulo>
      <br />
      <Titulo cor="azul">
        Live Digital Innovation One
      </Titulo>
      <br />
      <Titulo cor="vermelho">
        Meu Primeiro componente tem um filho
      </Titulo>

      <br />
      <Titulo cor="verde">
        Meu Primeiro componente
      </Titulo>

      

      <div>
        <Example />
      </div>

      <div>
        <SecondExample />
      </div>

      <div>
        <Example2 />
      </div>
    </div>


  );
}

export default App;
