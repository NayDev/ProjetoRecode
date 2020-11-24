import React from 'react';

import Header from '../components/Header/index';
import Footer from '../components/Footer/index';
import Produtos from '../components/Produtos/index';
import Main from '../components/Main/index';
import Lojas from '../components/Lojas/index';
import Mensagens from '../components/Mensagens/index';
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
                <Route path="/mensagens" component={Mensagens}/>
            </Switch>
       </Router>
       <Footer />

       </>
    );
}

export default App;