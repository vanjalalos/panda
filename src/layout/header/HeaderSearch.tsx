import { AppContext } from '@/contextApi/AppProvider';
import { AppContextType } from '@/interFace/interFace';
import React, { useContext } from 'react';

const HeaderSearch = () => {
    const { searchOpen, toggleSearchMenu } = useContext(AppContext) as AppContextType;

    return (
        <div className={searchOpen ? "search-wrap search-opened": "search-wrap"}>
            <div className="search-inner">
                <i className="far fa-times search-close" id='search-close' onClick={toggleSearchMenu}></i>
                <div className="search-cell">
                    <form method="get">
                        <div className="search-field-holder">
                            <input type="search" className="main-search-input" placeholder="Search Here..."/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default HeaderSearch;