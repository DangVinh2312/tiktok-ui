import PropTypes from 'prop-types';
import classNames from 'classnames';
import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';

const Image = forwardRef(({ src, alt, className, fallBack: customFallBack = images.noImage, ...props }, ref) => {
    const [fallBack, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallBack);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallBack || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    class: PropTypes.string,
    fallBack: PropTypes.string,
};

export default Image;