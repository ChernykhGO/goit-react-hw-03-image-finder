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

// import { Component } from 'react';
// import s from './Button.module.css';
// import ImagesInfo from '../ImagesInfo/ImagesInfo';

// export default class Button extends Component {
//
//     // this.setState({
//     //     page: 1
//     //   });
//     loadMore = () => {
//         console.log();
//     };

//     render() {
//         return (
//             <button class={s.Button} onClick={() => loadMore()}>
//                 Load more
//             </button>
//         );
//     }
// }
