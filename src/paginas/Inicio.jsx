
const inicio = ()=>{
    return (
        <>

            <div className="container">
                <div className="CARR1 row">

                    <div className=" col-md-6 mt-3">

                        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">

                            <div className="carrousel-TOP3 carousel-inner">
                                <h2 className="text-center">TOP 3 más buscados</h2>
                                <div className="carousel-item active">
                                    <img src="https://media.staticontent.com/media/pictures/7c0133b0-4c0a-4e2c-bace-dddfb7f00d4b" className="d-block w-100" alt="imagen de Miami" />
                                    <h2 className="text-center">Miami</h2>
                                    <p className="text-center">1️⃣</p>
                                </div>
                                <div className="carousel-item">
                                    <img src="https://media.staticontent.com/media/pictures/3acb7a88-612c-4b7b-b0fe-39c3215101ae" className="d-block w-100" alt="Imagen Rio de janeiro" />
                                    <h2 className="text-center">Rio de Janeiro</h2>
                                    <p className="text-center">2️⃣</p>
                                </div>
                                <div className="carousel-item">
                                    <img src="https://media.staticontent.com/media/pictures/2488b079-c7b6-4273-b013-38bbb3ace592" className="d-block w-100" alt="Imagen de Florianopolis" />
                                    <h2 className="text-center">Florianopolis</h2>
                                    <p className="text-center">3️⃣</p>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>

                    </div>

                    <div className="col-md-6 mt-3">

                        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">

                            <div className="carrousel-PLAYA carousel-inner">

                                <h3 className="text-center">Paquetes Imperdibles</h3>
                                <div className="carousel-item active">
                                    <img src="https://media.staticontent.com/media/pictures/78a73b6a-d5ac-499d-896b-50e26df44a49" className="IMG-playa d-block w-100 mt-1" alt="Link paquetes" />
                                    <p className="text-center">Te puede interesar ver nuestra sección de paquetes  <div className="row justify-content-center text-center"> <div className="btn-verhoteles "> <a href="/hoteles">Ver Paquetes</a> </div> </div> </p>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </div>

            <div className="container" >
                <div className="row">

                    <div className="caja-4 col-md-4 mt-4 mb-4">
                        <h5 className="text-center">¿Cómo comprar en Viajemoshoy?</h5>
                        <p className="texto-4">En Viajemoshoy podés comprar todo para tus vacaciones muy fácilmente. Primero, ingresá la información de tu viaje en el buscador. Compará entre cientos de opciones y elegí la que más te guste desde el botón Comprar. Cargá los datos de los pasajeros, seleccioná tu medio de pago y completá la información requerida. ¡Aprovechá las promociones bancarias de Viajemoshoy! Por último, tocá nuevamente en Comprar y ¡listo! Te mandamos los vouchers por mail y ya podés empezar a disfrutar tu viaje.</p>
                    </div>


                    <div className="caja-4 col-md-4 mt-4 mb-4">
                        <h5 className="text-center">¿Se puede modificar o cancelar una compra?</h5>
                        <p className="texto-4">En Viajemoshoy podés gestionar el cambio o la cancelación de una reserva, aunque tené en cuenta que algunos proveedores o tarifas no lo permiten o cobran un costo adicional por hacerlo. En vuelos, hoteles y autos, solo podés hacer cambios con el mismo proveedor. También podés cancelar una reserva para todos o algunos de los pasajeros. Lo que no podés hacer es cambio de titularidad a otra persona. Recordá revisar las políticas de cambio y cancelación de tu reserva en Mi Cuenta.</p>
                    </div>

                    <div className="caja-4 col-md-4 mt-4 mb-4">
                        <h5 className="text-center">¿Por qué elegir Viajemoshoy para tu viaje?</h5>
                        <p className="texto-4">Viajemoshoy es una de las agencias de viaje con más trayectoria de Latinoamérica, reconocida y recomendada por miles de viajeros de todo el continente. Aprovechá nuestras ofertas y promociones de viaje y recorré el mundo entero. Comprá tu viaje en Viajemoshoy Argentina desde la web, la app o por Viajemoshoy Celular: 1169351191. ¿Tenés dudas o necesitás ayuda? Podés llamarnos en todo momento al centro de Viajemoshoy atención al cliente y viajá con la confianza de saber que estamos con vos.</p>
                    </div>


                </div>
            </div>

        </>
    )
}
export default inicio;