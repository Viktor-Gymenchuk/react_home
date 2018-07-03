// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.m.css';
import Checkbox from 'theme/assets/Checkbox';
import Spinner from 'components/Spinner';
import Task from 'components/Task';
import { api } from 'REST/api';

export default class Scheduler extends Component {
    constructor () {
        super();
        this._createTaskAsync = this._createTaskAsync.bind(this);
    }

    componentDidMount () {
        this._fetchTaskAsync();
    }

    _setTasksFetcingState = (isSpinning) => {
        this.setState({
            isSpinning,
        });
    }

    state = {
        checked: true,
        message: '',
    }
    MockFunction = () => {

        this.setState((prevState) => ({
            checked: !prevState.checked,
        }));

    };

    _updateComment = (e) => {
        const { value: message } = e.target;
        this.setState({ message });
    }

    _heandleFormSubmit = (e) => {
        e.preventDefault();
        const { message } = this.state;
        this._submitComment();
    }

    _submitComment = () => {
        const { message } = this.state;
        if (!message) {
            return null;
        }
        this._createTaskAsync(message);


        this.setState({
            message: '',
        });

        this._fetchTaskAsync();
    }
    _submitCommentOnEnter (e) {
        console.log(this.state);
        const enterKey = e.key === 'Enter';

        if (enterKey) {

            e.preventDefault();
        }
    }

    _fetchTaskAsync = async () => {
        try {
            this._setTasksFetcingState(true);
            const task = await api.fetchTask();
            console.log(task);
            this.setState({
                task,
            });
        } catch ({ message }) {
            console.error(message);
        } finally {
            this._setTasksFetcingState(false);
        }
    }

    _createTaskAsync = async (message) => {
        try {
            this._setTasksFetcingState(true);
            const task = await api.createTask(message);
            // this.setState(({ posts }) => ({
            //     posts: [post, ...posts], //очень важно с ключами
            // }));
        } catch ({ message }) {

        } finally {
            this._setTasksFetcingState(false);
        }

    }


    render () {
        const { task: messages } = this.state;

        const { message, checked } = this.state;
        return (

            <section className = { Styles.scheduler }>
                <main>
                    <Spinner isSpinning = { this.isSpinning }>
                        <div
                            className = 'spinner'
                        />
                    </Spinner>
                    <header>
                        <h1 className = 'test'>Планировщик задач</h1>
                        <input type = 'search' />
                    </header>
                    <section>
                        <form >
                            <input
                                className = 'createTask'
                                maxLength = { 50 }
                                placeholder = 'Описание моей новой задачи'
                                type = 'text'
                                onChange = { this._updateComment }
                                value = { message }
                            />

                            <button onClick = { this._heandleFormSubmit }> Добавить задачу</button>

                        </form>
                        <div className = 'overlay'>
                            <div>
                                <ul>
                                    <Task
                                        _removeTaskAsync = { this._removeTaskAsync }
                                        completed = { false }
                                        favorite = { false }
                                        id = '123'
                                        key = '.$123'
                                    />
                                </ul>
                            </div>
                        </div>

                    </section>
                    <footer>
                        <Checkbox
                            checked = { checked }
                            className = { Styles.complete }
                            color1 = '#363636'
                            color2 = '#FFF'
                            onClick = { this.MockFunction }
                            width = { 25 }
                        />
                        <span
                            className = 'completeAllTasks'>
                            Все задачи выполнены
                        </span>
                    </footer>
                </main>
            </section>
        );
    }
}
