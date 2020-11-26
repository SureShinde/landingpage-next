import React from "react";
import Header from "../Header/index";
import Main from "./index.styled";
import Footer from "../Footer/index";
const Layout = ({ children }) => {
    const [scroll, setScroll] = React.useState(0);

    React.useEffect(() => {
        window.addEventListener("scroll", function () {
            setScroll(this.scrollY);
        })
    }, [scroll]);
    return (
        <React.Fragment>
            <Header scroll={scroll} />
            <Main>
                {children}
            </Main>
            <footer>
                <Footer />
            </footer>
        </React.Fragment>
    )
}

export default Layout