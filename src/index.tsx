import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto';

import App from './App';

const DATA = {
  name: 'ossan-engineer',
  date: new Date(),
  otherActions: [
    { label: 'Item1', handler: () => console.log('Item1') },
    { label: 'Item2', handler: () => console.log('Item2') },
    { label: 'Item3', handler: () => console.log('Item3') },
  ],
  text:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  actions: {
    comment: {
      count: 2,
      handler: () => console.log('comment'),
    },
    retweet: {
      count: 1,
      handler: () => console.log('retweet'),
    },
    like: {
      count: 13,
      handler: () => console.log('like'),
    },
    share: {
      count: 0,
      handler: () => console.log('share'),
    },
  },
};

ReactDOM.render(<App {...DATA} />, document.getElementById('root'));
