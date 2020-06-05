/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <nav>
            <ul>
              <li>
                <a
                  href="/about"
                  onClick={e => {
                    e.preventDefault();
                    document.getElementById("about").scrollIntoView();
                  }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/"
                  onClick={e => {
                    e.preventDefault();
                    document.getElementById("services").scrollIntoView();
                  }}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  onClick={e => {
                    e.preventDefault();
                    document.getElementById("contact").scrollIntoView();
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="copyright" id="copyright">
            © {new Date().getFullYear()}, Designed by{" "}
            <a
              href="https://www.safescrow.com.ng"
              target="_blank"
            >
              SafeScrow Tech Services
            </a>
            .
          </div>
        </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
