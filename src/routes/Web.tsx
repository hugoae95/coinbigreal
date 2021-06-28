import { lazy } from 'react'
import { Switch, Route, withRouter } from "react-router-dom";

const Home = lazy(() =>  import('./../components/Home'));
const Item = lazy(() =>  import('./../components/Item'));

//Create routes for Web
const Routes = () => {
    return (
        <Switch>
            <Route 
                exact
                path="/"
                component={Home}
            />
            <Route 
                exact
                path="/items/:id"
                component={Item}
            />
        </Switch>
    );
}

export default withRouter(Routes);