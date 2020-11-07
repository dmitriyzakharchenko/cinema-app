import React from 'react';
import { Link } from 'react-router-dom';
import listFilms from '../list.json'

function searchingFor(term) {
    return function (x) {
        return x.name.toLowerCase().includes(term.toLowerCase()) || !term
    }
}

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            person: listFilms,
            term: '',
        }
        this.searchHandler = this.searchHandler.bind(this)

    }

    searchHandler(e) {
        this.setState({ term: e.target.value })
    }
    render() {
        const { person, term } = this.state
        return (
            <div className="category text-white">
                <form className="container search-form">
                    <input type="text" className="search-input" placeholder="Search" onChange={this.searchHandler} value={term}></input>
                </form>
                <div className="categories-card container">
                    {
                        person.filter(searchingFor(term)).map(item =>
                            <div key={item.id} className="pb-5 categories-card__body">
                                <div><img src={item.imgSmall} className="categories-card__img" alt={item.name} /></div>
                                <div className="categories-card__name">{item.name}</div>
                                <div className="categories-card__desc mt-1">
                                    <span className="categories-card__year">{item.year},</span>
                                    <span className="categories-card__genre"> <i>{item.genre}</i></span>
                                </div>
                                <div className="categories-card__button">
                                    <Link to={`/${item.category}/${item.id}`} className="button">Смотреть</Link>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default Search;