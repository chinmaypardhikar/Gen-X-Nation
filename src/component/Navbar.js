import React, { Component } from "react";
import {Link} from "react-router-dom";

export default class Navbar extends Component {

  dates = new Date();
  months = ["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"];
  Days = ["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"];

  day = this.Days[this.dates.getDay()];
  date= this.dates.getDate();
  month = this.months[this.dates.getMonth()];
  year = this.dates.getFullYear();

  location_weather= async()=>{
  //   let url2="https://api.openweathermap.org/data/2.5/weather?lat=21.9974&lon=79.0011&appid=8df543c054765775a89ff3f80b7de2ef";
  let data2 = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=21.9974&lon=79.0011&appid=8df543c054765775a89ff3f80b7de2ef`);
  let jData = await  data2.json();
  console.log(jData.main.temp," jData");

  }

  render() {
    return (
      <>
       <div onLoad={this.location_weather}></div>
        <div className="d-flex justify-content-between" style={{height:"80px", alignItems:"center", color:"white", fontWeight:"bolder"}}>
            <div style={{marginLeft:"20px", textShadow:"2px 2px 3px black"}}></div>
            <div><img src="./genXnation.png" alt="logo" width="300px"  id="image"/></div>
            <div id ="date" style={{marginRight:"20px", textShadow:"2px 2px 3px black"}}>{this.day+", "+this.date+" "+this.month+" "+this.year}</div>
        </div>
      <div style={{position:"sticky", top:'0',zIndex:'2', borderTop:"1px solid white", borderBottom:"1px solid white", alignItems:"center"}}>
        <nav className={`navbar navbar-expand-lg navbar-dark`} style={{backgroundImage:"linear-gradient(to right, black , transparent)", backdropFilter:"blur(10px)"}}>
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item" ><Link id='general' className="nav-link" to="/"><h6>General</h6></Link></li>
                <li className="nav-item" ><Link id='business' className="nav-link"  to="/business"><h6>Business</h6></Link></li>
                <li className="nav-item" ><Link id='entertainment' className="nav-link"  to="/entertainment"><h6>Entertainment</h6></Link></li>
                <li className="nav-item" ><Link id='health' className="nav-link"  to="/health"><h6>Health</h6></Link></li>
                <li className="nav-item" ><Link id='science' className="nav-link"  to="/science"><h6 >Science</h6></Link></li>
                <li className="nav-item" ><Link id='sports' className="nav-link"  to="/sports"><h6 >Sports</h6></Link></li>
                <li className="nav-item" ><Link id='technology' className="nav-link"  to="/technology"><h6 >Technology</h6></Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      </>
    );
  }
}
