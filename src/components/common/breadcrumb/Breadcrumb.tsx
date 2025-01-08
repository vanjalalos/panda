import React from 'react';
import Link from 'next/link';
import breadcrumbBg from "../../../../public/assets/img/bg/breadcrumb-bg.jpg";

interface PropsData {
   title: string | undefined,
   subTitle: string | undefined
}

const Breadcrumb = ({ title, subTitle }: PropsData) => {
   return (
      <>
         <section className="page-title-area breadcrumb-spacing" style={{ backgroundImage: `url(${breadcrumbBg.src})`}}>
            <div className="container">
               <div className="row justify-content-center">
                  <div className="col-xxl-9">
                     <div className="page-title-wrapper text-center">
                        <h3 className="page-title mb-25">{title}</h3>
                        <div className="breadcrumb-menu">
                           <nav aria-label="Breadcrumbs" className="breadcrumb-trail breadcrumbs">
                              <ul className="trail-items">
                                 <li className="trail-item trail-begin"><Link href="/"><span>Home</span></Link></li>
                                 <li className="trail-item trail-end"><span>{subTitle}</span></li>
                              </ul>
                           </nav>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default Breadcrumb;