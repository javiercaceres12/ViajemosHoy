const Noticias = () => {
    return (
        <div>

            <div id="carouselExampleControls" className="carousel slide mt-1" data-bs-ride="carousel">
                <div className="primer-carrousel carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://previaje.gob.ar/images/landing/slides/slide-01-bcda7b8d53913c8824eb4265bc948c9e.jpg?vsn=d" className="d-block w-100 h-50" alt="Imagen de previaje" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://previaje.gob.ar/images/landing/slides/slide-02-8da2efefc3706c563b7ae4043fb3763e.jpg?vsn=d" className="d-block w-100 h-50" alt="¿Buscas lugares nuevos?" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://previaje.gob.ar/images/landing/slides/slide-04-81c3ed1b51978281eea9b722c223b6a4.jpg?vsn=d" className="d-block w-100 h-50" alt="¿Como consultar saldo  de mi tarjeta?" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            

        </div>
    )
}

export default Noticias;