import React from "react";
import Header from "../Header/index";
const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            <main>
                {children}
            </main>
            <footer>
                this is where footer is
            </footer>
        </React.Fragment>
    )
}

export default Layout