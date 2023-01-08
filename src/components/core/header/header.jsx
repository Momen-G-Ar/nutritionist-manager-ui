import './header.css';

import React, { useContext } from 'react';
import { Heartbeat, House, SignOut } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './../../providers/user-provider.component';

const Header = () => {
    const navigate = useNavigate();
    const user = useContext(UserContext);

    const handleSingOut = () => {
        user.deleteUser();
    };

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
                {
                    (window.location.pathname !== '/login') &&
                    <>
                        <span
                            className='house'
                            onClick={() => { navigate('/home-page', { replace: true }); }}
                        >
                            <House size={32} color="#01660c" weight="bold" />
                        </span>
                        <span
                            className='singOut'
                            onClick={handleSingOut}
                        >
                            <SignOut size={32} color="#01660c" weight="bold" />
                        </span>
                    </>
                }
            </div>
        </div>
    );
};

export default Header;