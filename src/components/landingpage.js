import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import profilePic from "../assets/images/profile_img.jpg";
import resume from "../assets/docs/Resume.pdf";

class LandingPage extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={profilePic}
              alt="avatar"
              className="avatar-img"
              />
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>
              <hr/>
              <p>HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express | MongoDB | Pega</p>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/reachsmar/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                <a href="https://github.com/smaji08" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                <a href={resume} rel="noopener noreferrer" target="_blank">
                  <i className="fas fa-file-pdf" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default LandingPage;