import React, { Component } from 'react'
import {Row,Col,Form,Spinner,Alert,Button, Container} from"react-bootstrap"
import{BrowerRouter as Router,Route} from 'react-router-dom'
import ValidationComponent from './ValidationComponent'

 class RegistrationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          registration: {
            name: "",
            Surname : "",
            Email : '',
            Password : '',
            YearofBirth: "",
            StreetAddress: "",
            City:'',
            PostalCode:'',
            Creditcard:''


          },
          isLoading: false,
          errMess: ""
        };
      }
     updateRegestrationField=input=>{
     
        let registration = this.state.registration;
        let currentId = input.currentTarget.id;
       
    
      
            registration[currentId] = input.currentTarget.value;
            
      
    
        this.setState({ registration });
        
      };
     submitRegistry=(e)=>{
      let name_field=document.querySelector('#name')
      let nvalidation_div=document.querySelector('#name-validation')

      let surname_field=document.querySelector('#Surname')
      let svalidation_div=document.querySelector('#surname-validation')

      let password=document.querySelector('#password')
      let pvalidation_div=document.querySelector('#surname-validation')

        e.preventDefault();
        console.log(this.state.registration)
     if(this.state.registration.name.length>=2){
      name_field.classList.remove('invalid-class')
      nvalidation_div.classList.add('d-none')
     }
     else{
      let name_field=document.querySelector('#name')
      name_field.classList.add('invalid-class')
      nvalidation_div.classList.remove('d-none')
      
     }


     if(this.state.registration.Surname.length>=3){
      surname_field.classList.remove('invalid-class')
      svalidation_div.classList.add('d-none')
     }
     else{
      surname_field.classList.add('invalid-class')
      svalidation_div.classList.remove('d-none')
      
     }
    }

    render() {
  
     
       
        return (
          <Container>
               <Form onSubmit={this.submitRegistry}>
               <Form.Group htmlFor="name">
                    <Form.Label>name</Form.Label>
                    <Form.Control
                     type="text" 
                     placeholder="name"              
                     id="name" 
                     onChange={this.updateRegestrationField}
                    
                    required/>
                    <div id="name-validation"className="form-validation is-invalid d-none">Input Invalid: Name should contain at least two characters</div>
                </Form.Group>
                <Form.Group htmlFor="Surname">
                    <Form.Label>Surname</Form.Label>
                    <Form.Control type="text" placeholder="Surname" id="Surname" onChange={this.updateRegestrationField}required />
                    <div id="surname-validation"className="form-validation is-invalid d-none">Input Invalid: Surname should contain at least three characters</div>
                </Form.Group>
                <Form.Group htmlFor="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" id="email"onChange={this.updateRegestrationField} required />
                </Form.Group>
                <Form.Group htmlFor="Password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" id="Password" onChange={this.updateRegestrationField}required/>
                    {this.state.registration.Password.length<=6&&<ValidationComponent msg='este mensaje'/>}
                </Form.Group>
                
                
                <Form.Group htmlFor="Birth">
                    <Form.Label>Year of Birth</Form.Label> 
                    <Form.Control type="number" placeholder="Year of Birth" id="Birth" onChange={this.updateRegestrationField}required/>
                </Form.Group>
                <Row className="Address-wrapper">
                  <Col md={6}>
                <Form.Group htmlFor="Street">
                    <Form.Label>Street Address</Form.Label>
                    <Form.Control type="text" placeholder="Street Address" id="Street"onChange={this.updateRegestrationField} required />
                </Form.Group>
                </Col>
               
                  
                    <Col md={3}>
                    <Form.Group htmlFor="City">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="City " id="City" onChange={this.updateRegestrationField}required/>
                </Form.Group>
                </Col>
                <Col md={3}>
                <Form.Group htmlFor="postcode">
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control type="text" placeholder="Postal Code " id="postcode" onChange={this.updateRegestrationField}required/>
                </Form.Group>
                </Col>
                
                </Row>
              
               
                <Form.Group htmlFor="Credit">
                    <Form.Label>Credit Card Number</Form.Label>
                    <Form.Control type="text" placeholder="Credit Card Number" id="Credit" onChange={this.updateRegestrationField} />
                </Form.Group>
                <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Container>
         
        )
            
    
}
}

export default RegistrationForm
