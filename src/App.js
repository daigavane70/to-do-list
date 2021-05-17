import './App.css';
import { useState, useEffect } from 'react';
import TaskList from './TaskList';
import { connect } from 'react-redux';
import { insert1, insert2 } from './Store/actions';

function App(props) {

  const [list1, setlist1] = useState([])
  const [list2, setlist2] = useState([])

  useEffect(() => {

    setlist1(props.list1.map(task => {
      return <TaskList task={task} />
    }))

    setlist2(props.list2.map(task => {
      return <TaskList task={task} />
    }))

  }, [props])

  const Insert = (e) => {

    let newTask = {
      no: props.list2.length + 1,
      name: document.getElementById('task').value,
      time: document.getElementById('time').value
    }

    if (e.target.id === '1') {
      props.insert1(newTask)
    }
    else {
      props.insert2(newTask)
    }


  }

  return (
    <div className="App">

      <header className="App-header">
        <h1> To Do List App </h1>
      </header>

      <div>
        <h3>Insert Into Table</h3>
        <label>Task: </label><input id='task' type='text'></input>
        <label>Time: </label><input id='time' type='time'></input>
        <div>
          <button onClick={Insert} id='1'>Insert in 1</button>
          <button onClick={Insert} id='2'>Insert in 2</button>
        </div>
      </div>

      <div className='list-container'>
        <div>
          <h3> List 1 </h3>
          <table className='list'>
            <thead>
              <tr className='head item'>
                <th>Sr.No</th>
                <th>Task</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {list1}
            </tbody>
          </table>
        </div>

        <div>
          <h3> List 2 </h3>
          <table className='list'>
            <thead>
              <tr className='head item'>
                <th>Sr.No</th>
                <th>Task</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {list2}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    list1: state.list1,
    list2: state.list2
  }
}

const mapActionToProps = dispatch => {
  return {
    insert1: task => { dispatch(insert1(task)) },
    insert2: task => { dispatch(insert2(task)) }
  }
}

export default connect(mapStateToProps, mapActionToProps)(App);
