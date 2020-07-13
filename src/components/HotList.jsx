import React,{Component} from 'react';

import { LoadingOutlined } from '@ant-design/icons';
import OperatingBarOfSongList from './OperatingBarOfSongList.jsx'
import SongList from './SongList.jsx'


class Hotlist extends  Component{
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            songs: [],
        };
    }
    componentDidMount() {
        this.fetchHotList(this.props.platform);
    }
    componentDidUpdate(prevProps) {
        if (prevProps.platform !== this.props.platform) {
            this.fetchHotList(this.props.platform);
        }
    }
    fetchHotList=(platform)=>{
        this.setState({
            loading: true,
        });
        fetch(`/api/hot_list/${platform}`, {
            credentials: 'include',
        }).then(res => res.json())
            .then(json => {
                if (json.status === 'ok') {
                    this.setState({
                        loading: false,
                        songs: json.data.songs,
                    });
                }
            })
            .catch(err => console.error(err));
    }
    render() {
        const { songs } = this.state;
        console.log(songs,"songs");

        return (<>
            <div  style={{ paddingLeft: 600 }}>
                {
                    songs.length !== 0  && <OperatingBarOfSongList songs={songs}/>
                }
            </div>
                {
                    this.state.loading ?
                        <LoadingOutlined /> :<SongList songs={songs} />
                }
            </>
        )
    }
}

export default Hotlist;