import teams from '@/data/team-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TeamContent = () => {
    return (
        <div className="bd-team-area pt-120 pb-90">
            <div className="container">
                <div className="row">
                    {teams && teams.map((item) => (
                        <div className="col-xl-3 col-sm-6" key={item.id}>
                            <div className="kteam swiper-slides mb-30">
                                <div className="kteam-img">
                                    {item.img && <Image src={item.img} style={{ width: "100%", height: "auto" }} alt="img not found" />}
                                    <div className="kteam-img-social">
                                        {item.socialIcons && item.socialIcons.map((social) => (
                                            <Link href={social.url} target="_blank" key={social.id}><i className={social.icon}></i></Link>
                                        ))}
                                    </div>
                                </div>
                                <div className="kteam-text text-center">
                                    <h4 className="kteam-title"><Link href={`/team-details/${item.id}`}>{item.title}</Link></h4>
                                    <span className="uppercase">{item.designation}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeamContent;