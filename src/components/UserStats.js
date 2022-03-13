import React, {useContext} from 'react';
import UserAvatar from "./UserAvatar";
import {UserContext} from "../utils/UserContext";

const UserStats = () => {

    const value = useContext(UserContext)

    return (
        <div className='user-stats'>
            <div>
                <UserAvatar/>
                {value.user.name}
            </div>
            <div className='stats'>
                <div>Followers: {value.stats.followers}</div>
                <div>Following: {value.stats.following}</div>
            </div>
        </div>
    )
};

export default UserStats;