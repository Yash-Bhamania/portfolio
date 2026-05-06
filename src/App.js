import React from "react";
import Intro from "./components/intro";
import "./app.scss";
import Skills from "./components/skils";
import Portfolio from "./components/portfolio";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Footer from "./components/footer";

const App = () => {
    return (
        <div>
            <Intro />
            <Skills />
            <Portfolio />
            <Blogs />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
