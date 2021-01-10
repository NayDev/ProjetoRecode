import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/index';
import Footer from './Components/Footer/index';
import Products from './Pages/Products';
import Main from './Pages/Home';
import Stores from './Pages/Stores/Stores';
import Posts from './Pages/Posts/Posts';



const App = () => {
    return(
        <>
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route path="/products" component={Products}/>
                <Route path="/stores" component={Stores}/>
                <Route path="/posts" component={Posts}/>
            </Switch>
       </Router>
       <Footer />

       </>
    );
}

export default App;