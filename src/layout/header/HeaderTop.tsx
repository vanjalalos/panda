import React from "react";
import Image from "next/image";
import icon1 from "../../../public/assets/img/icon/sidebar-icon-1.png";
import icon2 from "../../../public/assets/img/icon/footer-icon-1.png";
import icon3 from "../../../public/assets/img/icon/footer-icon-2.png";
import Link from "next/link";

const HeaderTop = () => {
  return (
    <div className="header-top bg-heading d-none d-md-block">
      <div className="container-fluid">
        <div className="header-top-space">
          <div className="row">
            <div className="col-lg-4 d-none d-lg-block">
              <div className="welcome-text">
                <span>Dobrodošli u računovodstvenu agenciju Panda</span>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="header-top-info">
                <ul>
                  <li>
                    <Image
                      src={icon1}
                      style={{ 
                        width: "auto", 
                        height: "auto",
                        filter: "brightness(0) saturate(100%) invert(61%) sepia(59%) saturate(1000%) hue-rotate(103deg) brightness(91%) contrast(86%)"
                      }}
                      alt="icon not found"
                    />
                                                    Bulevar vojvode Stepe Stepanovića 59, 78000 Banja Luka, Bosna i Hercegovina
                  </li>
                  <li>
                    <Image
                      src={icon2}
                      style={{ 
                        width: "auto", 
                        height: "auto",
                        filter: "brightness(0) saturate(100%) invert(61%) sepia(59%) saturate(1000%) hue-rotate(103deg) brightness(91%) contrast(86%)"
                      }}
                      alt="icon not found"
                    />
                    <Link href="mailto:office@panda.ba">office@panda.ba</Link>
                  </li>
                  <li>
                    <Image
                      src={icon3}
                      style={{ 
                        width: "auto", 
                        height: "auto",
                        filter: "brightness(0) saturate(100%) invert(61%) sepia(59%) saturate(1000%) hue-rotate(103deg) brightness(91%) contrast(86%)"
                      }}
                      alt="icon not found"
                    />
                    <Link href="tel:926668880000">+ 387 65 314 131</Link>
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

export default HeaderTop;
