import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import img from '../../images/bg1.jpg'
import Service from '../Service/Service';
import './Home.css';



const Home = (props) => {
  const { array } = props;
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch('./services.JSON')
      .then(res => res.json())
      .then(data => setService(data))
  }, [])

  return (
		<div className="container-fluid pt-3">
			<div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
				<div className="carousel-indicators">
					<button
						type="button"
						data-bs-target="#myCarousel"
						data-bs-slide-to="0"
						className="active"
						aria-current="true"
						aria-label="Slide 1"
					></button>
					<button
						type="button"
						data-bs-target="#myCarousel"
						data-bs-slide-to="1"
						aria-label="Slide 2"
					></button>
					<button
						type="button"
						data-bs-target="#myCarousel"
						data-bs-slide-to="2"
						aria-label="Slide 3"
					></button>
				</div>

				{/* carousel item -1 */}
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img src={img} className="img-fluid" alt="" />

						<div className="container ">
							<div className="carousel-caption text-start">
								<h1 className="text">Udemy</h1>
								<h3 className="text ">
									“Programming isn’t about what you know; it’s about what you
									can figure out.” — Chris Pine.
								</h3>
								<p>
									<Link className="btn btn-lg btn-warning" to="/home">
										Get started
									</Link>
								</p>
							</div>
						</div>
					</div>

					{/* carousel item -2 */}

					<div className="carousel-item ">
						<img src={img} alt="" />

						<div className="container">
							<div className="carousel-caption">
								<h1>Another example headline.</h1>
								<p>
									Some representative placeholder content for the second slide
									of the carousel.
								</p>
								<p>
									<a className="btn btn-lg btn-primary" href="#">
										Learn more
									</a>
								</p>
							</div>
						</div>
					</div>

					{/* carousel item -3 */}
					<div className="carousel-item">
          <img src={img} alt="" />

            <div className="container">
              <div className="carousel-caption text-end">
                <h1>One more for good measure.</h1>
                <p>Some representative placeholder content for the third slide of this carousel.</p>
                <p><a className="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
              </div>
            </div>
          </div>
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#myCarousel"
					data-bs-slide="prev"
				>
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"
					></span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#myCarousel"
					data-bs-slide="next"
				>
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"
					></span>
				</button>
			</div>
			<div className="container">
				<div>
					<h3>Services : {service.length}</h3>
					<h3>Popular Services</h3>
					<div className="row">
						{service.length ? (
							array?.map((item) => {
								const serb = service[item];
								return <Service key={serb._id} service={serb}></Service>;
							})
						) : (
							<h1>No result Found</h1>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
export default Home;
