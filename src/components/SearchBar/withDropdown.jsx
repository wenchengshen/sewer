import React,{Component} from 'react';

import { Dropdown, Menu, Input, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

const Search = Input.Search;

/***
 * @列表
 * */
class SearchBar extends  Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    onSearch=()=>{

    }
    onSelect(){

    }
    render() {
        const { keyword, searchHistory } = this.props;
        const menu = (
            <Menu selectable onSelect={this.onSelect}>
                <Menu.ItemGroup key="history" title={ <div style={{ alignItems: 'center', justifyContent: 'space-between', display: 'flex' }}>
                    <span>搜索历史</span>
                    <Button icon={<DeleteOutlined />}
                            type="circle"
                            onClick={() =>{} }
                    />
                </div>}
                >
               {
                   searchHistory && searchHistory.map(item => (
                    <Menu.Item key={item}>
                        {item}
                    </Menu.Item>
                ))
               }
            </Menu.ItemGroup>
            </Menu>
        )
        return (
            <Dropdown
                overlay={menu}
            >
                <Search
                    placeholder="歌曲 | 专辑 | 艺人"
                    defaultValue={keyword || ''}
                    onSearch={this.onSearch}
                    enterButton
                    id="searchInput"
                />
            </Dropdown>
        )
    }
}
export default SearchBar;