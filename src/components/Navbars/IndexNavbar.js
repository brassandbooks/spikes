import React from "react";
// import { Link } from "react-router-dom";
// reactstrap components
import {
  // Button,
  Collapse,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  // UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip
} from "reactstrap";

import Logo from '../../assets/img/logo.png';

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("bg-primary");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("bg-primary");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id='bodyClick'
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar
        className={"fixed-top " + navbarColor}
        expand='lg'
        color='warning'
      >
        <Container>
          <div className='navbar-translate'>
            <NavbarBrand href='/' id='navbar-brand'>
              <img src={Logo} alt='Spikes Print & Publishing' height='25px' />
            </NavbarBrand>
            <UncontrolledTooltip target='#navbar-brand'>
              Prints & Publishing Company in Yenagoa
            </UncontrolledTooltip>
            <div
              className='text-dark'
              style={{
                textTransform: "capitalize",
                fontFamily: `'Roboto Slab', serif`,
                fontSize: "30px",
                lineHeight: "22px"
              }}
            >
              <span>
                <strong>Spikes</strong>
              </span>
              <br />
              <small>Prints & Publishing</small>
            </div>
            <button
              className='navbar-toggler navbar-toggler'
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type='button'
            >
              <span className='navbar-toggler-bar top-bar'></span>
              <span className='navbar-toggler-bar middle-bar'></span>
              <span className='navbar-toggler-bar bottom-bar'></span>
            </button>
          </div>
          <Collapse
            className='justify-content-end'
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink
                  href='#pablo'
                  onClick={e => {
                    e.preventDefault();
                    document.getElementById("services").scrollIntoView();
                  }}
                >
                  <p>Services</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href='#pablo'
                  onClick={e => {
                    e.preventDefault();
                    document.getElementById("about").scrollIntoView();
                  }}
                >
                  <p>About</p>
                </NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    document
                      .getElementById("works")
                      .scrollIntoView();
                  }}
                >
                  <p>Works</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    document
                      .getElementById("testimonials")
                      .scrollIntoView();
                  }}
                >
                  <p>Testimonials</p>
                </NavLink>
                </NavItem>*/}
              <NavItem>
                <NavLink
                  href='#pablo'
                  onClick={e => {
                    e.preventDefault();
                    document.getElementById("contact").scrollIntoView();
                  }}
                >
                  <p>Contact Us</p>
                </NavLink>
              </NavItem>
              {/* <NavItem>
                <Button
                  className="nav-link btn-neutral"
                  color="info"
                  href="#pablo"
                  id="upgrade-to-pro"
                  onClick={e => e.preventDefault()}
                >
                  <i className="now-ui-icons arrows-1_share-66 mr-1"></i>
                  <p>Request a Quote</p>
                </Button>
                <UncontrolledTooltip target="#upgrade-to-pro">
                  Cooming soon!
                </UncontrolledTooltip>
              </NavItem>*/}
              <NavItem>
                <NavLink
                  href='https://twitter.com/'
                  target='_blank'
                  id='twitter-tooltip'
                >
                  <i className='fab fa-twitter'></i>
                  <p className='d-lg-none d-xl-none'>Twitter</p>
                </NavLink>
                <UncontrolledTooltip target='#twitter-tooltip'>
                  Follow us on Twitter
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href='https://www.facebook.com/'
                  target='_blank'
                  id='facebook-tooltip'
                >
                  <i className='fab fa-facebook-square'></i>
                  <p className='d-lg-none d-xl-none'>Facebook</p>
                </NavLink>
                <UncontrolledTooltip target='#facebook-tooltip'>
                  Like us on Facebook
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href='https://www.instagram.com/'
                  target='_blank'
                  id='instagram-tooltip'
                >
                  <i className='fab fa-instagram'></i>
                  <p className='d-lg-none d-xl-none'>Instagram</p>
                </NavLink>
                <UncontrolledTooltip target='#instagram-tooltip'>
                  Follow us on Instagram
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
