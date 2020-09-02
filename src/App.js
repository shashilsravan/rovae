import './App.css';
import logo from './Logo-01.svg'
import log from './logo.svg'
import "bootstrap/dist/css/bootstrap.min.css"
import React, { Component } from 'react'
import CardContainer from './components/CardContainer'
export default class App extends Component {
  constructor(){
    super()
    this.state = {
      isToggled: false,
      searchText: '',
      uiux: false,
      aws:false,
      backend:false,
      ml:false,
      frontend:false,
      cybersec:false,
      ai:false,
      networking:false,
      communication:false,
      loyalty:false,
      workethic:false,
      flex:false,
      teamplayer:false,
      honesty:false,
      persistence:false,
      time:false
    }
    this.handleToggle = this.handleToggle.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handle = this.handle.bind(this)
  }
  handleToggle(){
    this.setState({
      isToggled: !this.state.isToggled
    })
  }
  handleChange(e, name){
    this.setState({
      [name]: e.target.checked
    })
  }
  handle(e){
    this.setState({
      searchText:e.target.value
    })
  }
  render() {
    console.log(window.screen.width, window.screen.height)
    return (
      <div>
        <nav className={window.innerWidth < 750? "navbar": "navbar fixed-top"}>
            <div className="navbar-top">
              <a href="#"
                onClick={this.handleToggle}>
                <img src={logo} className="navbar-image"/>
              </a>
              <input type="text" className="search-option" 
              onChange={(e) => this.handle(e)}
              placeholder="Search" />
              <span className="material-icons"
                    style={{color: '#878787', fontSize:'20px', marginLeft: -32}}>search</span>
            </div>
            <div className={this.state.isToggled? "toggle-btn" : "toggle-btn hide"}>
              <div className="toggled-region w3-animate-top">
                <h3 className="title-in"> <img src={log} style={{height:15, marginRight: 7, marginTop:3}}/> Dashboards</h3>
                <ol>
                  <li>People</li>
                  <li>Projects</li>
                  <li>E-Commers</li>
                </ol>
                <div className="line"></div>
                <h3 className="title-in">
                  <span className="material-icons"
                    style={{color: '#878787', fontSize:'18px', marginRight: 5}}>
                      insert_drive_file</span>
                  Documents
                  <span className="material-icons"
                    style={{color: 'white', fontSize:'18px', marginLeft: 5, marginTop: 2}}>
                    keyboard_arrow_down</span>
                  </h3>
                <h3 className="title-in">
                <span className="material-icons"
                    style={{color: '#878787', fontSize:'20px', marginRight: 6}}>
                      people_alt</span>
                  Authentication</h3>
                <div className="line"></div>
                <h3 className="title-in">
                <span className="material-icons"
                    style={{color: '#878787', fontSize:'20px', marginRight: 6}}>
                      event_note</span>
                  ToDo-Lists
                  <span className="material-icons"
                    style={{color: 'white', fontSize:'18px', marginLeft: 5, marginTop: 2}}>
                    keyboard_arrow_down</span>
                  </h3>
                <h3 className="title-in">
                <span className="material-icons"
                    style={{color: '#878787', fontSize:'20px', marginRight: 6}}>
                      grade</span>
                      Components</h3>
                <h3 className="title-in">
                <span className="material-icons"
                    style={{color: '#878787', fontSize:'20px', marginRight: 6}}>
                      settings</span>
                  Settings</h3>
              </div>
            </div>
            <div className="profile-card">
                <span className="material-icons"
                    style={{color: '#878787', fontSize:'20px', marginRight: 6}}>
                  notifications</span>

                <img src="https://pbs.twimg.com/profile_images/1094249398391820288/CDpJSKk4.jpg" alt="" className="profile-image" />

                  <span className="material-icons"
                    style={{color: '#878787', fontSize:'20px', marginRight: 6}}>
                  home</span>
            </div>
        </nav>
      
        <div className="remaining">

          <div className="power-attr">
              <div className="each">
                <h4 className="title-out"> Super Powers </h4>
                <div className="crow">
                  <div className="ccol">
                  <div className="custom-control custom-checkbox checkbox-lg ccol">
                      <input type="checkbox" id="customCheck1" checked={this.state.uiux}
                      onChange={(e) => this.handleChange(e,'uiux')}
                      className="custom-control-input custom-checkbox hello"/>
                      <label className="custom-control-label"
                      htmlFor="customCheck1"> UX/UI Design </label>
                    </div>

                    <div className="custom-control custom-checkbox checkbox-lg ccol">
                      <input type="checkbox" id="customCheck2"
                      checked={this.state.aws}
                      onChange={(e) => this.handleChange(e, 'aws')}
                      className="custom-control-input custom-checkbox hello"/>
                      <label className="custom-control-label"
                      htmlFor="customCheck2"> AWS </label>
                    </div>
                    <div className="custom-control custom-checkbox checkbox-lg ccol">
                      <input type="checkbox" id="customCheck3"
                      checked={this.state.backend} onChange={(e) => this.handleChange(e, 'backend')}
                      className="custom-control-input custom-checkbox hello"/>
                      <label className="custom-control-label"
                      htmlFor="customCheck3"> Backend Dev</label>
                    </div>
                    <div className="custom-control custom-checkbox checkbox-lg ccol">
                      <input type="checkbox" id="customCheck4"
                      checked={this.state.ml} onChange={(e) => this.handleChange(e, 'ml')}
                      className="custom-control-input custom-checkbox hello"/>
                      <label className="custom-control-label"
                      htmlFor="customCheck4"> ML </label>
                    </div>
                  </div>
                  <div className="ccol">
                    <div className="custom-control custom-checkbox checkbox-lg ccol">
                      <input type="checkbox" id="customCheck5"
                      checked={this.state.frontend} onChange={(e) => this.handleChange(e, 'frontend')}
                      className="custom-control-input custom-checkbox hello"/>
                      <label className="custom-control-label"
                      htmlFor="customCheck5"> Frontend </label>
                    </div>
                    <div className="custom-control custom-checkbox checkbox-lg ccol">
                      <input type="checkbox" id="customCheck6"
                      checked={this.state.cybersec} onChange={(e) => this.handleChange(e, 'cybersec')}
                      className="custom-control-input custom-checkbox hello"/>
                      <label className="custom-control-label"
                      htmlFor="customCheck6"> Cybersecurity </label>
                    </div>
                    <div className="custom-control custom-checkbox checkbox-lg ccol">
                      <input type="checkbox" id="customCheck7"
                      checked={this.state.ai} onChange={(e) => this.handleChange(e, 'ai')}
                      className="custom-control-input custom-checkbox hello"/>
                      <label className="custom-control-label"
                      htmlFor="customCheck7"> AI </label>
                    </div>
                    <div className="custom-control custom-checkbox checkbox-lg ccol">
                      <input type="checkbox" id="customCheck8"
                      checked={this.state.networking} onChange={(e) => this.handleChange(e, 'networking')}
                      className="custom-control-input custom-checkbox hello"/>
                      <label className="custom-control-label"
                      htmlFor="customCheck8"> Networking </label>
                    </div>
                  </div>  
                </div>
              </div>
              <div className="vline"></div>
              <div className="each eachagain">
              <h4 className="title-out"> Personal Attributes </h4>
              <div className="crow">
                  <div className="ccol">
                    <div className="custom-control custom-checkbox checkbox-lg ccol">
                      <input type="checkbox" id="customCheck11"
                      checked={this.state.communication} onChange={(e) => this.handleChange(e, 'communication')}
                      className="custom-control-input custom-checkbox hello"/>
                      <label className="custom-control-label"
                      htmlFor="customCheck11"> Communication </label>
                    </div>
                    <div className="custom-control custom-checkbox checkbox-lg ccol">
                      <input type="checkbox" id="customCheck12"
                      checked={this.state.loyalty} onChange={(e) => this.handleChange(e, 'loyalty')}
                      className="custom-control-input custom-checkbox hello"/>
                      <label className="custom-control-label"
                      htmlFor="customCheck12"> Loyal </label>
                    </div>
                    <div className="custom-control custom-checkbox checkbox-lg ccol">
                      <input type="checkbox" id="customCheck13"
                      checked={this.state.workethic} onChange={(e) => this.handleChange(e, 'workethic')}
                      className="custom-control-input custom-checkbox hello"/>
                      <label className="custom-control-label"
                      htmlFor="customCheck13"> WorkEthic</label>
                    </div>
                    <div className="custom-control custom-checkbox checkbox-lg ccol">
                      <input type="checkbox" id="customCheck14"
                      checked={this.state.flex} onChange={(e) => this.handleChange(e, 'flex')}
                      className="custom-control-input custom-checkbox hello"/>
                      <label className="custom-control-label"
                      htmlFor="customCheck14"> Flexibility </label>
                    </div>
                  </div>
                  <div className="ccol">
                    <div className="custom-control custom-checkbox checkbox-lg ccol">
                      <input type="checkbox" id="customCheck15"
                      checked={this.state.teamplayer} onChange={(e) => this.handleChange(e, 'teamplayer')}
                      className="custom-control-input custom-checkbox hello"/>
                      <label className="custom-control-label"
                      htmlFor="customCheck15"> Team player </label>
                    </div>
                    <div className="custom-control custom-checkbox checkbox-lg ccol">
                      <input type="checkbox" id="customCheck16"
                      checked={this.state.honesty} onChange={(e) => this.handleChange(e, 'honesty')}
                      className="custom-control-input custom-checkbox hello"/>
                      <label className="custom-control-label"
                      htmlFor="customCheck16"> Honesty </label>
                    </div>
                    <div className="custom-control custom-checkbox checkbox-lg ccol">
                      <input type="checkbox" id="customCheck17"
                      checked={this.state.persistence} onChange={(e) => this.handleChange(e, 'persistence')}
                      className="custom-control-input custom-checkbox hello"/>
                      <label className="custom-control-label"
                      htmlFor="customCheck17"> Persistence </label>
                    </div>
                    <div className="custom-control custom-checkbox checkbox-lg ccol">
                      <input type="checkbox" id="customCheck18"
                      checked={this.state.time} onChange={(e) => this.handleChange(e, 'time')}
                      className="custom-control-input custom-checkbox hello"/>
                      <label className="custom-control-label"
                      htmlFor="customCheck18"> Time </label>
                    </div>
                  </div>  
                </div>
              </div>
          </div>

            <CardContainer props={this.state} />

        </div>
      </div>
    )
  }
}

