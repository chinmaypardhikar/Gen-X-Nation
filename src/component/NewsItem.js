import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, discription, imageUrl, newsUrl,author, date, source } = this.props;
    return (
      <>
        <div className="card" style={{height:'430px'}}>
         <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'88%', zIndex:'1'}}>{source}</span>
          <img src={imageUrl?imageUrl:"./NullNews.jpg"} className="card-img-top" alt="Loading.." style={{ height:"161px"}}/>
          <div className="card-body">
            <h5 className="card-title">{title} ..</h5>
            <p className="card-text">{discription} ..</p>
            {{author}!=null?<p className="card-text"><small className="text-muted">By {author?author:'Unknown'} on {new Date(date).getDate()+"-"+new Date(date).getMonth()+"-"+new Date(date).getFullYear()}</small></p>:''}
            <a href={newsUrl} className="btn btn-sm btn-dark position-absolute" style={{top:'90%'}}>
              Read more
            </a>
          </div>
        </div>
      </>
    );
  }
}
