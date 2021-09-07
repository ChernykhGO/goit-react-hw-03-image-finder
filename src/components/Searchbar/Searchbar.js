// Компонент принимает один проп `onSubmit` - функцию для передачи значения инпута
// при сабмите формы. Создает DOM-элемент следующей структуры.

import { Component } from 'react';
import { toast } from 'react-toastify';
import s from './Searchbar.module.css';

export default class Searchbar extends Component {
    state = {
        inputText: '',
    };

    //  обновление стейта на при нажатии на инпут
    handleNameChange = event => {
        this.setState({ inputText: event.currentTarget.value.toLowerCase() });
    };

    handleSubmit = event => {
        event.preventDefault();
        if (this.state.inputText.trim() === '') {
            // return alert('Введите  название в поиске');
            return toast.info('Enter a search term in the search box!');
        }

        this.props.onSubmit(this.state.inputText);
        this.setState({ inputText: '' });
    };

    render() {
        return (
            <header className={s.Searchbar}>
                <form onSubmit={this.handleSubmit} className={s.SearchForm}>
                    <button type="submit" className={s.SearchFormButton}>
                        <span className={s.SearchFormLabel}>Search</span>
                    </button>

                    <input
                        className={s.SearchFormInput}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={this.state.inputText}
                        onChange={this.handleNameChange}
                        name="inputText"
                    />
                </form>
            </header>
        );
    }
}
