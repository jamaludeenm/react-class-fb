import React, { Component } from 'react'
import './Feedstyle.css';
import { FaUserFriends } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';
import { FaClock } from 'react-icons/fa';
import { FaRibbon } from 'react-icons/fa';
import { FaYoutubeSquare } from 'react-icons/fa';
import { FaFlag } from 'react-icons/fa';
import { FaRegCaretSquareDown } from 'react-icons/fa';
import { FaCalendarTimes } from 'react-icons/fa';
import { FaVideo } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { FaPhotoVideo } from 'react-icons/fa';
import { FaSmile } from 'react-icons/fa';
import { FaPlusCircle } from 'react-icons/fa';
import { FaSwift } from 'react-icons/fa';
import { FaSpeakerDeck } from 'react-icons/fa';
import { FaStore } from 'react-icons/fa';
import { FaGift } from 'react-icons/fa';
import { FaGrin } from 'react-icons/fa';




 class Feed extends Component {
  render() {
    return (
        <div className='fb'>
        <div className='banner'>
            <div className='container'>
                <div className='flex-banner'>
                    <div className='first-list'>
                        <div className='flex-con'>
                            <img src={require('./images/profile.jpg')} className='pro-foto' />
                            <h5>{"Jamal Deen"}</h5>
                        </div>
                        <div className='flex-con'>
                            <span>{< FaUserFriends />}</span>
                            <h5>{"Friends"}</h5>
                        </div>
                        <div className='flex-con'>
                            <span>{< FaClock />}</span>
                            <h5>{"Memories"}</h5>
                        </div>
                        <div className='flex-con'>
                            <span>{< FaUserAlt />}</span>
                            <h5>{"Groups"}</h5>
                        </div>
                        <div className='flex-con'>
                            <span>{< FaStore />}</span>
                            <h5>{"Marketplace"}</h5>
                        </div>
                        <div className='flex-con'>
                            <span>{< FaYoutubeSquare />}</span>
                            <h5>{"watch"}</h5>
                        </div>
                        <div className='flex-con'>
                            <span>{< FaRibbon />}</span>
                            <h5>{"Saved"}</h5>
                        </div>
                        <div className='flex-con'>
                            <span>{< FaFlag />}</span>
                            <h5>{"Pages"}</h5>
                        </div>
                        <div className='flex-con'>
                            <span>{< FaCalendarTimes />}</span>
                            <h5>{"Most Recent"}</h5>
                        </div>
                        <div className='flex-con'>
                            <span>{< FaRegCaretSquareDown />}</span>
                            <h5>{"See more"}</h5>
                        </div>
                        <h4>Your Shortcuts</h4>
                        <div className='flex-con'>
                            <img src={require('./images/joker.jpeg')} className='be-img' />
                            <h5>{"Be like Joker"}</h5>
                        </div>
                    </div>
                    <div className='feed'>
                        <div className='top-1'>
                            <div className='feed-head'>
                                <h5>{'Stories'}</h5>
                                <h5>{'Reels'}</h5>
                            </div>
                            <div className='feed-img'>
                                <img src={require('./images/profile.jpg')} />
                                <img src={require('./images/gp.jpg')} />
                                <img src={require('./images/naruto.jpg')} />
                                <img src={require('./images/obama.jpg')} />
                                <span>{< FaPlusCircle />}</span>
                            </div>
                        </div>
                        <div className='middle-1'>
                            <div className='m-h'>
                                <img src={require('./images/gp.jpg')} />
                                <p>{"what's on Your mind,Jamal?"}</p>
                            </div>
                            <div className='m-f'>
                                <div className='m-f-1'>
                                    <span style={{ color: "#ff6868" }}>{< FaVideo />}</span>
                                    <h5>Live vedio</h5>
                                </div>
                                <div className='m-f-1'>
                                    <span style={{ color: "#8989f5" }}>{< FaPhotoVideo />}</span>
                                    <h5>Photo/video</h5>
                                </div>
                                <div className='m-f-1'>
                                    <span style={{ color: "rgb(249 230 97)" }}>{< FaSmile />}</span>
                                    <h5>feeling/activity</h5>
                                </div>
                            </div>
                        </div>
                        <div className='last-1'></div>
                    </div>
                    <div className='chat'>
                        <div className='chat-1'>
                            <h4>Your Pages  and Profiles</h4>
                            <div className='chat-ico'>
                                <img src={require('./images/joker.jpeg')} alt="" />
                                <h5>Be Like Joker</h5>
                            </div>
                            <div className='chat-ico-1'>
                                <span>{< FaSwift />}</span>
                                <h5>switch into page</h5>
                            </div>
                            <div className='chat-ico-1'>
                                <span>{< FaSpeakerDeck />}</span>
                                <h5>create promotion</h5>
                            </div>
                        </div>
                        <div className='bday'>
                            <span className='b-icon'>{< FaGift />}</span>
                            <p><span>Magesh TamilKing </span>and<span> 6 Others</span> have birthday today</p>
                        </div>
                        <div className='contacts'>
                            <div className='contact-head'>
                                <h4>contact</h4>
                                <div className='contact-ico'>
                                    <span>{< FaVideo />}</span>
                                    <span>{< FaSearch />}</span>
                                    <span>{< FaGrin />}</span>
                                </div>
                            </div>
                            <div className='flex-touch'>
                                <img src={require('./images/profile.jpg')} alt="" />
                                <h5>Antony vargessh</h5>
                            </div>
                            <div className='flex-touch'>
                                <img src={require('./images/gp.jpg')} alt="" />
                                <h5>Methal ijango</h5>
                            </div>
                            <div className='flex-touch'>
                                <img src={require('./images/naruto.jpg')} alt="" />
                                <h5>Eddard fyson</h5>
                            </div>
                            <div className='flex-touch'>
                                <img src={require('./images/obama.jpg')} alt="" />
                                <h5>Landu Manish </h5>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }
}

export default Feed

