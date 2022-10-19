import React, { Component } from 'react'
import './Navi.css';
import { FaFacebook } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { FaPlayCircle } from 'react-icons/fa';
import { FaStore } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaGamepad } from 'react-icons/fa';
import { FaCommentDots } from 'react-icons/fa';
import { FaFacebookMessenger } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa';




export class Navi extends Component {
    render() {
        return (
            <div className='fb'>
                <div className='header'>
                    <div className='container'>
                        <div className='navigation'>
                            <div className='logo'>
                                <a href=''>{< FaFacebook />}</a>
                                <p className='search'>{"Search Facebook"}</p>
                            </div>
                            <div className='c-icon'>
                                <ul>
                                    <li><a href=''>{< FaHome />}</a></li>
                                    <li><a href=''>{< FaPlayCircle />}</a></li>
                                    <li><a href=''>{< FaStore />}</a></li>
                                    <li><a href=''>{< FaUser />}</a></li>
                                    <li><a href=''>{< FaGamepad />}</a></li>
                                </ul>
                            </div>
                            <div className='l-icon'>
                                <ul>
                                    <li><a href=''>{< FaCommentDots />}</a></li>
                                    <li><a href=''>{< FaFacebookMessenger />}</a></li>
                                    <li><a href=''>{< FaBell />}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
    }
}

export default Navi
