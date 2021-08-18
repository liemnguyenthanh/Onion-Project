import React, { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import SideBar from './components/SideBar';
import { Header } from './components/Header';
import { BuyOnion } from './components/Buy';

const PageHome = (props) => {
  return (
    <main className="main_wapper">
      <SideBar />
      <div className="main_container">
        <Header />
        <div className={`main_content`}>
              <Switch>
                <Route exact  path='/home'>
                    <BuyOnion />
                </Route>
              </Switch>
        </div>
      </div>
    </main>
  );
}

export default PageHome