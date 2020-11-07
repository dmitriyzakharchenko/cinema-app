import React from 'react';
import { Link } from 'react-router-dom';
import {Container} from 'reactstrap';
import listData from '../../list.json';

const SimpleMultfilms = (props) => {

    const numberMultfilms = parseInt(props.match.params.number);

    const multfilms = listData.filter(function (item) {
        return item.id === numberMultfilms && item.category === "multfilms"
    })

    if (multfilms.length === 0) {
        return (
            <div className="category pt-3 pb-5">
                <Container>
                    <div>Извините, этот фильм не был найден</div>
                    <Link to='/multfilms' className="button">Вернуться назад</Link>
                </Container>
            </div>
        )
    }
    return (
        <div className="category text-white">
            {
                multfilms.map((item) => {
                    return (
                        <Container key={item.id} className="pb-5">
                        <div className="category-nav">
                            <Link to='/multfilms' className="button d-inline-block mt-2 mb-4">Назад</Link>
                            {/* <Link to={'/multfilms' + '/' + 1} className="button d-inline-block mt-2 mb-4">Следующий фильм</Link> */}
                        </div>
                            <iframe title={item.name} width="100%" height="315" src={item.watch} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <h1>{item.name}</h1>
                            <p>Жанр: {item.genre}</p>
                            <p>Год: {item.year}</p>
                            <p><span className="category-desc">Описание:</span> {item.description} </p>
                        </Container>
                    )
                })
            }
        </div>
    )

}

export default SimpleMultfilms;