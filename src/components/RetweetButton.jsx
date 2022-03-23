import React from 'react';

export const RetweetButton = ({ count }) => (
  <span className='retweet-button'>
    <i className='bi bi-arrow-repeat' />
    {count ? <span className='retweet-count'>{count}</span> : null}
  </span>
);
