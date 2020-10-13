import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SimpleReactLightbox from "simple-react-lightbox";
import Home from './home/Home';
import App from './App';
import Login from './signIn/Login';
import Register from './signUp/Register';
import YangiDunyo from './films/YangiDunyo';
import Main from './dashboard/Main';
import Asosiy from './adminpanel/Asosiy';
import Asosiy2 from './adminpanel/Asosiy2';

const Routing = () => {
    return (
        <Router>
            <div>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={App} />
                <Route path="/sign-in" component={Login} /> 
                <Route path="/sign-up" component={Register} />
                <SimpleReactLightbox>
                    <Route path="/yangi-dunyo" component={YangiDunyo} />
                </SimpleReactLightbox>
                <Route path="/user" component={Main} />
                <Route path="/page1" component={Asosiy} />
                <Route path="/page2" component={Asosiy2} />
            </div>
        </Router>
    )
}

export default Routing;