let tasks =
[
  {
    "name" : "Todo List in Angular.js",
    "id"   : 0
  },
  {
    "name" : "Todo List in React.js",
    "id"   : 1
  },
  {
    "name" : "Todo List in Vanilla.js",
    "id"   : 2
  },
  {
    "name" : "Todo List in Vue.js",
    "id"   : 3
  },
  {
    "name" : "Create Cooking Menu Application",
    "id"   : 4
  },
  {
    "name" : "Take Chris to Airport",
    "id"   : 5
  }
];

let nextId = 6;

let Task = React.createClass({
  getInitialState: function() {
    return {
      editing: false,
      name: ''
    }
  },

  toggleEdit: function() {
    this.setState({
      editing: !this.state.editing
    })
  },

  onTaskChange: function(e) {
    this.setState({
      name: e.target.value
    });
  },

  render: function() {
    return (
      <div className="item">
        <input type="checkbox"/>
        <label onClick={this.toggleEdit}>{this.props.name}</label>
        {this.state.editing ?
        <input
          className="editing-label"
          type="text"
          onChange={this.onTaskChange}
          value={this.state.name}
          /> : <div></div>
        }

        <div className="actions">
          <a href="" onClick={this.props.saveTask}>Save</a>
          <a href="" className="delete" onClick={this.props.deleteTask}>Delete</a>
        </div>

      </div>
    );
  }
});

let Application = React.createClass({
  propTypes: {
    initialTasks: React.PropTypes.arrayOf(React.PropTypes.shape({
      name : React.PropTypes.string.isRequired,
      id   : React.PropTypes.number.isRequired,
    }))
  },

  getInitialState: function() {
    return {
      tasks: this.props.initialTasks,
      currentTask: null
    }
  },

  addTask: function() {
    this.state.tasks.unshift({name: "New Todo", id: nextId});
    this.setState(this.state);
    nextId++;
  },

  saveTask: function(e, id) {
    e.preventDefault();
    console.log(`saving`);
  },

  editTask: function(e, id) {
    console.log(`e.target.value: `, e.target.value);
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
          {this.state.tasks.map(function(task) {
            return (
              <Task
                key={task.id}
                name={task.name}
                saveTask={(e, key) => this.saveTask(e, task.id)}
                editTask={(e, key) => this.editTask(e, task.id)}
                deleteTask={(e, key) => this.deleteTask(e, task.id)}
              />)
          }.bind(this))}
        </div>
      </div>
    );
  }
});

ReactDOM.render(<Application initialTasks={tasks}/>, document.querySelector('#component'));
