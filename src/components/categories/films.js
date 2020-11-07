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

const Films = () => {
  const films = listData.filter(function (item) {
    return item.category === "films"
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
          <h1 className="mb-3 categories-title">Фильмы</h1>
        </div>
        <Slider {...settings}>
          {
            films.map((item) => {
              return (
                <Col key={item.id}>
                  <img className="categories-card__img" src={item.imgSmall} alt="Background film img"></img>
                  <div className="categories-card__name">{item.name}</div>
                  <div className="categories-card__desc mt-1">
                    <span className="categories-card__year">{item.year},</span>
                    <span className="categories-card__genre"> <i>{item.genre}</i></span>
                  </div>
                  <div className="categories-card__button">
                    <Link to={`/films/${item.id}`} className="button">Смотреть</Link>
                  </div>
                </Col>
              )
            })
          }
        </Slider>
      </Container>
    </div>
  )
}


export default Films;