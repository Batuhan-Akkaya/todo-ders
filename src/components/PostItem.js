import React from 'react';

class PostItem extends React.Component {
    render() {
        const {post} = this.props;
        return (
            <div style={{border: '1px solid #000',margin: 10, padding: 10}}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        );
    }
}

export default PostItem;
