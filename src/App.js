import React,{Component} from 'react';
import { Layout } from 'antd';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Theheader from './components/theHeader.jsx'
import Hot from './components/Hot.jsx'
const { Header, Footer, Sider, Content } = Layout;






class App extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
        <BrowserRouter>
          <Layout
            style={{
              backgroundColor: '#f7f7f7',
            }}
          >
            <Header
                style={{
                  position: 'fixed',
                      width: '100%',
                      zIndex: 1040,
                      // borderBottom: '1px solid #DBDBDB',
                      // padding: '12px 0',
                      boxShadow: '0 1px 3px rgba(26,26,26,.1)',
                      backgroundColor: '#f7f7f7',
                }}
             >
             <Theheader/>
            </Header>
            <Content>
                <div className="container"
                    style={{
                          marginTop: 74,
                          marginBottom: 80,
                          minHeight: 500,
                    }}
                  >
                  <Switch>
                    <Route exact path="/" component={Hot}/>
                  </Switch>
                </div>
            </Content>
          </Layout>
        </BrowserRouter>
    )
  }
}

export default App;
