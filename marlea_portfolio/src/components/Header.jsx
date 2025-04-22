import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faApple } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
    const [time, setTime] = useState('');

    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
        };
        updateClock();
        const interval = setInterval(updateClock, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="header_content">
            <div className="header_left_items">
                <FontAwesomeIcon icon={faApple} />
                <span>File</span>
                <span>Edit</span>
                <span>View</span>
                <span>Go</span>
                <span>Window</span>
                <span>Help</span>
            </div>
            <div className="header_right_items">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <span className="time">{time}</span>
            </div>
        </div>
    );
};

export default Header;