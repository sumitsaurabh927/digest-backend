import {
    NovuProvider,
    PopoverNotificationCenter,
    NotificationBell
} from "@novu/notification-center";
import "../css/Header.css"
import bellIcon from "../assets/bell.png"

const Header = () => {
    function onNotificationClick(message) {
        // your logic to handle the notification click
        if (message?.cta?.data?.url) {
            window.location.href = message.cta.data.url;
        }
    }
    return (
        <div className='bell'>
            <div>
                <img src={bellIcon} alt="bell icon" className="bellImg"></img>
                <h1>Digest Playground!</h1>
            </div>
            <NovuProvider subscriberId={'digestSub'} applicationIdentifier={process.env.REACT_APP_YOUR_APP_ID_FROM_ADMIN_PANEL}>
                <PopoverNotificationCenter onNotificationClick={onNotificationClick}>
                    {({ unseenCount }) =>
                        <NotificationBell unseenCount={unseenCount} />}
                </PopoverNotificationCenter>
            </NovuProvider>
        </div>
    );
};

export default Header