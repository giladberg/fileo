import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <navbar>
                <ul className="mainNav-container clean-list flex">
                    <li>
                        <a href="#">Features</a>
                        
                    </li>
                    <li>
                    <a href="#">Team</a>
                        
                    </li>
                    <li>
                    <a href="#">Sign In</a>
                        
                    </li>
                </ul>
            </navbar>
        )
    }
}
