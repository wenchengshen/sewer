import React,{Component} from 'react';


import { notification } from 'antd';
import { PlusOutlined } from '@ant-design/icons';


notification.config({
    placement: 'bottomRight',
    bottom: 50,
    duration: 2,
});

/***
 * @列表
 * */
class AddTo extends  Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    handleClick=()=>{
        this.props.addToPlaylist(this.props.data);
        notification.open({
            message: '已添加至播放列表',
        });
    }
    render() {
        return (
            <a onClick={this.handleClick} title="添加到播放列表">
                <PlusOutlined
                    style={{
                        fontSize: 20,
                        display: 'block',
                    }}
                />
            </a>
        )
    }
}
export default AddTo;