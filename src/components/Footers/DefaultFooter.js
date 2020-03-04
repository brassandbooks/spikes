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
                  href="/"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/"
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
