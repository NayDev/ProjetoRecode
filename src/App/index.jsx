import React from 'react';

import Header from '../Header/index';
import Footer from '../Footer/index';
import Produtos from '../Produtos/index';
import Main from '../Main/index';
import Lojas from '../Lojas/index';
import Contatos from '../Contatos/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
    return(
        <>
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route path="/produtos" component={Produtos}/>
                <Route path="/lojas" component={Lojas}/>
                <Route path="/contatos" component={Contatos}/>
            </Switch>
       </Router>
       <Footer />

       </>
    );
}

export default App;