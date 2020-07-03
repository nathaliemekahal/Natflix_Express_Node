import React, { Component } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {Container,Image} from'react-bootstrap'
import {Link} from 'react-router-dom'

const responsive = {
    desktop:{
      breakpoint :{max:3000, min:1024},
      items : 6
    },
    mobile:{
      breakpoint :{max:1024, min:464},
      items : 3
    }
  }
 class MyCarousel extends Component {
    constructor(props){
        super(props);
       
      }
    render() {
       
        return (
            <div>
                <Container fluid className='crsl mt-3 mb-3'>
                {/* <p className='movieName'>{this.props.name}</p> */}
                <Carousel
                ssr={true} // means to render carousel on server-side.
                //  infinite={true}
                //  autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={2000}
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive = {responsive}
                >
                {this.props.movies.map(movie =>{
                    return(
                    <div>
                        <Link to={'/Details/'+movie.imdbID}><Image src={movie.Poster}/></Link>
                    </div>
                    )
                })}
                </Carousel>
            </Container>
            </div>
        )
    }
}

export default MyCarousel
