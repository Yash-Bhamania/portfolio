import React from "react";
import Intro from "./components/intro";
import "./app.scss";
import Skills from "./components/skils";
import Portfolio from "./components/portfolio";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Footer from "./components/footer";
import WhatsApp from "./components/WhatsApp";

const App = () => {
    return (
        <div>
            <Intro />
            <Skills />
            <Portfolio />
            <Blogs />
            <Contact />
            <WhatsApp />
            <Footer />
        </div>
    );
};

export default App;
