import React, {Component} from 'react';
import axios from 'axios'

class Post extends Component {

    state = {
        posts: [],
        name: 'Amirhossein'
    };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
            this.setState({posts: response.data})
        });
    }

    showPosts = () => {
        const {posts} = this.state;

        return posts.map(post => {
            return (
                <li key={post.id}>
                    <a href={`http://tahlilgar.org/${post.id}`}>Title: {post.title}</a>
                </li>
            )
        })
    };

    render() {


        return (
            <div>
                <ul>
                    {this.showPosts()}
                </ul>
            </div>
        );
    }
}

export default Post;