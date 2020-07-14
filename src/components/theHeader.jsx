import React,{Component} from 'react';

import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { GithubOutlined } from '@ant-design/icons';

import SearchBar from './SearchBar/withDropdown';


export default class TheHeader extends  Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="headerContainer" style={{
                height:"64px",

            }}>
                <Row type="flex" align="middle" className="container">
                    <Col span={7}>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <h1
                                style={{
                                    display: 'inline',
                                    color: "rgb(234, 112, 48)",
                                    fontWeight: 360,
                                }}
                            >
                                臭鱼烂虾 Mini
                            </h1>
                        </Link>
                    </Col>
                    <Col span={15}>
                        <SearchBar></SearchBar>
                    </Col>
                    <Col span={2} style={{ textAlign: 'right' }}>
                        <a href="/"
                           target="blank"
                        >
                            <GithubOutlined style={{ fontSize: 'large' }} />
                        </a>
                    </Col>
                </Row>
            </div>
        )
    }
}