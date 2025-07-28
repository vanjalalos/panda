import Link from "next/link";
import React from "react";

const FooterBottom = () => {
  return (
    <div className="copyright-area">
      <div className="container">
        <div className="copyright-bg">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="copyright">
                <span>Copyright <Link href="https://matluk.de/" target="_blank" rel="noopener noreferrer">©2025 MatLuk</Link>. All Rights Reserved</span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="privacy-text text-center text-md-end">
                <ul>
                  <li>
                    <Link href="/terms">Uslovi korišćenja</Link>
                    <Link href="/privacy">Politika privatnosti</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
