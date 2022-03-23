import React from 'react';
import { Avatar } from './Avatar';
import { Message } from './Message';
import { Author } from './Author';
import { Time } from './Time';
import { ReplyButton } from './ReplyButton';
import { RetweetButton } from './RetweetButton';
import { LikeButton } from './LikeButton';
import { MoreOptionsButton } from './MoreOptionsButton';

export function Tweet({ tweet }) {
  return (
    <div className='tweet'>
      <Avatar image={tweet.avatar} />
      <div className='content'>
        <Author author={tweet.author} />
        <Time time={tweet.timestamp} />
        <Message text={tweet.message} />
        <div className='buttons'>
          <ReplyButton />
          <RetweetButton count={tweet.retweets} />
          <LikeButton count={tweet.likes} />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
}
