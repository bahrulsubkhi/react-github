import React from 'react';
import { Info, User, Search, Navbar, Repos, Readme } from '../components';
const Dashboard = () => {
  return (
    <main>
      <Navbar></Navbar>
      <Search></Search>
      <Info></Info>
      <User></User>
      <Readme></Readme>
      <Repos></Repos>
    </main>
  );
};

export default Dashboard;