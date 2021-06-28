import React from 'react';
import Container from '@material-ui/core/Container';

class Header extends React.Component {
    render() {
        return (
            <header className="MuiPaper-elevation1">
                <Container maxWidth="lg">
                    <h2><img width="70" src="https://media-exp1.licdn.com/dms/image/C4D0BAQFnVwPAvd0Kjw/company-logo_200_200/0/1620746438796?e=1632960000&v=beta&t=RA3CHr0Sc97GC0VEHlRmcszkK6fH3u6QpEWTi0FV62U" alt="Logo" /></h2>
                </Container>
            </header>
        )
    }
}

export default Header;
