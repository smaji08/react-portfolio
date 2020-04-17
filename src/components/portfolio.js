import React, { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';
import portfolioData from "../portfolioData";

class Portfolio extends Component {

  render() {
    return(
      <div>
        <div className="projects-grid">
          <Grid >
            {portfolioData.portfolio && portfolioData.portfolio.map((project)=>{
              return(
                <Cell col={4} key={project.name}>
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                  <CardTitle style={{color: 'black', height: '176px', background: `url(${project.imageUrl}) center / cover`}} >{project.name}</CardTitle> 
                  <CardText>
                    {project.description}
                  </CardText>
                  <CardActions border>
                    <Button colored href={project.gitLink} target="_blank">GitHub</Button>
                    <Button colored href={project.deployedLink} target="_blank">Live Demo</Button>
                  </CardActions>
                </Card>
                </Cell>
              )
            })}
          </Grid>          
        </div> 
      </div>
    )          
  }
}

export default Portfolio;
