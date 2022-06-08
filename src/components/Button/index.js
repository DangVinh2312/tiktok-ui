import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    type,
    size,
    disabled,
    rounded,
    className,
    leftIcon,
    rightIcon,
    children,
    onClick,
    passProps,
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    // Remove event listeners when disabled
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        [type]: type,
        [size]: size,
        disabled,
        rounded,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}> {leftIcon} </span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}> {rightIcon} </span>}
        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    type: PropTypes.string,
    size: PropTypes.string,
    disabled: PropTypes.bool,
    rounded: PropTypes.bool,
    className: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
};

export default Button;
