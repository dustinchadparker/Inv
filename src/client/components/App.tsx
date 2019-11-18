import * as React from 'react';
import '../scss/app';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AllInventory from './public/AllInventory';
import AdminInventory from './admin/AdminInventory';
import AddInventory from './public/AddInventory';

class IApp extends React.Component<IAppProps, IAppState> {
    render() {
        return (
            <Router>
                <>
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={AllInventory} />
                        <Route exact path="/admin/:id" component={AdminInventory} />
                        <Route exact path="/new" component={AddInventory} />
                    </Switch>
                </div>
                </>
            </Router>
        );
    }
}

interface IAppProps { }
interface IAppState { }

export default IApp;