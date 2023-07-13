import React from 'react'
import  Carousel  from 'react-bootstrap-v5/lib/Carousel'
import '../Styles/Slider.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Slider = ({Start}) => {
    return (
        <Carousel interval="1000" controls = 'false' nextLabel  prevLabel indicators= {true}  > 
            {
         Start.map((Item) => (
             <Carousel.Item>
                 <img className='d-block w-100'
                 src = {Item} alt='first slide'/>
             </Carousel.Item>
    ))
        }
        </Carousel>
    )
}

export default Slider
