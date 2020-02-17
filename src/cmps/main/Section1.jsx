import React, { Component } from 'react'
import illustration from '../../images/illustration-intro.png'
export default class Section1 extends Component {
    render() {
        return (
            <section className="section1-container flex align-center column">
                <img className="ilustration-img" src={illustration} width="720" height="534" alt="" />
                <h2>All your files in one secure location, accessible anywhere.</h2>
                <p>Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
                <button>Get Started</button>
            </section>
        )
    }
}
