// Компонент элемента списка с изображением. Создает DOM-элемент следующей
// структуры.
// ```html
// <li className="ImageGalleryItem">
//   <img src="" alt="" className="ImageGalleryItem-image" />
// </li>
// ```;
import s from './ImageGalleryItem.module.css';

export default function ImageGallery({ id, webformatURL, tags }) {
    return (
        <li key={id} className={s.ImageGalleryItem}>
            <img
                src={webformatURL}
                alt={tags}
                className={s.ImageGalleryItem_image}
            />
        </li>
    );
}
