import React from 'react';
import AccountsUIWrapper from './AccountsUIWrapper'

const TopBar = (props) => {
    
    return(
        <div className="topbar">
            <div className="imgContainer">
                <img src="/imgs/KyrosLogo.png" alt="Kyros Digital Logo" />
            </div>

            <h1 className="title">Collect-A-Ton</h1>

            <span className="accountButton"><AccountsUIWrapper/></span>
        </div>
    );
}

export default TopBar;