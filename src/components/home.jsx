import React from "react";


export default function HomeComponents() {
    return (
            <>
        <div id="myCarousel" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <ol className="carousel-indicators">
                <li data-bs-target="#myCarousel" data-bs-slide-to="0" className="active"></li>
                <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
                <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
            </ol>

            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://www.snvmedia.com/images/solutions/ecommerce.jpg" className="d-block w-100" alt="Slide 1" style={{ height: 400 }}></img>
                </div>
                <div className="carousel-item">
                    <img src="https://blog.hubspot.com/hubfs/ecommerce%20marketing.jpg#keepProtocol" className="d-block w-100" alt="Slide 2" style={{ height: 400 }}></img>
                </div>
                <div className="carousel-item">
                    <img src="https://blog-frontend.envato.com/cdn-cgi/image/width=1200,quality=85,format=auto/uploads/2022/04/E-commerce-App-JPG-File-scaled.jpg" className="d-block w-100" alt="Slide 3" style={{ height: 400 }}></img>
                </div>
            </div>
            <a className="carousel-control-prev" href="#myCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </a>
            <a className="carousel-control-next" href="#myCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon"></span>
            </a>
        </div>

        </>
    )
}


