import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class AboutMe extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="about-grid">
          <Cell col={12}>
            <h2>About Me</h2>
            <hr />
            <div className="contact-list">
              <p>
                An agile Full stack Web Developer and a Pega Certified System
                Architect with a passion towards providing a complete user
                experience on the web. A quick learner with good technical
                communication and organizational skills within collaborative
                environments.
              </p>

              <p>
                A graduate of the Full Stack Development Bootcamp through the
                University of Connecticut with newly developed skills in
                JavaScript, CSS, NodeJS, React.js, and responsive web design. I
                was a strong back-end programming contributor on recent projects
                CookOut, FinTrack and MyGarage.
              </p>

              <p>
                My technical expertise combined with my ability to work
                cohesively within a team while providing superior communication
                makes me an advantageous member to any development team.
              </p>

              <p>
                My personal self loves people, food, and travel. I love cooking
                and baking! Also, I love to hike...only easy to moderate ones
                though :)
              </p>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default AboutMe;
