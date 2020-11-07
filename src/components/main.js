import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import Categories from './categories/categories';
import SimpleFilms from './categories/simpleFilms';
import SimpleNew from './categories/simpleNew';
import SimpleMultfilms from './categories/simpleMultfilms';
import Error from './errorPage/error';
import MovieNew from './categories/movieNew';
import Films from './categories/films';
import Multfilms from './categories/multfilms';
import Search from '../components/search';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/categories" component={Categories} />
        <Route exact path='/new' component={MovieNew}/>
        <Route exact path='/films' component={Films}/>
        <Route exact path='/multfilms' component={Multfilms}/>
        <Route path='/new/:number' component={SimpleNew}/>
        <Route path='/films/:number' component={SimpleFilms}/>
        <Route path='/multfilms/:number' component={SimpleMultfilms}/>
        <Route path='/search' component={Search}/>
        <Route component={Error}/>
    </Switch>
)

export default Main;
