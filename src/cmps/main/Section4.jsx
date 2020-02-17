import React, { Component } from 'react'
import profileone from '../../images/one.jpg'
 import profiletwo from '../../images/two.jpg'
 import profilethree from '../../images/three.jpg'

export default class Section4 extends Component {
    render() {
        return (
            <section className="section4-container flex wrap justify-center">
                <div className="card flex column justify-space-between">
                    <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                    <div className="partTwo flex align-center">
                        <img  src={profileone} width="24" height="24" alt="" />
                        <div className="text flex column justify-center">
                            <h4>Satish Patel</h4>
                            <p>Founder & CEO, Huddle</p>
                        </div>
                    </div>
                </div>
                <div className="card flex column justify-space-between ">
                    <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                    <div className="partTwo flex align-center">
                        <img src={profiletwo} width="24" height="24" alt="" />
                        <div className="text flex column justify-center">
                            <h4>Bruce McKenzie</h4>
                            <p>Founder & CEO, Huddle</p>
                        </div>
                    </div>
                </div> 
                 <div className="card flex column justify-space-between">
                    <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                    <div className="partTwo flex align-center">
                        <img  src={profilethree} width="24" height="24" alt="" />
                        <div className="text flex column justify-center">
                            <h4>Iva Boyd</h4>
                            <p>Founder & CEO, Huddle</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
