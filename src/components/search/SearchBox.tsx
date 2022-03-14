import React from 'react';
import glassSolid from '@/assets/icons/glass-solid.svg';

import {
  searchBar,
  searchBar__contents,
  searchBar__field,
  search__input,
  searh__btn,
  position,
  findImgStyle,
  display,
} from './SearchBox.styled';
import SearchModal from './SearchModal';

const SearchBox = () => {
  return (
    <div css={searchBar}>
      <fieldset css={searchBar__field}>
        <div css={searchBar__contents}>
          <div className="contents__left">
            <label htmlFor="search__input" />
            <span>
              <img css={findImgStyle} src={glassSolid} alt="glass-solid"></img>
            </span>
            <div css={position}>
              <input
                css={search__input}
                id="search__input"
                className="search__input"
                placeholder="지역, 식당 또는 음식"
              ></input>
              <SearchModal icon={glassSolid}></SearchModal>
            </div>
            <span css={display}>CLEAR</span>
          </div>
          <div className="contents__right">
            <input css={searh__btn} type="submit" value="검색"></input>
          </div>
        </div>
      </fieldset>
    </div>
  );
};

export default SearchBox;