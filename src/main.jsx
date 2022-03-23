import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Tweet } from './components/Tweet';

var testTweet = {
  message:
    'Think of yourself as dead. You have lived your life. Now take what’s left and live it properly.',
  avatar: 'https://i.imgur.com/JdxMrNE.jpg',
  author: {
    handle: 'marcusAurelius',
    name: 'Marcus Aurelius',
    verified: true,
  },
  likes: 355,
  retweets: 125,
  timestamp: '2022-01-01 00:00:00',
};

ReactDOM.render(<Tweet tweet={testTweet} />, document.querySelector('#root'));
