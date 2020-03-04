import React from "react";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function Main() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div className='wrapper'>
        <LandingPageHeader />

        <div
          className='section section-team text-center'
          id='services'
          style={{ backgroundColor: "#2CA8FF" }}
        >
          <Container>
            <h2 className='title text-light'>Our Services</h2>
            <div className='team'>
              <Row>
                <Col md='6' lg='4'>
                  <div className='team-player'>
                    <img
                      alt='...'
                      className='img-fluid img-raised'
                      src='https://res.cloudinary.com/frendzy/image/upload/v1580815595/service2.png'
                    ></img>
                    <h4 className='title text-light'>Large Format</h4>
                    <p className='description text-light'>
                      Flex Banners, SAV, Window Graphics
                    </p>
                  </div>
                </Col>
                <Col md='6' lg='4'>
                  <div className='team-player'>
                    <img
                      alt='...'
                      className='img-fluid img-raised'
                      src='https://res.cloudinary.com/frendzy/image/upload/v1580815595/service3.jpg'
                    ></img>
                    <h4 className='title text-light'>Direct Image</h4>
                    <p className='description text-light'>
                      Papers, Card
                    </p>
                  </div>
                </Col>
                <Col md='6' lg='4'>
                  <div className='team-player'>
                    <img
                      alt='...'
                      className='img-fluid img-raised'
                      src='https://res.cloudinary.com/frendzy/image/upload/v1580815595/service3.jpg'
                    ></img>
                    <h4 className='title text-light'>Branding</h4>
                    <p className='description text-light'>
                      Shirt, Cap, Vehicle, Office Branding
                    </p>
                  </div>
                </Col>
                <Col md='6' lg='4'>
                  <div className='team-player'>
                    <img
                      alt='...'
                      className='img-fluid img-raised'
                      src='https://res.cloudinary.com/frendzy/image/upload/v1580815595/service3.jpg'
                    ></img>
                    <h4 className='title text-light'>Laminating</h4>
                    <p className='description text-light'>
                      Gloss, Matt, 3D,
                    </p>
                  </div>
                </Col>
                <Col md='6' lg='4'>
                  <div className='team-player'>
                    <img
                      alt='...'
                      className='img-fluid img-raised'
                      src='https://res.cloudinary.com/frendzy/image/upload/v1580815595/service3.jpg'
                    ></img>
                    <h4 className='title text-light'>Finishing</h4>
                    <p className='description text-light'>
                      Table Top Calendars, Jotters, Invitations, Special Invitations, Almanacs
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className='section section-about-us' id='about'>
          <Container>
            <Row>
              <Col className='ml-auto mr-auto text-center' md='8'>
                <h2 className='title text-warning'>About Us</h2>
                <h5 className='description'>
                  Spikes Prints & Publishing is an indegenous printing and
                  publishing company that provides specialized services to our
                  clients spanning over five years of successful practice. We
                  deliver quality services using a blend of seasoned staff and
                  state of the art facilities in line with international best
                  practices. Our prices are fair and affordable.
                </h5>
              </Col>
            </Row>
            <div className='separator separator-primary'></div>
            <div className='section-story-overview'>
              <Row>
                <Col md='6'>
                  <div
                    className='image-container image-left'
                    style={{
                      backgroundImage:
                        "url(https://res.cloudinary.com/frendzy/image/upload/q_auto/jolly_package.jpg)"
                    }}
                  ></div>
                </Col>
                <Col md='5'>
                  <div
                    className='image-container image-right'
                    style={{
                      backgroundImage:
                        "url(https://res.cloudinary.com/frendzy/image/upload/q_auto/53.jpg)"
                    }}
                  ></div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className='section section-contact-us text-center' id='contact'>
          <Container>
            <h2 className='title text-warning'>Contact Us</h2>
            <p className='description'>Your project is very important to us.</p>
            <Row>
              <Col md='12'></Col>
              <Col className='text-center ml-auto mr-auto' lg='6' md='8'>
                <InputGroup
                  className={
                    "input-lg" + (firstFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                      <i className='now-ui-icons users_circle-08'></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder='First Name...'
                    type='text'
                    onFocus={() => setFirstFocus(true)}
                    onBlur={() => setFirstFocus(false)}
                  ></Input>
                </InputGroup>
                <InputGroup
                  className={
                    "input-lg" + (lastFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                      <i className='now-ui-icons ui-1_email-85'></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder='Email...'
                    type='text'
                    onFocus={() => setLastFocus(true)}
                    onBlur={() => setLastFocus(false)}
                  ></Input>
                </InputGroup>
                <div className='textarea-container'>
                  <Input
                    cols='80'
                    name='name'
                    placeholder='Type a message...'
                    rows='4'
                    type='textarea'
                  ></Input>
                </div>
                <div className='send-button'>
                  <Button
                    block
                    className='btn-round'
                    color='warning'
                    href='#pablo'
                    onClick={e => e.preventDefault()}
                    size='lg'
                  >
                    Send Message
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
          <div
            dangerouslySetInnerHTML={{
              __html:
                '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.02150672692!2d6.308652414263459!3d4.936049240947473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x106a056f6fc410e1%3A0xbf233519abd1148a!2sSpikes%20Prints%20%26%20Publishing!5e0!3m2!1sen!2sng!4v1580868489360!5m2!1sen!2sng" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>'
            }}
          ></div>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default Main;
