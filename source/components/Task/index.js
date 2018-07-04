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
        message: [],
        checked: false,
        favorite:    false,
        edit:    false,

    }

    Function = () => {
        this.setState((prevState) => ({
            checked: !prevState.checked,
        }));

    };


    _removeTask = () => {
        const {
            _removeTaskAsync, id,
        } = this.props;

        _removeTaskAsync(id);
    } //УДАЛИТЬ ПОСТЫ

    _toggleTaskFavoriteState = () => {

    }

    _updateTaskMessageOnClick = () => {

    }

    _updateTaskMessageOnKeyDown = () => {
        // const { value: comment } = e.target;
        //
        // this.setState({ comment });
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

    render () {
        const {id , message , completed, favorite, created} = this.props;
        // console.log(this.props);

        return (
            <li className = { Styles.task } >
                <div className = { Styles.content }>
                    <Checkbox
                        checked = { this.state.checked }
                        className = { Styles.toggleTaskCompletedState }
                        color1 = '#3B8EF3'
                        color2 = '#FFF'
                        onClick = { this.Function }
                        width = { 25 }
                    />

                    <input
                        disabled
                        maxLength = { 50 }
                        type = 'text'
                        value = { message}
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
                        checked = { this.edit }
                        className = { Styles.updateTaskMessageOnClick }
                        color1 = '#3B8EF3'
                        color2 = '#000'
                        height = { 19 }
                        inlineBlock
                        // onClick={[Function]}
                        width = { 19 }
                    />
                    <Remove
                        className = 'removeTask'
                        color1 = '#3B8EF3'
                        color2 = '#000'
                        height = { 17 }
                        inlineBlock
                        width = { 17 }
                    />
                </div>


            </li>);
    }
}
