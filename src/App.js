import React from 'react';
import Header from './components/Header';
import {BrowserRouter, Route} from 'react-router-dom';

import HomePage from './pages/Home';
import TodoPage from './pages/Todo';
import UsersPage from './pages/Users';
import UserDetailPage from './pages/UserDetail';

class App extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Header/>

                    <Route component={HomePage} path={"/home"} />
                    <Route component={TodoPage} path={"/todo"} />
                    <Route component={UsersPage} path={"/users"} />
                    <Route component={UserDetailPage} path={"/user/:id"} />
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
