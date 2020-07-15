import React,{Component} from 'react';
import {Layout,Menu} from "antd";
import HotList from './HotList'
import {connect} from 'react-redux'
const { Sider, Content } = Layout;


class Hot extends  Component{
    constructor(props) {
        super(props);
        this.state = {
            platform: 'netease',
        };
    }
    changePlatform=({item,key})=>{
        this.setState({
            platform: key,
        });
    }
    render() {
        const {userName}=this.props.loginConf
        return (
                <Layout style={{ background: 'white', padding: 10 }}>
                    <Sider style={{ background: 'none', marginRight: 20 }}
                    >
                        <h2>热歌榜</h2>
                        <div> 用户名:{userName}  </div>
                        <Menu
                            defaultSelectedKeys={ ['netease'] }
                            mode="inline"
                            defaultOpenKeys={['netease']}
                            onClick={this.changePlatform}
                        >
                            <Menu.Item key="netease">
                                网易云音乐
                            </Menu.Item>
                            <Menu.Item key="qq">
                                QQ音乐
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Content style={{ background: 'none', }}>
                        <HotList platform={this.state.platform} />
                    </Content>
                </Layout>
        )
    }
}
export default connect(state=>({loginConf:state.loginConf}),null)(Hot);