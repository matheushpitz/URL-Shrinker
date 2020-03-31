import React from 'react';
import './App.css';
import Redirect from './components/redirect/redirect.component';
import Shrinker from './components/shrinker/shrinker.component';
import Top5 from './components/top5/top5.component';
import { getUrl, addUrl, getTop5 } from './services/url/url.service';
import { Row, Col, Image } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {    
    super(props);

    this.state = {
      redirect: null,
      shrinker: {
        link: '',
        message: '',
        error: false
      },
      top5: {
        data: null
      }      
    };    

    if(window.location.pathname.length > 1)
      this.state.redirect = {
        ...this.state.redirect,
        text: 'Loading...'
      };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  async redirectTo(id) {
    try {
      // Get result from server
      let result = await getUrl(id);
      // Check if the data is valid
      if(result.data) {
        // redirect
        this.setState({
          redirect: {
            ...this.state.redirect,
            text: 'Redirecting...'
          }
        });
        // Create delay
        setTimeout(() => {
          window.location = result.data.url;
        }, 3000);        
      } else {
        // redirect to main app.
        this.setState({
          redirect: {
            ...this.state.redirect,
            text: 'Invalid URL, you will be redirected.'
          }
        });
        // Create delay
        setTimeout(() => {
          window.location.pathname = '/';
        }, 3000);        
      }
    } catch(err) {
      // redirect to main app.
      this.setState({
        redirect: {
          ...this.state.redirect,
          text: 'Invalid URL, you will be redirected.'
        }
      });
      // Create delay
      setTimeout(() => {
        window.location.pathname = '/';
      }, 3000);   
    }
  }

  async loadTop5() {
    try {
      this.setState({
        top5: {
          ...this.state.top5,
          data: (await getTop5()).data
        }
      });
    } catch(err) {
      this.setState({
        top5: {
          ...this.state.top5,
          data: []
        }
      });
    }
  }

  componentDidMount() {
    
    if(this.state.redirect) {
      // remove overflow
      document.getElementsByTagName('body')[0].style['overflow'] = 'hidden';
      // Get path
      let paths = window.location.pathname.split('/');
      // Check for a wrong path
      if(paths.length !== 2) {
        window.location.pathname = '/';
        return;
      }     
      // redirect
      this.redirectTo(paths[1]);
      
    } else {
      this.loadTop5();
    }
  }

  onChangeHandler(ev) {
    this.setState({
      shrinker: {
        ...this.state.shrinker,
        link: ev.target.value
      }
    });
  }

  async onClickHandler() {
    try {
      let result = await addUrl(this.state.shrinker.link);
      if(result) {
        this.setState({
          shrinker: {
            ...this.state.shrinker,
            link: '',
            message: result.message,
            error: !result.success,
            shrinkedUrl: result.id ? process.env.REACT_APP_WEB_APP_HOST + result.id : null
          }
        });

        this.loadTop5();
      }
    } catch(err) {
      this.setState({
        shrinker: {
          ...this.state.shrinker,
          message: 'An error occured. Please, try it later.',
          error: true
        }
      });
    }
  }

  render() {
    if(this.state.redirect) {
      return (
        <div className="App">
          <Redirect text={ this.state.redirect.text } />
        </div>
      );
    }

    return (
      <div className="App">                  
        <div className="header">              

              <Row>
                <Col xl="12">
                  <Image src="images/interlink-logo-white.png" className="logo" />    
                  <div className="header-text">         
                    <h1>Shrink your link!</h1>
                    <p>A long URL is always a problem. It's hard to remember and share.</p> 
                  </div>
                </Col>
              </Row>

              <Row>
                <Col  xl="5" lg="6" md="8" sm="10" xs="11" className="align-component">
                  <Shrinker data={this.state.shrinker} onChange={this.onChangeHandler} onClick={this.onClickHandler} />
                </Col>
              </Row>
        </div>
        <div className="body">
          <Row>
            <Col xl="5" lg="6" md="8" sm="10" xs="11" className="align-component">
              <Top5 className="top5" data={this.state.top5.data} />
            </Col>
          </Row>
        </div>
        <div className="footer">
          <Row>
            <Col>
              <span className="footer-text left-anchor">Made with <Image className="icon" src="images/heart-emoji.png" /> by Interlink</span>
              < Image className="icon right-anchor" src="images/twitter-logo.png" />
            </Col>
          </Row>
        </div>                              
      </div>
    );
  }
}

export default App;
