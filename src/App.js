import React, {useState} from 'react';
import './App.css';
import Nav from "./components/Nav";
import Body from "./components/Body";
import {UserContext} from "./utils/UserContext";

const App = () => {
    const [user, setUser] = useState({
        avatar: 'https://www.gravatar.com/avatar/0?d=monsterid',
            name: 'Monster'
    });

    const [stats, setStats] = useState({
        followers: 1000,
        following: 100
    });


    const changeAvatar = url => {
       setUser({name: user.name, avatar: url || user.avatar});
    }

        return (
            <div className='app'>
                <UserContext.Provider value={{
                   user,stats, changeAvatar
                }}>
                    <Nav/>
                    <Body/>
                </UserContext.Provider>
            </div>
        );
}

export default App;
