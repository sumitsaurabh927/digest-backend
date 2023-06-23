import {
    NovuProvider,
    PopoverNotificationCenter,
    NotificationBell
} from '@novu/notification-center';

const Header = () => {
    function onNotificationClick(message) {
        // your logic to handle the notification click
        if (message?.cta?.data?.url) {
            window.location.href = message.cta.data.url;
        }
    }
    return (
        <NovuProvider subscriberId={'digestSub'} applicationIdentifier={process.env.REACT_APP_YOUR_APP_ID_FROM_ADMIN_PANEL}>
            <PopoverNotificationCenter onNotificationClick={onNotificationClick}>
                {({ unseenCount }) =>
                    <NotificationBell unseenCount={unseenCount} />}
            </PopoverNotificationCenter>
        </NovuProvider>
    );
};

export default Header