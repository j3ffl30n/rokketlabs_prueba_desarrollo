import React, { Component } from 'react';
import PetsFormTitle from './PetsFormTitleComponent'

class PetsForm extends Component {
   showForm = () => {
      console.log("Prueba click");
   }

   render() {

      const petsTitleFC = 'Si desea ingresar una nueva mascota presione aqui';


      return (
         <div className="col-10 bg-danger">
            <div className="row ">
               <PetsFormTitle petsTitle={petsTitleFC} showForm={this.showForm} />

               <div className="col-12 py-5" id="formpets">
                  <form>
                     <div className="row">
                        <div className="col">
                           <input type="text" className="form-control" placeholder="Nombre de la mascota" />
                        </div>
                        <div className="col">
                           <input type="text" className="form-control" placeholder="Tipo" />
                        </div>
                        <div className="col">
                           <input type="text" className="form-control" placeholder="Motivo de ingreso" />
                        </div>
                        <div className="col">
                           <button type="submit" className="btn btn-warning">Registrar Mascota</button>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      );
   }
}

export default PetsForm;