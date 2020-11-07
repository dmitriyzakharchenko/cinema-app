import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';
import Modal from './modal/modal'

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            isModalOpen: false,
			isInnerModalOpen: false
        };
        this.closeModal = this.closeModal.bind(this);
		this.openModal = this.openModal.bind(this);
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    closeModal() {
		this.setState({
			isModalOpen: false
		});
	}

	openModal() {
		this.setState({
			isModalOpen: true
		});
	}
    render() {
        return (
            
            <Navbar light expand="md">
               <Container>
                    <NavbarBrand tag={Link} to="/">Cinema app</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink tag={Link} to="/categories">Все категории</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/new">Новинки</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/films">Фильмы</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/multfilms">Мульфильмы</NavLink>
                            </NavItem>
                        </Nav>
                        <div className="navbar-right">
                            <Modal />
                            <Link to="/search"><i className="fa fa-search search"></i></Link>
                        </div>
                    </Collapse>
                    
                    </Container>
            </Navbar>
            
        )
    }

}

export default Header;