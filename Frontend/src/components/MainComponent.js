import React, { Component } from 'react';
import axios from 'axios';


import PetsForm from './PetsFormComponent';
import TablePets from './TablePetsComponent';
import Axios from 'axios';

class MainComponent extends Component {

  state = {
    data: [],
  }

  constructor() {
    super();
    axios.get("http://localhost:5000/pets")
      .then(({ data }) => this.setState({ data }));
  }



  render() {

    // console.log(this.state);

    const { data } = this.state;


    return (

      <div className="container bg-primary">
        <div className="row">
          <div className="col-12">
            <h3 className="text-center py-4">
              Bienvenidos al sistema de registro de mascotas de Rokketlabs
            </h3>
            <div className="row d-flex justify-content-center">
              <TablePets data={data} />
            </div>
          </div>
        </div>
      </div>

    )

  }
}

export default MainComponent;