import React from "react";


class Header extends React.Component {
    render() {
        const  type = (this.props.type) ? this.props.type : 0;
        return (
            <>
                <div className="wrap-header">
                    <header className={"header lh-header header-style1 " + (type == 2 ? "header-type-2" : "flat-header")}>
                        <div className="site-header-inner">
                            <div className="container">
                                <div id="logo" className="logo">
                                    <a href="/#"><img src={require('../../assets/images/logo/02.png')} alt="images"></img></a>
                                </div>
                                <div className="mobile-button"><span></span></div>
                                <div className="header-menu">
                                    <nav id="main-nav" className="main-nav">
                                        <ul className="menu">
                                            {
                                                type == 0 && (
                                                    <>
                                                        <li><a href="/#">Carreras</a></li>
                                                        <li className="nav-sing">
                                                            <a className="sing-in" href="/#">Sing In</a>
                                                            <a className="sing-up" href="/#">Sing Up</a>
                                                        </li>
                                                    </>
                                                )
                                            }
                                            {
                                                type == 2 && (
                                                    <>
                                                        <li className="nav-sing">
                                                            <a className="sing-in" href="/home">Cerrar sesión</a>
                                                        </li>
                                                    </>
                                                )
                                            }
                                            
                                        </ul>
                                    </nav>
                                </div> 
                            </div>
                        </div>
                    </header>
                </div>
            </>
        )
    }
}

export default Header;