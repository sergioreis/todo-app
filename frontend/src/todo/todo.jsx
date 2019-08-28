import React, {Component} from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

import axios from 'axios'

const URL = "http://localhost:3003/api/todos";

export default class Todo extends Component {

    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);

        this.state = {description: '', list: [] }
    }    

    handleChange(e){
        this.setState({...this.state, description: e.target.value});
    }

    handleAdd(){
        const description =  this.state.description;
        axios.post(URL,{ description })
             .then(resp => console.log("funcionou!") )
    }

    render(){
        return(
            <div>
                <PageHeader  name="Tarefas" small="Cadastro" />
                <TodoForm   description = {this.state.description}
                            handleChange={this.handleChange}    
                            handleAdd={this.handleAdd}  />
                <TodoList  />
            </div>
        )
    }

}