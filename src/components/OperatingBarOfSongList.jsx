import React,{Component} from 'react';

import { Row, Col, Button } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';


class OperatingBarOfSongList extends  Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <Row type="flex" align="middle" justify="space-around">
                <Col>
                    <Button icon={<CaretRightOutlined />}
                            onClick={() =>{}}
                    >
                        播放全部
                    </Button>
                </Col>
                <Col>
                    {/*<AddTo data={this.props.songs} />*/}
                    添加歌曲
                </Col>
            </Row>
        )
    }
}
export default OperatingBarOfSongList;