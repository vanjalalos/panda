"use client";
import React, { useEffect } from 'react';
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}
import { animationCreate } from '@/utils/utils';
import Footer from './footer/Footer';
import FooterTwo from './footer/FooterTwo';
import { usePathname } from "next/navigation";
import HeaderOne from './header/HeaderOne';
import HeaderTwo from './header/HeaderTwo';
import Preloader from '@/components/common/Preloader';
import useLoading from '@/hooks/useLoading';
import BacktoTop from '@/components/common/backToTop/BacktoTop';
import AOS from "aos";
import "aos/dist/aos.css"

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  const pathName = usePathname();
  const isLoading = useLoading(true, 100);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    
    setTimeout(() => {
      animationCreate()
    }, 200);
  }, [])

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <BacktoTop />
          
          {(() => {
            switch (pathName) {
              case "/home-two":
                return <HeaderTwo />;
              default:
                return <HeaderOne />;
            }
          })()}

          {children}

          {(() => {
            switch (pathName) {
              case "/home-two":
                return <FooterTwo />;
              case "/pricing":
                return <FooterTwo />;
              default:
                return <Footer />;
            }
          })()}
        </>
      )}
    </>
  );
};

export default Wrapper;
