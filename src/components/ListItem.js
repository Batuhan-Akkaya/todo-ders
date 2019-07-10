import React from 'react';

class ListItem extends React.Component {
    render() {
        const {item, setTodoChecked} = this.props;
        return (
            <li>
                <input
                    type={'checkbox'}
                    checked={item.checked}
                    onChange={e => setTodoChecked(e.target.checked)}
                />
                <span style={{textDecoration: item.checked?'line-through':'none'}}>
                    {item.title}
                </span>
            </li>
        );
    }
}

export default ListItem;
