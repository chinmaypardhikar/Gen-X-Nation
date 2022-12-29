import './App.css';
import React,{ Component } from 'react';
import Navbar from './component/Navbar';
import News from './component/News';
import PropsType from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import articles from './component/News';


export default class App extends Component{

  keys = "f769fbea4a514fa799f80e6b1cf5777a"
  len = articles.length

  
  constructor(){
    super();
    this.state={categores:"general"}
    // this.locations = this.locations.bind(this);
  }
  
  
  static defaultProps={
    country : 'in',
    pageSize : 8,
    ApiKey : "abc",
    category: 'general',

    
  }

  static propsType={
    country : PropsType.string,
    pageSize : PropsType.number,
    ApiKey : PropsType.string,
    category: PropsType.string,
    lat: PropsType.string,
    lon:PropsType.string
  }

  getData=(data)=>{
    this.setState({categores:data})
  }

  

  render(){
    document.body.style.backgroundColor="#e7e7e7";
    return(
      <Router>
        
        <div  style={{backgroundImage:`url(./${this.state.categores}.jpg)` ,backgroundRepeat:"no-repeat", backgroundSize:"100% 600px"}}>
        <div style={{position:"fixed", bottom:"0", left:"0", marginLeft:"50px",marginBottom:"50px", animationName:"hotnews", animationDuration:"0.8s", animationIterationCount:"infinite", animationDirection:"alternate", zIndex:"2"}}><img src="./news.png" width={"150px"} alt="loading"></img></div>
        
      <Navbar lat={this.kal}/>
        <Routes>
          <Route exact path="/business" element={<News key='business' apiKey={this.keys} pageSize={8} country='in' category='business' sendData={this.getData}/>}/>
          <Route exact path="/entertainment" element={<News key='entertainment' apiKey={this.keys} pageSize={8} country='in' category='entertainment' sendData={this.getData}/>}/>
          <Route exact path="/" element={<News key='general' apiKey={this.keys} pageSize={8} country='in' category='general' sendData={this.getData} />}/>
          <Route exact path="/health" element={<News key='health' apiKey={this.keys} pageSize={8} country='in' category='health'  sendData={this.getData}/>}/>
          <Route exact path="/science" element={<News key='science' apiKey={this.keys} pageSize={8} country='in' category='science'  sendData={this.getData}/>}/>
          <Route exact path="/sports" element={<News key='sports' apiKey={this.keys} pageSize={8} country='in' category='sports'  sendData={this.getData}/>}/>
          <Route exact path="/technology" element={<News key='technology' apiKey={this.keys} pageSize={8} country='in' category='technology'  sendData={this.getData}/>}/>
        </Routes>
        </div>
      </Router>

      
    )
  }
}