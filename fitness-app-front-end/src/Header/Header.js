import react from 'react';
import classes from './Header.module.css';

const Header = () => {

    return(
        <div>
        <header className={classes.header}>
                <p>Hello</p>
                <button>Sign In</button>
        </header>
        </div>

    );

};

export default Header;