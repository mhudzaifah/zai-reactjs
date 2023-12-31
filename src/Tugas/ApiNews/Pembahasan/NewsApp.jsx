import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class NewsApp extends React.Component {
  constructor() {
    super();
    this.state = {
      news: [],
      searchQuery: '',
      error: null,
    };
  }

  componentDidMount() {
    this.getNews('us');
  }

  getNews = (country) => {
    const apiKey = 'b4c8666f558c4735bc8fe5e88f5de72f';
    fetch(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => this.setState({ news: data.articles, error: null }))
      .catch((error) => this.setState({ error: error.message, news: [] }));
  }

  handleSearch = () => {
    const { searchQuery } = this.state;
    if (searchQuery.trim() === '') {
      this.getNews('us');
    } else {
      const apiKey = 'b4c8666f558c4735bc8fe5e88f5de72f';
      fetch(`https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${apiKey}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => this.setState({ news: data.articles, error: null }))
        .catch((error) => this.setState({ error: error.message, news: [] }));
    }
  }

  render() {
    const { news, searchQuery, error } = this.state;
    
    return (
      <div className="container">
        <h1>News Portal</h1>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search for news..."
            value={searchQuery}
            onChange={(e) => this.setState({ searchQuery: e.target.value })}
          />
          <button className="btn btn-primary" onClick={this.handleSearch}>Search</button>
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        <div className="row">
          {news.map((article, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card">
                <img src={article.urlToImage} className="card-img-top" alt={article.title} />
                <div className="card-body">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-text">{article.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default NewsApp;
