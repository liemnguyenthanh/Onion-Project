import React, { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import SideBar from './components/SideBar';
import { Header } from './components/Header';
import { BuyOnion } from './components/BuyComponent';
import { SaleOnion } from './components/SaleComponent';
import { BuyOnionDetail } from './components/BuyDetailComponent';

const PageHome = (props) => {
  return (
    <main className="main_wapper">
      <SideBar />
      <div className="main_container">
        <Header />
        <div className={`main_content`}>
              <Switch>
                {
                  main_page.map(item => <Route key={item.id} path={item.path}>
                                          <item.component />
                                        </Route>
                                      )
                }
              </Switch>
        </div>
      </div>
    </main>
  );
}

export default PageHome

const main_page = [
  {
    id : 1 , 
    path : '/buy',
    component: BuyOnion
  },
  {
    id : 2 , 
    path : '/sale',
    component: SaleOnion
  },
  {
    id : 3 , 
    path : "/buy-detail/:id",
    component: BuyOnionDetail
  },
]