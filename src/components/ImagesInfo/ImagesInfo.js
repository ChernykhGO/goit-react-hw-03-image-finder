import { Component } from 'react';
import Loader from '../Loader/Loader';

import ImageGallery from '../ImageGallery/ImageGallery';
import pixabayApi from '../../services/pixabayApi';

export default class ImagesInfo extends Component {
    state = {
        inputText: '',
        eror: null,
        status: 'idle',
        page: 1,
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.inputText !== this.props.inputText) {
            this.setState({ status: 'pending' });
            // console.log(prevProps.inputText);
            // console.log(this.props.inputText);

            pixabayApi
                .fetchApi(this.props.inputText, this.state.page)
                .then(data =>
                    this.setState({ inputText: data.hits, status: 'resolved' }),
                )
                .catch(error => this.setState({ error, status: 'rejected' }));
        }

        // fetch(
        //     `https://pixabay.com/api/?key=22345544-d7e856a59bd0b8410f42b3802&q=${this.props.inputText}&image_type=photo&&orientation=horizontalpage=${this.state.page}&per_page=12`,
        // )
        //     .then(response => {
        //         if (response.ok) {
        //             return response.json();
        //         }
        //         return Promise.reject(
        //             new Error(
        //                 `Не найдено изображения с названием ${this.props.inputText}`,
        //             ),
        //         );
        //     })
    }

    render() {
        const { inputText, error, status } = this.state;

        if (status === 'idle') {
            return <div>Enter text...</div>;
        }

        if (status === 'pending') {
            return <Loader />;
        }

        if (status === 'rejected') {
            return <h1>{error.message}</h1>;
        }

        if (status === 'resolved') {
            return (
                <ImageGallery
                    id={this.props.id}
                    webformatURL={this.props.webformatURL}
                    tags={this.props.tags}
                    inputText={inputText}
                />
            );
        }
    }
}
