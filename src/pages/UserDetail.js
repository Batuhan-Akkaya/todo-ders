import React from 'react';
import axios from 'axios';

class UserDetailPage extends React.Component {
    state = {
        userData: {}
    };

    async componentDidMount() {
        const userId = this.props.match.params.id;
        const res = await axios.get(
            'https://jsonplaceholder.typicode.com/users/'+  userId
        );
        this.setState({userData: res.data});

    }

    render() {
        return (
            <div>
                User Detail {this.props.match.params.id}
            </div>
        );
    }
}

export default UserDetailPage;
