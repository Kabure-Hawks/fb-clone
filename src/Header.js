import React from "react";
import "./Header.css";

import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleRoundedIcon from '@material-ui/icons/SupervisedUserCircleRounded';
import {Avatar, IconButton} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from './StateProvider';


function Header () {

    const [{user}, dispatch] = useStateValue();

    return(
        <div className="header">
            <div className="header--left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/768px-Facebook_f_logo_%282019%29.svg.png" alt=""/>
                <div className="header--input">
                    < SearchIcon />
                    <input placeholder="Pesquise no Facebook" type="text"></input>
                </div>
            </div>


            <div className="header--midle">
                <div className="header--options header--options--active">
                    < HomeIcon fontSize="large"/>
                </div>              
                <div className="header--options">
                    < FlagIcon fontSize="large"/>
                </div>
                <div className="header--options">
                    < SubscriptionsOutlinedIcon fontSize="large"/>
                </div>
                <div className="header--options">
                    < StorefrontOutlinedIcon fontSize="large"/>
                </div>
                <div className="header--options">
                    < SupervisedUserCircleRoundedIcon fontSize="large"/>
                </div>
            
            </div>

            <div className="header--right">
                <div className="header--info">
                    < Avatar src={user.photoURL} />
                    <h4>{user.displayName}</h4>
                </div>
                <IconButton>
                    < AddIcon />
                </IconButton>
                <IconButton>
                    < ForumIcon />
                </IconButton>
                <IconButton>
                    < NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    < ExpandMoreIcon />
                </IconButton>
            </div>

        </div>
    );
}

export default Header;