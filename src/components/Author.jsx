import React from 'react';

export function Author({ author }) {
  const { name, handle, verified } = author;
  return (
    <span className='author'>
      <span className='name'>{name}</span>
      <span className='handle'>@{handle}</span>
      <i className='bi bi-patch-check-fill verified'></i>
    </span>
  );
}
