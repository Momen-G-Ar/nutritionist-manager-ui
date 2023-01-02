import './header.css';

import React from 'react';
import { Heartbeat, House } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className='header'>
            <div className='left'>
                <span className='heartbeat'>
                    <Heartbeat size={32} color="#01660c" weight="bold" />
                </span>
                <span className='titleInHeader'>
                    nutritionist clinic
                </span>
            </div>
            <div className='right'>
                <span
                    className='house'
                    onClick={() => { navigate('/home-page', { replace: true }); }}
                >
                    <House size={32} color="#01660c" weight="bold" />
                </span>
            </div>
        </div>
    );
};

export default Header;