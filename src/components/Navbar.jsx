import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from "../pages/Home"
import About from "../pages/About"
import Services from "../pages/Services"
import Team from "../pages/Team"
import Contact from "../pages/Contact"
import BookNow from "../pages/BookNow"
import { List, SLink, StyledImage, StyledLogoNavLink, TopBar, BookButton } from "../StyledComponent"


export const Navbar = () => {
    return (
        <>
            <Router>
                <TopBar>
                    <StyledLogoNavLink strict exact to="/">
                        <StyledImage alt="home" src={require('../components/images/Logo-Green.png')} />
                    </StyledLogoNavLink>

                    <List>
                        <div>
                            <SLink to="/">Home</SLink>
                        </div>
                        <div>
                            <SLink to="/services">Our Services</SLink>
                        </div>
                        <div>
                            <SLink to="/about">About us</SLink>
                        </div>
                        <div>
                            <SLink to="/team">Our Team</SLink>
                        </div>
                        <div>
                            <SLink to="/contact">Contact us</SLink>
                        </div>
                        <div>
                            <BookButton to="/book">Book Now</BookButton>
                        </div>
                    </List>
                </TopBar>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/services" element={<Services />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/team" element={<Team />} />
                    <Route exact path="/contact" element={<Contact />} />
                    <Route exact path="/book" element={<BookNow />} />
                </Routes>
            </Router>
        </>
    );
};

export default Navbar;

