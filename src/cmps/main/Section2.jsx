import React, { Component } from 'react'
import security from '../../images/icon-security.svg'
import collaboration from '../../images/icon-collaboration.svg'
import anyFile from '../../images/icon-any-file.svg'
import access from '../../images/icon-access-anywhere.svg'
export default class Section2 extends Component {
    render() {
        return (
            <section className="section2-container flex justify-center wrap">
                <div className="item-contaner flex column align-center">
                    <img src={access} alt="" width="80" height="80" />
                    <h3>Access your files, anywhere</h3>
                    <p>The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.</p>
                </div>
                <div className="item-contaner flex column align-center">
                    <img src={security} alt="" width="80" height="80" />
                    <h3>Security you can trust</h3>
                    <p>2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.</p>
                </div>
                <div className="item-contaner flex column align-center">
                    <img src={collaboration} alt="" width="80" height="80" />
                    <h3>Real-time collaboration</h3>
                    <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
                </div>
                <div className="item-contaner flex column align-center">
                    <img src={anyFile} alt="" width="80" height="80" />
                    <h3>Store any type of file</h3>
                    <p>Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.</p>
                </div>




            </section>
        )
    }
}
