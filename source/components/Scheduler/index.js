// Core
import React, {Component} from 'react';

// Instruments
import Styles from './styles.m.css';
import Checkbox from 'theme/assets/Checkbox';
import Spinner from 'components/Spinner';
import Task from 'components/Task';
import {api} from 'REST/api';

export default class Scheduler extends Component {
    constructor() {
        super();
        this._createTaskAsync = this._createTaskAsync.bind(this);
    }

    state = {
        tasks: [],
        checked: true,
        message: '',
    }

    componentDidMount() {
        this._fetchTaskAsync();
    }

    _setTasksFetcingState = (isSpinning) => {
        this.setState({
            isSpinning,
        });
    }


    MockFunction = () => {
        this.setState((prevState) => ({
            checked: !prevState.checked,
        }));

    };

    _updateComment = (e) => {
        const {value: message} = e.target;
        this.setState({message});
    }
    _heandleFormSubmit = (e) => {
        e.preventDefault();
        const {message} = this.state;
        this._submitComment();
    }

    _submitComment = () => {
        const {message} = this.state;
        if (!message) {
            return null;
        }
        this._createTaskAsync(message);

        this.setState({
            message: '',
        });
    }

    _submitCommentOnEnter(e) {
        const enterKey = e.key === 'Enter';

        if (enterKey) {

            e.preventDefault();
        }
    }

    _fetchTaskAsync = async () => {
        try {
            this._setTasksFetcingState(true);
            const tasks = await api.fetchTask();

            this.setState({
                tasks,
            });
        } catch ({message}) {
            console.error(message);
        } finally {
            this._setTasksFetcingState(false);
        }
    }

    _createTaskAsync = async (message) => {
        try {
            this._setTasksFetcingState(true);
            const task = await api.createTask(message);
            console.log(task);
        } catch ({message}) {

        } finally {
            this._setTasksFetcingState(false);
        }

    }


    render() {
        const {tasks: userTask, id, messages, checked, message} = this.state;
        const tasks = userTask.map((task) => (
            <Task
                {...task}
                _removeTaskAsync={ this._removeTaskAsync }
                completed={ false }
                favorite={ false }
                key={task.id}
            />
        ));


        return (

            <section className={ Styles.scheduler }>
                <main>
                    <Spinner isSpinning={ this.isSpinning }>
                        <div
                            className='spinner'
                        />
                    </Spinner>
                    <header>
                        <h1 className='test'>Планировщик задач</h1>
                        <input type='search'/>
                    </header>
                    <section>
                        <form >
                            <input
                                className='createTask'
                                maxLength={ 50 }
                                placeholder='Описание моей новой задачи'
                                type='text'
                                onChange={ this._updateComment }
                                value={ message }
                            />

                            <button onClick={ this._heandleFormSubmit }> Добавить задачу</button>

                        </form>
                        <div className='overlay'>
                            <div>
                                <ul>
                                    {tasks}
                                </ul>
                            </div>
                        </div>

                    </section>
                    <footer>
                        <Checkbox
                            checked={ checked }
                            className={ Styles.complete }
                            color1='#363636'
                            color2='#FFF'
                            onClick={ this.MockFunction }
                            width={ 25 }
                        />
                        <span
                            className='completeAllTasks'>
                        Все задачи выполнены
                        </span>
                    </footer>
                </main>
            </section>
        );
    }
}
