import React, { Component } from 'react'
import illustration3 from '../../images/illustration3.png'
export default class Section3 extends Component {
    render() {
        return (
            <section className="section3-container flex align-center wrap justify-center">
                <img className="ilustration-img" src={illustration3} width="615" height="464" alt="" />
                <div className="rightSide">
                    <h2>Stay productive,wherever you are</h2>
                    <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
                    <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
                    <a href="">See how Fylo works</a>

                </div>
            </section>
        )
    }
}
