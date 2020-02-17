import React, { Component } from 'react'
import Navbar from './Navbar'
import logo from '../../images/logo.png'
import logoTitle from '../../images/logotitle.png'
export default class Header extends Component {
    render() {
        return (
            <header className="container flex align-center">
                <div className="logo-container full">
                <img className="logo" src={logo}  width="60" height="50" alt=""/>
                <img className="logoTitle" src={logoTitle}  width="100" height="50" alt=""/>
                </div>
               
                <Navbar/>
            </header>
        )
    }
}
