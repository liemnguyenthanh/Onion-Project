import { notification } from 'antd';


export const showNotification = ({ type, message, title, duration = 2 }) => {
    notification[type ? type : 'success']({
        message: title,
        description: message,
        duration
    });
}