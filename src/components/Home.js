import React, { Component } from 'react'
import axios from 'axios'

class Home extends Component {
  state = {
    posts: [ ]
  }
  componentDidMount(){
    axios.get("https://swapi.co/api/films")
      .then(res => {
        console.log(res);
        this.setState({
          posts: res.data.results.slice(1,6)
        });
      })
  }
  render(){
    const { posts } = this.state
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <div className="card-content">
              <span className="card-title">{post.title}</span>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No posts to show</div>
    );

    return (
      <div>
        <div className="container">
          <h4 className="center">starships</h4>
          {postList}
        </div>
      </div>
    )
  }
}

export default Home