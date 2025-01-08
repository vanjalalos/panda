import React from 'react';
import CountUpContent from "../common/counter/CountUpContent"

interface classType{
    fact_space:string;
  }

  const Facts = [
    {
        id: 1,
        icon: "flaticon-goal",
        count: 3456,
        subTitle: "Project completed",
        delay: ".2s",
        wrapClass: "kfact text-center mb-30 wow fadeInUp"
    },
    {
        id: 2,
        icon: "flaticon-team",
        count: 2842,
        subTitle: "Happy Client",
        delay: ".4s",
        wrapClass: "kfact text-center mb-30 wow fadeInUp"
    },
    {
        id: 3,
        icon: "flaticon-talent",
        count: 3178,
        subTitle: "Total Project",
        delay: ".6s",
        wrapClass: "kfact text-center mb-30 wow fadeInUp"
    },
    {
        id: 4,
        icon: "flaticon-group",
        count: 1845,
        subTitle: "Our Employee",
        delay: ".8s",
        wrapClass: "kfact kfact-last-child text-center mb-30 wow fadeInUp"
    }
  ]
const FunFactSection = ({fact_space}:classType) => {
    return (
        <section className={`${fact_space ? fact_space : 'fact-area pb-165'}`} style={{ backgroundImage: `url(${'/assets/img/bg/fact-bg.jpg'})` }}>
            <div className="container">
                <div className="fun-fact text-center pb-80">
                    <span>Our fun facts</span>
                </div>
            </div>
            <div className="container">
                <div className="row gx-0">
                {Facts && Facts.map((item) => (
                    <div className="col-lg-3 col-sm-6" key={item.id}>
                        <div className={item.wrapClass} data-wow-duration={item.delay}>
                            <div className="kfact-icon">
                                <i className={item.icon}></i>
                            </div>
                            <h2 className="kfact-title"><CountUpContent number={item.count} text=""></CountUpContent></h2>
                            <span>{item.subTitle}</span>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
};

export default FunFactSection;