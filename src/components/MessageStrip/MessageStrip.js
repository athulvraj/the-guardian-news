import './MessageStrip.scss'
import { useState, useEffect } from 'react';
const MessageStrip = ({ show = false, message, type = 'success' }) => {
    let [showMessage, setShowMessage] = useState(false);


    useEffect(() => {
        if (show === true) {
            setShowMessage(true);
            setTimeout(() => {
                setShowMessage(false);
            }, 1500);
        }

    }, [show, type, message])
    return (showMessage && <div className={`message-strip type-${type}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
            <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
        </svg> {message}
    </div>)
};

export default MessageStrip;