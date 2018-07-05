// Core
import React, { PureComponent } from 'react';
import Styles from './styles.m.css';
// Instruments
import Checkbox from '../../theme/assets/Checkbox';
import Star from '../../theme/assets/Star';
import Edit from '../../theme/assets/Edit';
import Remove from '../../theme/assets/Remove';


export default class Task extends PureComponent {
    state = {

        completed: false,
        favorite:    false,
        edit:    false,
        disable: true,
    }

    _toggleTaskCompleted = () => {
        this.setState((prevState) => ({
            completed: !prevState.completed,
        }));

    };

    _removeTask = () => {
        const {
            _removeTaskAsync, id,
        } = this.props;

        _removeTaskAsync(id);
    }

    _toggleTaskFavoriteState = () => {

    }

    _updateTaskMessageOnClick = () => {
        this.setState((prevState) => ({
            disable: !prevState.disable,
        }));
    }

    _updateTaskMessageOnKeyDown = () => {
    };

    _getTaskShape = ({
        id = this.props.id,
        completed = this.props.completed,
        favorite = this.props.favorite,
        message = this.props.message,
    }) => ({
        id,
        completed,
        favorite,
        task,
    });

    _updateTask = () => {
        // const { message } = this.props;

        // const {
        //     _updateTaskAsync, id,
        // } = this.props;
        // _updateTaskAsync(id, this.message );
    }


    render () {
        const {id , message , completed, favorite, created} = this.props;
        // console.log(this.props);

        return (
            <li className = { Styles.task } >
                <div className = { Styles.content }>
                    <Checkbox
                        checked = { this.state.completed }
                        className = { Styles.toggleTaskCompletedState }
                        color1 = '#3B8EF3'
                        color2 = '#FFF'
                        onClick = { this._toggleTaskCompleted }
                        width = { 25 }
                    />

                    <input
                        disabled = { this.state.disable }
                        maxLength = { 50 }
                        type = 'text'
                        value = { message }
                        onChange = {  this._updateTask }
                    />
                </div>
                <div
                    className = { Styles.actions }>
                    <Star
                        checked = { favorite }
                        className = { Styles.toggleTaskFavoriteState }
                        color1 = '#3B8EF3'
                        color2 = '#000'
                        inlineBlock
                    />

                    <Edit
                        className = { Styles.updateTaskMessageOnClick }
                        color1 = '#3B8EF3'
                        color2 = '#000'
                        height = { 19 }
                        inlineBlock
                        onClick={ this._updateTaskMessageOnClick }
                        width = { 19 }
                    />
                    <Remove
                        className = 'removeTask'
                        color1 = '#3B8EF3'
                        color2 = '#000'
                        height = { 17 }
                        inlineBlock
                        onClick = { this._removeTask }
                        width = { 17 }
                    />
                </div>


            </li>);
    }
}
