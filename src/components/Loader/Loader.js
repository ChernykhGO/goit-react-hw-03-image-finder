// Компонент спинера, отображется пока идет загрузка изобаржений. Используй любой
// готовый компонент, например
// [react-loader-spinner](https://github.com/mhnpd/react-loader-spinner) или любой
// другой.

import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default function ComponentLoader() {
    return (
        <div>
            <Loader
                type="TailSpin"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={10000}
            />
            Loading...
        </div>
    );
}
