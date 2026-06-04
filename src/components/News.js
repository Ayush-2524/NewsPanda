import React, { useEffect ,useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


// export class News extends Component {  
const News = (props) => {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  // document.title = `${props.category.charAt(0).toUpperCase() + props.category.slice(1) + " - NewsPanda"}`;

  // constructor(props) { needed for class component but not needed for functional component
  //   super(props);
  //   //console.log("Hello I am a constructor from newsitem");
  //   // this.state = { //converted from class component to functional component using useState hooks
  //   //   articles: [],
  //   //   loading: true,
  //   //   page: 1,
  //   //   totalResults: 0,
  //   // };
  //   document.title = `${props.category.charAt(0).toUpperCase() + props.category.slice(1) + " - NewsPanda"}`;
  // }
  //this.props is used in class component but in functional component we can directly use props without this keyword

  const updateNews=async ()=> {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url); //promise is returned and we are waiting for it to resolve and then we are storing it in data variable
    props.setProgress(400);
    let parsedData = await data.json(); //again promise is returned and we are waiting for it to resolve and then we are storing it in parsedData variable
    //console.log(parsedData);
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    // this.setState({ //replaced with useState set functions
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    //   loading: false,
    // });
    props.setProgress(100);
  }

  useEffect(() => {
    document.title = `${props.category.charAt(0).toUpperCase() + props.category.slice(1) + " - NewsPanda"}`;
    updateNews();
    // eslint-disable-next-line
  }, [])

  // async componentDidMount() { // replaced with useEffect hook
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`;
  //   // this.setState({ loading: true });
  //   // let data = await fetch(url); //promise is returned and we are waiting for it to resolve and then we are storing it in data variable
  //   // let parsedData = await data.json(); //again promise is returned and we are waiting for it to resolve and then we are storing it in parsedData variable
  //   // //console.log(parsedData);
  //   // this.setState({
  //   //   articles: parsedData.articles,
  //   //   totalResults: parsedData.totalResults,
  //   //   loading: false,
  //   // });
  //   this.updateNews();
  // }


  // const handlePrevClick = async () => {
  //   // console.log("Previous");
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page - 1}&pageSize=${props.pageSize}`;
  //   // let data = await fetch(url);
  //   // this.setState({ loading: true });
  //   // let parsedData = await data.json();
  //   // this.setState({
  //   //   articles: parsedData.articles,
  //   //   page: this.state.page - 1,
  //   //   loading: false,
  //   // });
  //   //this.setState({ page: this.state.page - 1 }); //replaced with useState set functions
  //   setPage(page - 1);
  //   updateNews();
  // };


  // const handleNextClick = async () => {
  //   //console.log("Next");
  //   // if (
  //   //   !(
  //   //     this.state.page + 1 >
  //   //     Math.ceil(this.state.totalResults / props.pageSize)
  //   //   )
  //   // ) {
  //   //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page + 1}&pageSize=${props.pageSize}`;
  //   //   let data = await fetch(url); //promise is returned and we are waiting for it to resolve and then we are storing it in data variable
  //   //   this.setState({ loading: true });
  //   //   let parsedData = await data.json(); //again promise is returned and we are waiting for it to resolve and then we are storing it in parsedData variable
  //   //   //console.log(parsedData);

  //   //   this.setState({
  //   //     page: this.state.page + 1,
  //   //     articles: parsedData.articles,
  //   //     loading: false,
  //   //   });
  //   // }
  //   //  this.setState({ page: this.state.page + 1 }); //replaced with useState set functions
  //   setPage(page + 1);
  //   updateNews();
  // };


  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
    // this.setState({ page: this.state.page + 1 });
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    // this.setState({ //replaced with useState set functions
    //   articles: this.state.articles.concat(parsedData.articles),
    //   totalResults: parsedData.totalResults,
    // });
  };


    return (
      <>
      {/* // <div className="container my-3"> */}
        <h1 className="text-center" style={{ margin: "35px 0px", marginTop: "90px" }}> NewsPanda - Top Headlines from{" "}{props.category.charAt(0).toUpperCase() +props.category.slice(1)}</h1>
        
        {loading && <Spinner />}
        {/* {this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title.slice(0,35)} description={element.description} imageURL={element.urlToImage} newsUrl={element.url}/>
          </div>
        })} */}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem title={element.title ? element.title : ""} description={element.description? element.description.slice(0, 100): ""}
                    imageURL={element.urlToImage}
                    newsUrl={element.url ? element.url : ""}
                    author={element.author ? element.author : "Unknown"}
                    date={element.publishedAt ? element.publishedAt : "Unknown"}
                    source={element.source.name ? element.source.name : "Unknown"
                    }
                  />
                </div>
              );
            })}
          </div>
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-info"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / props.pageSize)
            }
            type="button"
            className="btn btn-info"
            onClick={this.handleNextClick}
          >
            Next&rarr;
          </button>
        </div> */}
      {/* </div> */}
      </>
    );
}

News.defaultProps = {
    country: "us",
    pageSize: 6,
    category: "general",
  };


News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

export default News;
