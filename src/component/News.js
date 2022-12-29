import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner"
import InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component{
    articles =[]
    count = 0;
    constructor(props)
    {
        super(props);
        this.state={
            articles: this.articles,
            loading: true,
            page: 1,
            author: this.author,
            date: this.date,
            source: this.source,
            totalResults: 0
        };
        const titles = (this.props.category).charAt(0).toUpperCase() + (this.props.category).slice(1);
        document.title = titles;

        const onPageLoad=(data)=>{
            this.props.sendData(data);
            
        }

        onPageLoad(this.props.category);
        
        
    }

 

    async updateNews ()
        {
          let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
          this.setState({loading:true});
          let data = await fetch(url);
          let parseData = await data.json();
          await this.setState({articles : parseData.articles, page: this.state.page, loading:false, author:parseData.author,date:parseData.date, totalResults:parseData.totalResults});
        
          
        }

    async componentDidMount(){
        this.updateNews();
    }

    fetchMoreData= async()=>{
        
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        this.setState({page:this.state.page + 1});
          this.setState({loading:false});
          let data = await fetch(url);
          let parseData = await data.json();
          await this.setState({articles : this.state.articles.concat(parseData.articles), page: this.state.page, loading:false, author:parseData.author,date:parseData.date, totalResults:parseData.totalResults});
          console.log(this.state.page + " "+this.state.articles.length);
    }
    // handlePreviousClick = async ()=>{
    //     this.setState({page:this.state.page - 1});
    //     this.updateNews();
    // }

    // handleNextClick = async ()=>{
    //     this.setState({page:this.state.page + 1});
    //     this.updateNews();
    // }

    render(){
        return(
           <>
            <div>
                        {/* <h1 className="text-center py-3">Top {this.props.category} News</h1> */}
                        
                        {this.state.loading && <Spinner/>}
                        <InfiniteScroll
                        dataLength={this.state.articles.length} //This is important field to render the next data
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length !== this.state.totalResults }>
                        <div className="container" style={{paddingTop:"250px"}}>
                        {<div className="row">
                            {this.state.articles.map((element)=>{ 
                                return (<div className="col-md-3" style={{paddingTop:"15px"}} key={element.url}>
                                    
                                <NewsItem title={element.title?element.title.slice(0,60):" "} discription={element.description?element.description.slice(0,60):" "} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                                </div>);   
                            })}
                        </div>}
                        </div>
                        </InfiniteScroll>

                        {/* <div className="d-flex justify-content-between my-3">
                          <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePreviousClick}>&#8592; Previous</button>
                          <h4>{this.state.page}</h4>
                          <button type="button" disabled={this.state.page+1 > Math.ceil(this.state.totalResultss/this.props.pageSize)} className="btn btn-dark mx-3" onClick={this.handleNextClick}> Next &#8594;</button>
                        </div> */}
                   
             </div>
            </>
        );
    }
}
