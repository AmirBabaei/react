import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl'

class LandingPage extends Component {
  render() {
    return (
      <div className="landing-grid">
        <Grid>
          <Cell col={12}>
            <img 
              src="https://cdn0.iconfinder.com/data/icons/avatar-78/128/12-512.png"
              alt="avatar"
              className="avatar-img" />

              <div className="banner-text">
                <h3>Amir Babaei</h3>
                <h1>Software Engineer</h1>
                <hr/>
                <p> JavaScript | React | Redux | NodeJS | C++ | Python </p>

                <div className="social-links" >
                  
                  <a href="https://www.linkedin.com/in/amir-babaei" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                  </a>

                  <a href="https://github.com/AmirBabaei" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-github-square" aria-hidden="true" />
                  </a>

                </div>
              </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;