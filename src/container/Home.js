import React, { useState } from 'react'
import { Container, Navbar, NavbarBrand, NavItem, NavLink, Nav, Collapse, NavbarToggler } from 'reactstrap'
import './styles/HomeStyles.css'


export default function Home() {
    const [isOpen, setIsOpen] = useState(false)

    function toggle() {
        console.log('yo')
        setIsOpen(!isOpen)
    }
    return (
        <div className='home-div'>
            <Navbar color='dark' expand="md">
                <NavbarBrand href="/">Refresh</NavbarBrand>
                <NavbarToggler onClick={toggle} type='button' >
                    <i class="fas fa-bars"></i>
                </NavbarToggler>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href='/home'>
                                Home
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            <Container fluid className='home-main'>

                <h1>Home</h1>
            </Container>
        </div>
    )
}