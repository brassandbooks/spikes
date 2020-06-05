import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";

// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <div className='mt-5'>
      <div className='page-header page-header-small'>
        <div
          className='page-header-image'
          style={{
            backgroundImage:
              "url(https://res.cloudinary.com/frendzy/image/upload/q_auto/4.jpg)"
          }}
          ref={pageHeader}
        ></div>
        <div className='content-center'>
          <Container>
            <h1 className='title'>Print Big, <br/> Think Right.</h1>
            <div className='text-center'>
              <Button
                className='btn-icon btn-round'
                color='warning'
                href='https://facebook.com/Spikesprints-379160899470891'
                target="_blank"
              >
                <i className='fab fa-facebook-square'></i>
              </Button>
              <Button
                className='btn-icon btn-round'
                color='warning'
                href='https://wa.me/2348144928953'
                target="_blank"
              >
                <i className='fab fa-whatsapp'></i>
              </Button>
              {/* <Button
                className='btn-icon btn-round'
                color='warning'
                href='mailto:hello@spikes.com.ng'
              >
                <i className='fas fa-envelope'></i>
              </Button>
              <Button
                className='btn-icon btn-round'
                color='warning'
                href='tel:+2348144928953'
              >
                <i className='fas fa-phone-square'></i>
              </Button> */}
              {/* <Button
                className='btn-icon btn-round'
                color='warning'
                href='#pablo'
                onClick={e => e.preventDefault()}
              >
                <i className='fab fa-twitter'></i>
              </Button>
              <Button
                className='btn-icon btn-round'
                color='warning'
                href='#pablo'
                onClick={e => e.preventDefault()}
              >
                <i className='fab fa-instagram'></i>
              </Button> */}
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default LandingPageHeader;
