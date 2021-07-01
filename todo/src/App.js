import React,{Component} from 'react';
import Todo from './component/Todo'
import Header from './component/Header';
import AddTodo from './component/AddTodo';
import './App.css'




class App extends Component {
constructor() {
  super()
  this.state={
    todos:[
      {
        id:1,
        title:'go for a walk',
        completed:false
      },
     { 
     id:2,
     title:"doing assignments",
     completed:'completed',
     },
     {
       id:3,
       title:"reading articles",
       completed:false
     }
    ]
  }
}

//event for checkbox
markComplete = (id) => {
  this.setState({todos: this.state.todos.map(todo=>{
    if(todo.id===id){
      todo.completed = !todo.completed //to make checkbox true to false or flase to true for toggling
    }
  return todo;
  })
})
}
//delete to do
delTodo=(id)=>{
  this.setState({todos:[...this.state.todos.filter(todo=>todo.id !==id)]});
}

//add todo
AddTodo=(title)=>{
  const newTodo={
    id:4,
    title:title,
    completed:false,
  }
  this.setState({todos:[...this.state.todos,newTodo]})
}

  render(){
    
    return(
      
      <div className="App">
      <div className="container">
      <Header/>
      <AddTodo  AddTodo={this.AddTodo}/>
    <Todo todos={this.state.todos} markComplete={this.markComplete}   delTodo={this.delTodo}/></div></div>
    
    );
  }
    }
    

export default App;