import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';

import './App.css';

import LoginPage from './Components/LoginPage';
import CustomHeader from './Components/CustomHeader';
import SideNav from './Components/SideNav';
import Dashboard from './Components/Dashboard';
import TicketsPage from './Components/TicketsPage';
import ProjectsPage from './Components/ProjectsPage';
import UserRolePage from './Components/UserRolePage';
import ProjectAssignPage from './Components/ProjectAssignPage';

const { Content, Footer } = Layout;

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route>
          <Layout>
            <SideNav />
            <Layout>
              <CustomHeader />
              <Content style={{ margin: '24px 16px 0' }}>
                <div
                  className="site-layout-background"
                  style={{ padding: 24, minHeight: 360 }}
                >
                  <Switch>
                    <Route path="/tickets">
                      <TicketsPage />
                    </Route>
                    <Route path="/projects">
                      <ProjectsPage />
                    </Route>
                    <Route path="/roleassign">
                      <UserRolePage />
                    </Route>
                    <Route path="/projectassign">
                      <ProjectAssignPage />
                    </Route>
                    <Route path="/">
                      <Dashboard />
                    </Route>
                  </Switch>
                </div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>
                Ant Design ©2018 Created by Ant UED
              </Footer>
            </Layout>
          </Layout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
