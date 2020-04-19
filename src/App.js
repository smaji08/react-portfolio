import React from 'react';
import { Layout, Header, Drawer, Navigation, Content, Footer, FooterSection, FooterLinkList } from "react-mdl";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Landingpage from "./components/landingpage";
import AboutMe from "./components/aboutme";
import Contact from "./components/contact";
import Portfolio  from "./components/portfolio";
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <div className="demo-big-content">
            <Layout>
                <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white', fontSize: '35px'}} to="/">Augustine Stella Maria</Link>} scroll>
                    <Navigation >
                        <Link to="/aboutme">About Me</Link>
                        <Link to="/portfolio">Portfolio</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Header>
                <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/" >SMA's Portfolio</Link>}>
                    <Navigation>
                        <Link to="/aboutme">About Me</Link>
                        <Link to="/portfolio">Portfolio</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Drawer>
                
                <Content>
                    <Switch>
                        <Route exact path="/" component={Landingpage} />
                        <Route path="/aboutme" component={AboutMe} />
                        <Route path="/portfolio" component={Portfolio} />
                        <Route path="/contact" component={Contact} />
                    </Switch>
                </Content>
                
                <Footer size="mini" className="footer-color" >
                    <FooterSection type="center">
                        <FooterLinkList style={{textAlign: "center", color: "black"}}>
                            &copy;Copyright{new Date().getFullYear()} 
                        </FooterLinkList>
                    </FooterSection>
                </Footer>
            </Layout>   
        </div>
    </BrowserRouter>
 );
}

export default App;
