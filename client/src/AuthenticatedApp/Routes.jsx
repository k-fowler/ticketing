import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { Layout } from 'antd';

import NavbarLeft from './NavbarLeft';
import Header from './Header';
import UserTickets from './UserTickets';
import UserProjects from './UserProjects';
import RoleAdmin from './RoleAdmin';
import ProjectAdmin from './ProjectAdmin';
import Dashboard from './Dashboard';

const Routes = () => (
  <Router>
    <Route>
      <Layout>
        <NavbarLeft />
        <Layout>
          <Header />
          <Layout.Content style={{ margin: '24px 16px 0' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <Switch>
                <Route exact path="/dashboard">
                  <Dashboard />
                </Route>
                <Route exact path="/tickets">
                  <UserTickets />
                </Route>
                <Route exact path="/projects">
                  <UserProjects />
                </Route>
                <Route exact path="/roleassign">
                  <RoleAdmin />
                </Route>
                <Route exact path="/projectassign">
                  <ProjectAdmin />
                </Route>
                <Route path="/">
                  <Redirect to="/dashboard" />
                </Route>
              </Switch>
            </div>
          </Layout.Content>
          <Layout.Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Layout.Footer>
        </Layout>
      </Layout>
    </Route>
  </Router>
);

export default Routes;
