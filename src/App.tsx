import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { HomePage } from './components/HomePage/HomePage';
import { MintPage } from './components/MintPage/MintPage';
import { ScavHuntPage } from './components/ScavHuntPage/ScavHuntPage';
import { CollabIslandPage, DeathTreasurePage, JewelCoastPage, RiskyFriskyPage, TrainingGroundPage } from './components/GamePages/GamePages/GamePages';
import { StakingPage } from './components/StakingPage/StakingPage';

function App() {
  return (
      <div className="App">
          <Switch>        
            <Route path='/mint'><MintPage/> </Route>
            <Route path='/staking'><StakingPage/></Route>
            <Route path="/scav-hunt/scavenger-hunt"><ScavHuntPage/></Route>
            <Route path="/scav-hunt/training-ground"><TrainingGroundPage/></Route>
            <Route path="/scav-hunt/jewel-coast"><JewelCoastPage/></Route>
            <Route path="/scav-hunt/death-treasure"><DeathTreasurePage/></Route>
            <Route path="/scav-hunt/collab-land"><CollabIslandPage/></Route>
            <Route path="/scav-hunt/risky-frisky"><RiskyFriskyPage/></Route>
            <Route path="/"><HomePage/></Route>    
          </Switch>
      </div> 
  );
}

export default App;
