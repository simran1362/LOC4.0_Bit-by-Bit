import React from 'react'

const Carousel = () => {
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="https://image.shutterstock.com/image-photo/young-man-on-treadmill-gym-600w-1250295559.jpg" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
                <img src="https://media.gettyimages.com/photos/young-woman-exercising-outdoors-picture-id649970260?s=2048x2048" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
                <img src="https://www.itl.cat/pngfile/big/319-3196923_rock-lee-wallpaper.jpg" className="d-block w-100" alt="..."/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
    
  )
};

export default Carousel;