import {Breadcrumb, Layout} from 'antd';
import React, {Component} from "react";
import './App.less'
import Navigation from "./components/Navigation";

const {Header, Content, Footer} = Layout;

class App extends Component {
  render() {
    return (
      <Layout style={{minHeight: '100vh'}}>
        <Navigation/>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{padding: 0}}/>
          <Content style={{margin: '0 16px'}}>
            <Breadcrumb style={{margin: '16px 0'}}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{padding: 24, minHeight: '100%'}}>
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;
