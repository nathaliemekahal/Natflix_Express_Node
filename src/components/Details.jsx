import React, { Component } from 'react'
import Comments from './Comments'
import {Card,Button,Row, Col,Image,Container} from 'react-bootstrap'


class Details extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             movie:null
        }
    }
    
    componentDidMount=()=>{
        console.log('mounted')
        let id=this.props.match.params.id
        fetch( 'http://www.omdbapi.com/?i='+id+'&apikey=8ad00066')
        .then((response)=>response.json())
        .then((responseJson)=> this.setState({movie:responseJson}))
       
     
    }
    render() {
        return (
        <Container>
            {console.log(this.state.movie)}
        
              {this.state.movie&&
                <Row>
              <Col xs={4}>
              <Image className='image-fluid'src={this.state.movie.Poster}></Image>
              </Col>
              <Col xs={8}>
               <h1 style={{color:'white'}}>{this.state.movie.Title}</h1>
               <h2>{this.state.movie.Plot}</h2>
               <Comments id={this.state.movie.imdbID} />
              </Col>
              </Row>}
              
             
        
         
        
          </Container>
        )
    }
}

export default Details
