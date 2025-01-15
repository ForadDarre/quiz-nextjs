import React from "react";
import "./styling/LayoutStyles.scss";
import "../globals.scss";
import Header from "./Header";

interface DataProps {
    children: React.ReactNode;
}

function Layout(props: DataProps) {
    const { children } = props;

    return (
        <div className={"max-height-width main-layout-block"}>
            <Header />
            <div className="main-block">{children}</div>
        </div>
    );
}

export default Layout;
