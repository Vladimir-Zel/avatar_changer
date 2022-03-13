import React, {useContext} from 'react';
import {UserContext} from "../utils/UserContext";

const UserAvatar = (props) => {

    const value = useContext(UserContext);
    return (
        <img
            className={`user-avatar ${props.size}`}
            src={value.user.avatar}
            alt={value.user.name}
            onClick={() => {
                const url = prompt('Enter new avatar url');
                value.changeAvatar(url);
            }}
        />
    );
};

export default UserAvatar;