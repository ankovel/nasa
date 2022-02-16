import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

const propTypes = {
  links: PropTypes.shape({
    next: PropTypes.string,
    self: PropTypes.string,
  }),
  near_earth_objects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};

const defaultProps = {
  links: {},
  near_earth_objects: [],
  page: {},
};

const Nasa = (props) => {
  const { links, near_earth_objects, page } = props;

  return (
    <div className={styles.nasa}>
      <div className={styles.nasa__links}>
        <a className={styles.nasa__link} href={links?.next}>Next</a>
        <a className={styles.nasa__link} href={links?.self}>Self</a>
        <span className={styles.nasa__total}>{`Total elements: ${page?.total_elements}`}</span>
        <span className={styles.nasa__total}>{`Total pages: ${page?.total_pages}`}</span>
      </div>
      <ul className={styles.nasa__list}>
        {near_earth_objects?.map(item => (
          <li className={styles.nasa__item} key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

Nasa.propTypes = propTypes;
Nasa.defaultProps = defaultProps;

export default Nasa;
