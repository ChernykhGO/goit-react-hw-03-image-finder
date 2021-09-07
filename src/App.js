import { Component } from 'react';
import './App.css';
import Searchbar from './components/Searchbar/Searchbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImagesInfo from './components/ImagesInfo/ImagesInfo';
// import Button from './components/Button/Button';

export default class App extends Component {
    state = {
        inputText: '',
    };

    handleFormSubmit = inputText => {
        // console.log(inputText);
        this.setState({ inputText });
    };

    onloadMore = () => {};

    render() {
        // console.log(this.state.images);
        return (
            <div className="App">
                <Searchbar onSubmit={this.handleFormSubmit} />
                <ImagesInfo inputText={this.state.inputText} />
                {/* <Button /> */}
                <ToastContainer autoClose={3000} position="top-center" />
            </div>
        );
    }
}
