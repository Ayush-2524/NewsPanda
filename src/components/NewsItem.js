import React from "react";

// export class NewsItem extends Component {
const NewsItem = (props) => {
  // render() {
    let { title, description, imageURL, newsUrl, author, date, source } =
      props;
    return (
      <div>
        <div className="card">
          <div style={{ display: "flex", justifyContent: "center", position: "absolute", right: "0" }}>
          <span className="badge rounded-pill bg-danger" >
            {source}
          </span>
          </div>
          <img src={imageURL} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {author} on {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newsUrl} className="btn btn-sm btn-dark" target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  // }
}

export default NewsItem;
