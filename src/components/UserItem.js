import React from 'react';
import {Link} from 'react-router-dom';

class UserItem extends React.Component {
    render() {
        const {data} = this.props;
        return (
            <Link to={'/user/' + data.id}>
                <div style={{border: '1px solid #000', margin: 10, padding: 10}}>
                    {data.name} ({data.username})
                    <span style={{float: 'right'}}>{data.phone}</span>
                </div>
            </Link>
        );
    }
}

export default UserItem;
