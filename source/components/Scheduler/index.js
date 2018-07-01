// Core
import React, {Component} from 'react';

// Instruments
import Styles from './styles.m.css';
import Checkbox from '../../theme/assets/Checkbox';
import withSvg from '../../instruments/withSvg';
import Spinner from '../../components/Spinner';

export default class Scheduler extends Component {
    render() {

        return (
            <section className = { Styles.scheduler }>
                <main>
                    <Spinner isSpinning>
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
                                className="createTask"
                                placeholder='Описание моей новой задачи'
                                type='text'
                                value=""/>

                            <button> Добавить задачу</button>

                        </form>
                        <div  className="overlay">
                            <ul>
                                {/*компонент Li*/}
                            </ul>
                        </div>

                    </section>
                    <footer>
                        <Checkbox
                            inlineBlock
                            // checked = { complete }
                            className={ Styles.complete }
                            color1='#3B8EF3'
                            color2='#FFF'
                            onClick={ this._complateTask }
                        />
                    </footer>
                </main>
            </section>
        );
    }
}
