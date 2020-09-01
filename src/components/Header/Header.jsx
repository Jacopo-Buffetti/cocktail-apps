import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {compose} from "redux";
import {Link, withRouter} from "react-router-dom";
import '../Header/Header.scss'

const  Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={"menu"}>
            <img src={require('../../assets/image/Logo-trasparent.png')} />
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <i className="fas fa-ellipsis-v"></i>
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem>
                    <Link to={"/"}>Home</Link>
                </MenuItem>
                <MenuItem>
                    <Link to={"/search-letter"}>Search Coctkail for  Letter</Link>
                </MenuItem><MenuItem>
                    <Link to={"/search-all"}>Search Coctkail for Ingredient</Link>
                </MenuItem>
                <MenuItem>
                    <Link to={"/love-match"}>Love Match</Link>
                </MenuItem>
                {/*<MenuItem>*/}
                {/*    <Link to={"/contact"}>Contact</Link>*/}
                {/*</MenuItem>*/}
            </Menu>
        </div>
    );
}
export default compose(
    withRouter
)(Header);
