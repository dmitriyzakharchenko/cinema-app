import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Carousel, CarouselItem, CarouselControl} from 'reactstrap';
import listFilms from '../list.json';
import MovieNew from './categories/movieNew';

const films = listFilms.filter(function (item) {
    return item.category === "new"
})

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }
    
    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }
    
    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === films.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? films.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }
    render() {
        
        const { activeIndex } = this.state;

        const slides = films.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src}
                >
                    <Link to={`/new/${item.id}`}>
                        <img className="w-100" src={item.src} alt={item.altText} />
                    </Link>
                </CarouselItem>
            );
        });

        return (
            <div className="content">
                <Carousel
                    activeIndex={activeIndex}
                    next={this.next}
                    previous={this.previous}
                >
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                </Carousel>
                
                <MovieNew/>
            </div>
            
        );
    }
}
export default Home;