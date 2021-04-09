import React, { Component } from 'react';
class Images extends Component{
    render(){
        const {image}=this.props;
        console.log(image+"image");
        return(
                    <div className="col-md-3">
                       <img src={image.src.large} alt="not found" className="img-fluid"/>
                    </div>
               
        )
    }
}
export default Images;