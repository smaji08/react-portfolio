import React, { Component } from "react";
import { Grid, Cell } from 'react-mdl';

class AboutMe extends Component {
    render(){
      return (
        <div className="contact-body">
            <Grid className="about-grid">
                <Cell col={12}>
                   <h2>About Me</h2>
                   <hr/>
                   <div className="contact-list">
                        <p>I am Augustine Stella Maria. I live in Manchester, CT. Before moving to here in USA, I was in India for the most part of my life.
                            I have done postgraduation in Computer Applications. During my time there in India, I worked from a process executive to a 
                            Medical transcriptionist to a Programmer. I am eager to continue my career in IT, especially in Web Development. I do believe 
                            the UCONN bootcamp will help me to kickstart my career.</p>

                        <p>My social self sees myself as a quick learner. I always enjoyed working independently yet I am very comfortable working 
                            in a team too. I do communicate effectively. If you ask my ex-colleagues/friends, they mostly will say I am good in digging out 
                            something positive even in difficult situations and that I am confident in expressing my views and am ready to help on any topic/area 
                            I am familiar with or good at.</p>

                        <p>My personal self loves people, food, and travel. I love cooking and baking! Also, I love to hike...only easy to moderate 
                            ones though :)</p>
                   </div>
                </Cell>
            </Grid>
        </div>
      )
    }
}

export default AboutMe;
