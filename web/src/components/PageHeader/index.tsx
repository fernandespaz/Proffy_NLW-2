import React from 'react';

import logoImg from '../../assets/images/logo.svg'
import backIcon from '../../assets/images/icons/back.svg'
import { Link } from 'react-router-dom';

interface PageHeaderProps {
    title: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
        <div className="top-bar-container">
            <Link to="/">
                <img src={backIcon} alt="voltar"/>
            </Link>
            <img src={logoImg} alt="logo"/>
        </div>

        <div className="header-content">
            <strong>
            {props.title}
            </strong>
        </div>
    </header>
    )
}

export default PageHeader;