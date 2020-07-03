import React, { Component } from 'react'


class ValidationComponent extends React.Component {
    render() {
        console.log(this.props.msg)
        return (
            
                <div className="form-validation">INVALID {this.props.msg}</div>
           
        )
    }
}

export default ValidationComponent
