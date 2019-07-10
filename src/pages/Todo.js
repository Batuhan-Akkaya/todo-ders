import React from 'react';
import ListItem from '../components/ListItem';

class TodoPage extends React.Component {
    state = {
        todo: [
            {id: 1, title: 'Todo title 1', checked: true},
            {id: 2, title: 'Todo title 2', checked: false},
            {id: 3, title: 'Todo title 3', checked: true},
            {id: 4, title: 'Todo title 4', checked: false},
        ],
        todoText: ''
    };

    setTodoChecked(val, id) {
        const todo = this.state.todo.map(item => {
            if (item.id == id)
                return {...item, checked: val};
            return item;
        });
        this.setState({todo});
    }

    addNewTodo() {
        if (this.state.todoText !== "") {
            const newTodo = {title: this.state.todoText, checked: false, id: Math.random()};
            this.setState(prevState => ({todo: [...prevState.todo, newTodo], todoText: ''}))
        } else
            alert('Todo text boş olamaz');
    }

    render() {
        return (
            <main>
                new todo:
                <input
                    type="text"
                    value={this.state.todoText}
                    onChange={e => this.setState({todoText: e.target.value})}
                />
                <button onClick={() => this.addNewTodo()}>Add</button>
                <br/>
                <hr/>
                <ul>
                    {this.state.todo.filter(item => !item.checked).map((item, index) =>
                        <ListItem
                            key={index}
                            item={item}
                            setTodoChecked={(val) => this.setTodoChecked(val, item.id)}
                        />
                    )}
                </ul>
                <hr/>
                Done Todo:
                <ul>
                    {this.state.todo.filter(item => item.checked).map((item, index) =>
                        <ListItem
                            key={index}
                            item={item}
                            setTodoChecked={(val) => this.setTodoChecked(val, item.id)}
                        />
                    )}
                </ul>
            </main>
        );
    }
}

export default TodoPage;
