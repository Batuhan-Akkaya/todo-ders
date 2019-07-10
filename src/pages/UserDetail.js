import React from 'react';
import axios from 'axios';
import PostItem from '../components/PostItem';

class UserDetailPage extends React.Component {
    state = {
        userData: {},
        post: []
    };

    async componentDidMount() {
        const userId = this.props.match.params.id;
        const res = await axios.get(
            'https://jsonplaceholder.typicode.com/users/'+  userId
        );
        const {data} = await axios.get(
            'https://jsonplaceholder.typicode.com/posts?userId='+userId
        );
        this.setState({userData: res.data, post: data});
    }

    render() {
        const {userData} = this.state;
        return (
            <main style={{marginTop: -100}}>
                {userData ?
                    <div>
                        <h1>{userData.name}</h1>
                        <b>{userData.username}</b> <br/>
                        <b>{userData.website}</b> <br/>
                        <b>Şirket ismi: {userData.company ? userData.company.name: null}</b>

                        <br/><br/>
                        Posts:
                        <hr/>
                        {this.state.post.map((post) =>
                            <PostItem
                                key={post.id}
                                post={post}
                            />
                        )}
                    </div>
                    :
                    <div> yükleniyor...</div>
                }
            </main>
        );
    }
}

export default UserDetailPage;
