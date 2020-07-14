import React,{Component} from 'react';

import {
    CaretRightOutlined,
    StepForwardOutlined,
    StepBackwardOutlined,
    LoadingOutlined,
    PauseOutlined,
    DownloadOutlined,
    UnorderedListOutlined,
} from '@ant-design/icons';

import { Row, Col, Slider, Button, Tooltip, notification } from 'antd';
import {
    MdRepeat as LoopIcon,
    MdRepeatOne as SingleIcon,
    MdShuffle as ShuffleIcon
} from 'react-icons/md';
import { FiVolume2 as VolumeIcon, FiVolumeX as MuteIcon } from 'react-icons/fi';

import { toMinAndSec } from '../lib/time_converter';
import MVIcon from './MVIcon';



const playModeIcons = {
    loop: <LoopIcon className="player-icon" />,
    single: <SingleIcon className="player-icon" />,
    shuffle: <ShuffleIcon className="player-icon" />,
};


const playModes = ['loop', 'single', 'shuffle', ];

const modeExplanations = {
    loop: '循环',
    single: '单曲循环',
    shuffle: '随机',
};



/***
 * @列表
 * */
class Player extends  Component{
    constructor(props) {
        super(props);
        this.state = {
            getMusicUrlStatus: 'notYet',
            playStatus: 'pausing',
            playMode: localStorage.getItem('playMode') || 'loop',
            volume: localStorage.getItem('volume')
                ? Number(localStorage.getItem('volume')) : 0.6,
            songSource: null,
            muted: false,
            playProgress: 0,
            playingListVisible: false,
        };
    }
    render() {
        const { currentSong } = this.props;
        const { getMusicUrlStatus, playStatus } = this.state;
        return (
            <div style={styles.player} id="music-player">
                <audio src={this.state.songSource}
                       ref={(audio) => { this.audio = audio; }}
                />
                <Row type="flex" align="middle" className="container" justify="space-around">
                    <Col span={4}>
                        <Button ghost shape="circle" icon={<StepBackwardOutlined />}
                                // onClick={() => this.playNext('backward')}
                        />
                        <Button ghost shape="circle" size="large"
                                // onClick={this.playOrPause}
                                style={{ margin: '0 10px' }}
                                icon={
                                    getMusicUrlStatus === 'notYet' ? <CaretRightOutlined />
                                        : (
                                            getMusicUrlStatus === 'started' ? <LoadingOutlined />
                                                : (
                                                    getMusicUrlStatus === 'ok'
                                                        ? (
                                                            playStatus === 'playing'
                                                                ? <PauseOutlined />
                                                                : <CaretRightOutlined />
                                                        )
                                                        : <CaretRightOutlined />
                                                )
                                        )
                                }
                                disabled={!currentSong}
                        />
                        <Button ghost shape="circle" icon={<StepForwardOutlined />}
                                // onClick={() => this.playNext('forward')}
                        />
                    </Col>
                    <Col span={14} style={{ paddingRight: 40 }}>
                        <Row type="flex" align="middle" justify="space-between"
                             style={{ height: 20 }}
                        >
                            {
                                currentSong &&
                                <>
                                    <Col span={7} className="nowrap">
                                        <a href={currentSong.link}
                                           style={{ color: 'white', marginRight: 4, fontSize: 16 }}
                                           target="_blank"
                                           title={currentSong.name}
                                        >
                                            <strong>{currentSong.name}</strong>
                                        </a>
                                    </Col>
                                    <Col span={2}>
                                        {
                                            currentSong.mvLink &&
                                            <MVIcon
                                                link={currentSong.mvLink}
                                                color="white"
                                            />
                                        }
                                    </Col>
                                    <Col span={6} className="nowrap">
                                        {/*{*/}
                                        {/*    currentSong.artists &&*/}
                                        {/*    <ArtistLinks artists={currentSong.artists}*/}
                                        {/*                 fontColor="white"*/}
                                        {/*    />*/}
                                        {/*}*/}
                                        ArtistLinks
                                    </Col>
                                    <Col span={5} style={{
                                        fontSize: 'small', fontWeight: 'lighter',
                                        color: 'rgb(230, 230, 230)',
                                    }}
                                    >
                                        {`来自${platforms[currentSong.platform]}`}
                                    </Col>
                                    <Col span={4} style={{ textAlign: 'right' }}>
                                        {
                                            getMusicUrlStatus === 'failed' ? '加载失败' :
                                                (
                                                    this.state.songLoaded ? `${progress} / ${total}` :
                                                        '00:00 / 00:00'
                                                )
                                        }
                                    </Col>
                                </>
                            }
                        </Row>
                        <Slider min={0}
                                max={
                                    this.state.songDuration ? parseInt(this.state.songDuration) : 0
                                }
                                value={this.state.playProgress}
                                tipFormatter={(value) => toMinAndSec(value)}
                                // onChange={this.changePlayProgress}
                                disabled={!this.state.songSource}
                                style={{ margin: '8px 0' }}
                        />

                    </Col>
                </Row>
            </div>
        )
    }
}


const styles = {
    player: {
        position: 'fixed',
        bottom: 0,
        padding: '8px 0',
        width: '100%',
        backgroundColor: "#222",
        color: "#fff",
    },
}
export default Player;