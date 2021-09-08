// При нажатии на кнопку `Load more` должна догружаться следующая порция
// изображений и рендериться вместе с предыдущими. После загрузки и рендера новой
// партии изображений страница должна плавно скролиться. Для скрола используй
// следующий код.

// ```js
// window.scrollTo({
//   top: document.documentElement.scrollHeight,
//   behavior: 'smooth',
// });
// ```

// Кнопка должна рендерится только тогда, когда есть какие-то загруженные
// изобаржения. Если массив изображений пуст, кнопка не рендерится.

import React from 'react';
import s from './Button.module.css';

export default function Button({ handleLoadMore }) {
    return (
        <button className={s.Button} onClick={handleLoadMore}>
            Load more
        </button>
    );
}
