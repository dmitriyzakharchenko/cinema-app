import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container } from 'reactstrap';
import listData from '../../list.json';
import Slider from "react-slick";

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <i className="fa fa-arrow-left fa-2x" onClick={onClick} />
  );
}

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <i className="fa fa-arrow-right fa-2x" onClick={onClick} />
  );
}

const MovieNew = () => {
  const newMovie = listData.filter(function (item) {
    return item.category === "new"
  })

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="category">
      <Container className="pt-4 pb-4">
        <div className="slider">
          <h1 className="mb-3 categories-title">Новинки</h1>
        </div>
          <Slider {...settings}>
          {
            newMovie.map(p => (
              <Col key={p.id}>
                <img className="categories-card__img" src={p.imgSmall} alt="Background film img"></img>
                <div className="categories-card__name">{p.name}</div>
                <div className="categories-card__desc mt-1">
                  <span className="categories-card__year">{p.year},</span>
                  <span className="categories-card__genre"> <i>{p.genre}</i></span>
                </div>
                <div className="categories-card__button">
                  <Link to={`/new/${p.id}`} className="button slideleft bouncein">Смотреть</Link>
                </div>
              </Col>
            ))
          }
          </Slider>
      </Container>
    </div>
  )
}


export default MovieNew;