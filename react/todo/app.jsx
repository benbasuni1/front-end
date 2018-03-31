let tasks =
[
  {
    "name" : "Todo List in Angular.js",
    "id"   : 0,
    "isEditing": false
  },
  {
    "name" : "Todo List in React.js",
    "id"   : 1,
    "isEditing": false
  },
  {
    "name" : "Todo List in Vanilla.js",
    "id"   : 2,
    "isEditing": false
  },
  {
    "name" : "Todo List in Vue.js",
    "id"   : 3,
    "isEditing": false
  },
  {
    "name" : "Create Cooking Menu Application",
    "id"   : 4,
    "isEditing": false
  },
  {
    "name" : "Take Chris to Airport",
    "id"   : 5,
    "isEditing": false
  }
];

let nextId = 6;

let Application = React.createClass({
  propTypes: {
    initialTasks: React.PropTypes.arrayOf(React.PropTypes.shape({
      name : React.PropTypes.string.isRequired,
      id   : React.PropTypes.number.isRequired,
    }))
  },

  getInitialState: function() {
    return {
      tasks       : this.props.initialTasks,
      currentTask : ""
    }
  },

  addTask: function() {
    this.state.tasks.unshift({name: "New Todo", "id": nextId, "isEditing": false  });
    this.setState(this.state);
    nextId++;
  },

  saveTask: function(e, id) {
    e.preventDefault();
    console.log(`saving`);
  },

  editTask: function(id) {
    this.setState({
      tasks: tasks.map(task => {
        if (id === task.id) {
          return {
            ...tasks,
            'isEditing': true
          };
        }
        return task;
      })
    });
  },

  deleteTask: function(e, id) {
    e.preventDefault();
    this.state.tasks.splice(id, 1);
    this.setState(this.state);
  },

  render: function() {
    return (
      <div className="list">
        <div className="add"><a href="#" onClick={this.addTask}>+ Add a New Task</a></div>
        <div>
          {this.state.tasks.map(function(task, id) {
            return (
              <Task
                key={id}
                name={task.name}
                isEditing={task.isEditing}
                saveTask={e => this.saveTask(e, id)}
                editTask={() => this.editTask(id)}
                deleteTask={e => this.deleteTask(e, id)}
              />)
          }.bind(this))}
        </div>
      </div>
    );
  }
});

let Task = React.createClass({
  getInitialState: function() {
    return {
      editing: false,
      name: ''
    }
  },

  render: function() {
    return (
      <div className="item">
        <input type="checkbox"/>
        {this.props.isEditing ?
        <input
          className="editing-label"
          type="text"
          value={this.props.name}
          /> :
          <label onClick={this.props.editTask}>{this.props.name}</label>
        }

        <div className="actions">
          <a href="" onClick={this.props.saveTask}>Save</a>
          <a href="" className="delete" onClick={this.props.deleteTask}>Delete</a>
        </div>

      </div>
    );
  }
});


ReactDOM.render(<Application initialTasks={tasks}/>, document.querySelector('#component'));
