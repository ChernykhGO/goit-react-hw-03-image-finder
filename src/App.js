import { Component } from 'react';
import './App.css';
import Searchbar from './components/Searchbar/Searchbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImagesInfo from './components/ImagesInfo/ImagesInfo';
import Button from './components/Button/Button';
import pixabayApi from './services/pixabayApi';

export default class App extends Component {
    state = {
        inputText: '',
        page: 1,
        images: [],
    };

    handleFormSubmit = inputText => {
        // console.log(inputText);
        this.setState({ inputText });
    };

    handleLoadMore = () => {
        pixabayApi
            .fetchApi(this.state.inputText, this.state.page)
            .then(data => {
                this.setState(prevState => ({
                    page: prevState.page + 1,
                    images: [...this.state.images, ...data.hits],
                }));
                console.log(this.state.images);
                console.log(this.state.page);
                // console.log(4);
            })
            .catch(error => this.setState(error));
    };

    render() {
        // console.log(this.state.images);
        return (
            <div className="App">
                <Searchbar onSubmit={this.handleFormSubmit} />
                <ImagesInfo inputText={this.state.inputText} />
                <Button handleLoadMore={this.handleLoadMore} />
                <ToastContainer autoClose={3000} position="top-center" />
            </div>
        );
    }
}
