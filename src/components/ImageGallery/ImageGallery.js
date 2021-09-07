// Список карточек изображений. Создает DOM-элемент следующей структуры.
// ```html
// <ul className="ImageGallery">
//   <!-- Набор <li> с изображениями -->
// </ul>
// ```;

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';

export default function ImageGallery({ inputText }) {
    return (
        <ul className={s.imageGallery}>
            {inputText.map(({ id, webformatURL, tags }) => (
                <ImageGalleryItem
                    id={id}
                    webformatURL={webformatURL}
                    tags={tags}
                />
            ))}
        </ul>
    );
}
