import react from "react"
import Fecha from '../../modulos/Fecha'
import Reserva from '../../modulos/Reserva'
const Form=({a})=>{
    const consulta=()=>{
        let huesp = document.getElementById("huesped").value;
        let diaReserva = Fecha.fechaAtual(new Date(),Fecha.meses);
        let ingreso = Fecha.fechaIngEgres(document.getElementById("ingreso").value,
        Fecha.meses
        )
        let egreso = Fecha.fechaIngEgres(document.getElementById("egreso").value,
        Fecha.meses
        )
        let cantidad = document.getElementById("cantDias").value;
        let vencimiento = Fecha.getVencimiento(new Date(),Fecha.meses)
        let obj = {
            huesped:huesp,
            diaReserva:diaReserva,
            fingreso:ingreso,
            fsalida:egreso,
            cantDias:cantidad,
            vencimiento:vencimiento
        }
        obj.precio=Reserva.calcularTarifa(obj.cantDias,document.getElementById("egreso").value)
        Reserva.mostrarReserva(obj,a,Reserva.generarnumero(),"hoteles")
    }
    return(
        <div className="container">
            <div id="contenedor" className="row d-flex justify-content-center">
                <form className="row my-5 mr-0" onSubmit={consulta}>
                    <div className="col-md-4 col-sm-12">
                        <label className="m-2 d-inline">Huésped</label>
                        <input type={'text'} id="huesped" className="form-control m-2 d-inline"/>
                    </div> 
                    <div className="col-md-4 col-sm-12">
                        <label className="m-2 d-inline">Desde</label>
                        <input type={'date'} id="ingreso" name="ingreso" 
                        min={Fecha.obtenerFecha()} max="2050-12-31" required
                        className="m-2 d-inline"/>
                    </div> 
                    <div className="col-md-4 col-sm-12">
                        <label className="m-2 d-inline">Hasta</label>
                        <input type={'date'} id="egreso" name="egreso" 
                        min={Fecha.obtenerFecha()} max="2050-12-31" required
                        className="m-2 d-inline"
                        onChange={Fecha.calculoDias}
                        />
                    </div> 
                    <div className="col-md-4 col-sm-12">
                        <label className="m-2 d-inline">Cantidad de días</label>
                        <input type={'number'} id="cantDias" maxLength={"2"}
                        size="2" 
                        disabled
                        className="form-control m-2 d-inline"
                        />
                    </div>
                    <div className="col-auto">
                        <input type={"submit"} className="btn-btn-primary m-3" value={"Consultar"}/>
                    </div>
                    
                </form>
                <div className="col-auto my-5">
                        <input id="btn" type={"button"} style={{opacity:0}} 
                        className="btn-btn-primary m-3" 
                        onClick={Reserva.confirmarReserva}
                        value={"Confirmar"}/>
                    </div>
            </div>
        </div>
    )
}
export default Form