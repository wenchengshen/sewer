import React,{Component} from 'react';

import { Row, Col, Button } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import AddTo from './AddTo';


import {connect} from 'react-redux'

class OperatingBarOfSongList extends  Component{
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    bofan=()=>{
         console.log('播放全部',this.props);
         this.props.loginConf({id:11,userName:"test008"})
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('播放全部',this.props.loginConf);
    }

    render() {
        const {userName}=this.props.loginConf
        return (
            <Row type="flex" align="middle" justify="space-around">
                <Col>
                    <Button icon={<CaretRightOutlined />}
                            onClick={this.bofan}
                    >
                        播放全部
                    </Button>
                </Col>
                <Col>
                    <AddTo data={this.props.songs} />
                </Col>
            </Row>
        )
    }
}

export default connect(
    (state)=>({loginConf:state.loginConf}),
    (dispatch)=>{
        return {
             loginConf(obj) {
                dispatch({type:"ADD",data:obj})
             }
        }
    }
)(OperatingBarOfSongList);