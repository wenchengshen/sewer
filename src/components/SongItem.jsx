import React,{Component} from 'react';

import { Row, Col, List } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';

import MVIcon from './MVIcon';
import ArtistLinks from './ArtistLinks';
import AddTo from './AddTo';

import neteaseMusicLogo from './images/netease_16.ico';
import qqMusicLogo from './images/qq_16.ico';
import xiamiMusicLogo from './images/xiami_16.ico';
import kuwoMusicLogo from './images/kuwo_16.ico';


/***
 * @列表
 * */
class SongItem extends  Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    changeCurrentSong(){

    }
    render() {
        let { song, currentSong } = this.props;
        let anchorClass = song.hasCopyright ? '' : 'no-copyright';
        return (
            <List.Item style={{ padding: '5px 10px' }}>
                   <Row type="flex" align="middle" style={{ width: '100%', fontSize: 14 }}>
                        <Col span={8} className="nowrap">
                        <a href={song.link}
              title={`${song.name}${song.alias ? ` - ${song.alias}` : ''}\n` +
                `${song.hasCopyright ? '' : '（此歌曲在该平台可能存在版权问题。）'}`}
              target="_blank"
              className={anchorClass}
            >
                  <span>{song.name}</span>
              <span className="song-alias">
                {song.alias && ` - ${song.alias}`}
              </span>
                </a>
                        </Col>
                        <Col span={1}>{song.mvLink && <MVIcon link={song.mvLink} />}</Col>
                        
                        </Row>
                        <Col span={6} className="nowrap">
            <ArtistLinks artists={song.artists} />
          </Col>
          <Col span={6} className="nowrap">
            <a href={song.album.link} target="_blank" title={song.album.name}>
              {song.album.name}
            </a>
          </Col>
          <Col span={1}>
            {
              this.props.showPlatform &&
                <img
                  src={logos[song.platform]}
                  alt={song.platform}
                  style={{ display: 'block' }}
                />
            }
          </Col>
          <Col span={1}>
            <a onClick={this.changeCurrentSong}
              className={
                currentSong && currentSong.link === song.link ?
                  'play-btn playing' : 'play-btn'
              }
            >
              <PlayCircleOutlined
                style={{
                  fontSize: 20,
                  display: 'block',
                }}
              />
            </a>
          </Col>
          <Col span={1}>
            <AddTo data={song} />
          </Col>
                </List.Item>
        )
    }
}

const logos = {
    qq: qqMusicLogo,
    netease: neteaseMusicLogo,
    xiami: xiamiMusicLogo,
    kuwo: kuwoMusicLogo,
  };


export default SongItem;