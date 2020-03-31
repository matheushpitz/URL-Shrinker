import React from 'react';
import './App.css';
import Redirect from './components/redirect.component';
import Shrinker from './components/shrinker.component';
import { getUrl } from './services/url.service';
import { Row, Col, Image } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {    
    super(props);

    this.state = {
      redirect: window.location.pathname.length > 1,
      link: ''
    };    

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onClickHandler = this.onChangeHandler.bind(this);
  }

  async componentDidMount() {
    if(this.state.redirect) {
      // Get path
      let paths = window.location.pathname.split('/');
      // Check for a wrong path
      if(paths.length !== 2) {
        window.location.pathname = '/';
        return;
      }      
      // Get result from server
      let result = await getUrl(paths[1]);
      // Check if the data is valid
      if(result.data) {
        // redirect
        window.location = result.data.url;
      } else {
        // redirect to main app.
        window.location.pathname = '/';
      }
    }
  }

  onChangeHandler(ev) {
    this.setState({
      link: ev.target.value
    });
  }

  onClickHandler() {
    alert('clique');
  }

  render() {
    if(this.state.redirect) {
      return (
        <div className="App">
          <Redirect/>
        </div>
      );
    }

    return (
      <div className="App">                  
        <div className="header">              

              <Row>
                <Col xl="12">
                  <Image src="images/interlink-logo-white.png" className="logo" />    
                  <div className="header-text container">         
                    <h1>Shrink your link!</h1>
                    <p>A long URL is always a problem. It's hard to remember and share.</p> 
                  </div>
                </Col>
              </Row>

              <Row>
                <Col xl="6" className="align-component">
                  <Shrinker value={this.state.link} onChange={this.onChangeHandler} onClick={this.onClickHandler} />
                </Col>
              </Row>
        </div>                              
      </div>
    );
  }
}

export default App;
