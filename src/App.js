import {Breadcrumb, Layout} from 'antd';
import React, {Component} from "react";
import './App.less'
import Navigation from "./components/Navigation";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Users from "./pages/Users";

const {Header, Content, Footer} = Layout;

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Layout style={{minHeight: '100vh'}}>
                    <Navigation/>
                    <Layout className="site-layout">
                        <Header className="site-layout-background" style={{padding: 0}}/>
                        <Content style={{margin: '0 16px'}}>
                            <Breadcrumb style={{margin: '16px 0'}}>
                                <Breadcrumb.Item>User</Breadcrumb.Item>
                                <Breadcrumb.Item>Bill</Breadcrumb.Item>
                            </Breadcrumb>

                            <div className="site-layout-background" style={{padding: 23, minHeight: '100%'}}>
                                <Switch>
                                    <Route path="/users">
                                        <Users/>
                                    </Route>
                                    <Route path="*">
                                        Bill is a cat.
                                    </Route>
                                </Switch>
                            </div>
                        </Content>
                        <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
                    </Layout>
                </Layout>
            </BrowserRouter>
        );
    }
}

export default App;
