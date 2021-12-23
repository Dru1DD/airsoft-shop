import React, { FC } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { GuaranteePage } from './pages/GuaranteePage'
import { HomePage } from './pages/HomePage'
import { PaymentAndDelivery } from './pages/PaymentAndDelivery'
import { PostLoaderPage } from './pages/PostLoaderPage'
import { HelpPage } from './pages/HelpPage'
import { ContactPage } from './pages/ContactsPage'
import "./styles/App.css"

export const App: FC = () => {
    return (
        <Router basename="/">
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/post-loader" component={PostLoaderPage} />
                <Route exact path="/guarantee" component={GuaranteePage } />
                <Route exact path="/payment-and-delivery" component={PaymentAndDelivery} />
                <Route exact path="/help" component={HelpPage} />
                <Route exact path={"/contact"} component={ContactPage} />
            </Switch>
        </Router>
    )
}

