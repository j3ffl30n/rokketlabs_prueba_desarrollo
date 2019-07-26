import React, { Component } from 'react';




class TablePets extends Component {
  render() {

    const { data } = this.props;


    return (


      <div className="col-10 bg-white my-5 py-5">

        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Tipo</th>
              <th scope="col">Motivo de ingreso</th>
            </tr>
          </thead>
          <tbody>
            {data.map(x =>
              <tr key={x._id}>
                <td>{x.nombre}</td>
                <td>{x.tipo}</td>
                <td>{x.description}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>


    );
  }
}

export default TablePets;