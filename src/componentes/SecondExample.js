import React from 'react';
import Carousel from 'react-material-ui-carousel';
import autoBind from 'auto-bind';
import {
    FormLabel,
    FormControlLabel,
    Checkbox,
    Radio,
    RadioGroup,
    Paper,
    Button,
    Slider,
    Typography
} from '@material-ui/core'

import "../style/SecondExample.scss"

function Project(props)
{
    return (
        <Paper 
            className="Project"
            style={{
                backgroundColor: props.item.color, 
            }}
            elevation={10}
        >
            
            <div>
                <img className="imgCorousel" src={props.item.imagem} />
            </div>

            
        </Paper>
    )
}

const items = [
    {
        name: "Lear Music Reader",
        description: "A PDF Reader specially designed for musicians.",
        color: "#64ACC8",
        imagem: "https://www.imagenswiki.com/Uploads/imagenswiki.com/ImagensGrandes/carros-bmw-tuning.jpg"
    },
    {
        name: "Hash Code 2019",
        description: "My Solution on the 2019 Hash Code by Google Slideshow problem.",
        color: "#7D85B1",
        imagem: "https://images.wallpaperscraft.com/image/mclaren_p1_red_sports_car_side_view_109728_1280x720.jpg"
    },
    {
        name: "Terrio",
        description: "A exciting mobile game game made in the Unity Engine.",
        color: "#CE7E78",
        imagem: "https://images.wallpaperscraft.com/image/mclaren_p1_red_rear_94712_1280x720.jpg"
    },
    {
        name: "React Carousel",
        description: "A Generic carousel UI component for React using material ui.",
        color: "#C9A27E",
        imagem: "https://images.wallpaperscraft.com/image/mclaren_mclaren_p1_cars_yellow_sport_95430_1280x720.jpg"
    }
]

export default class MyProjectsExample extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            autoPlay: false,
            timer: 500,
            animation: "fade",
            indicators: true,
            timeout: 500,
            navButtonsAlwaysVisible: false
        }

        autoBind(this);
    }

    toggleAutoPlay()
    {
        this.setState({
            autoPlay: !this.state.autoPlay
        })
    }

    toggleIndicators()
    {
        this.setState({
            indicators: !this.state.indicators
        })
    }

    toggleNavButtonsAlwaysVisible()
    {
        this.setState({
            navButtonsAlwaysVisible: !this.state.navButtonsAlwaysVisible
        })
    }

    changeAnimation(event)
    {
        this.setState({
            animation: event.target.value
        })
    }

    changeTimeout(event, value)
    {
        this.setState({
            timeout: value
        })
    }

    render()
    {
        return (
            <div style={{marginTop: "50px", color: "#494949", textAlign: "center"}}>
                
                <Carousel 
                    className="SecondExample"
                    autoPlay={this.state.autoPlay}
                    timer={this.state.timer}
                    animation={this.state.animation}
                    indicators={this.state.indicators}
                    timeout={this.state.timeout}
                    navButtonsAlwaysVisible={this.state.navButtonsAlwaysVisible}
                    
                >
                    {
                        items.map( (item, index) => {
                            return <Project item={item} key={index}/>
                        })
                    }
                </Carousel>
  
            </div>
        )
    }
}