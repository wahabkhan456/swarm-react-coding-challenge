import { routes } from "../routes";
import Loader from "./Loader";
import { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom';


export interface ContentProps {

}

const Content: React.FC<ContentProps> = () => {
    return (
        <Suspense fallback={Loader}>
            <Switch>
                {routes.map((route, idx) => {
                    return route.component && (
                        <Route
                            key={idx}
                            path={route.path}
                            exact={route.exact}
                            render={props => (
                                <route.component {...props} />
                            )} />
                    )
                })}
            </Switch>
        </Suspense>
    );
}

export default Content;