import React, { Component } from 'react';

class PetsFormTitle extends Component {
    

    showForm = () => {
        console.log("Prueba click");
     }
  

    render() {

        const {petsTitle, showForm} = this.props;
        
        return (
            <div className="col-12 py-3 text-center">
                <a  onClick={showForm} className="text-center">{petsTitle}</a>
            </div>
        );
    }
}

export default PetsFormTitle;