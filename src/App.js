import React from 'react';
import Header from './components/Header';
import {BrowserRouter, Route} from 'react-router-dom';

import {UserDetail, Users, Home, Todo} from './pages';

class App extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Header/>

                    <Route component={Home} path={"/home"} />
                    <Route component={Todo} path={"/todo"} />
                    <Route component={Users} path={"/users"} />
                    <Route component={UserDetail} path={"/user/:id"} />
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
