import React, { memo } from 'react';
import { useRef } from 'react';
import styles from './search_header.module.css';

const SearchHeader = memo(({ onSearch }) => {
  const inputRef = useRef();

  const reload = () => {
    window.location.reload();
  };

  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={reload}>
        <img
          className={styles.img}
          src='../public/images/logo.png'
          alt='logo'
        />
        <h1 className={styles.title}>Youtube</h1>
      </div>
      <input
        ref={inputRef}
        className={styles.input}
        type='search'
        placeholder='Search...'
        onKeyPress={onKeyPress}
      />
      <button className={styles.button} type='submit' onClick={onClick}>
        <img
          className={styles.buttonImg}
          src='../public/images/search.png'
          alt='search'
        />
      </button>
    </header>
  );
});

export default SearchHeader;
