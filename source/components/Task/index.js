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
        star:    false,
        edit:    false,

    }

    Function = () => {
        this.setState((prevState) => ({
            checked: !prevState.checked,
        }));

    };

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

    _removePost = () => {
        const {
            _removeTascAsync, id,
        } = this.props;

        _removeTascAsync(id);
    } //УДАЛИТЬ ПОСТЫ

    render () {

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
                        // onChange={ [Function] }
                        // onKeyDown={ [Function] }
                        type = 'text'
                        value = { this.message}
                    />
                </div>
                <div
                    className = { Styles.actions }>
                    <Star
                        checked = { this.star }
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
