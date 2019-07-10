import React from 'react';
import axios from 'axios';
import UserItem from '../components/UserItem';

class UsersPage extends React.Component {
    state = {
        users: []
    };

    async componentDidMount() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        this.setState({users: response.data});
    }

    render() {
        const {users} = this.state;
        return (
            <main>
                {users.map((user, index) =>
                    <UserItem
                        key={index}
                        data={user}
                    />
                )}
            </main>
        );
    }
}

export default UsersPage;
