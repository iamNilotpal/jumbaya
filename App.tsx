import React from 'react';
import NarrationTile from './src/components/NarrationTile';
import { Narration } from './src/types/narration';

const NARRATION: Narration = {
  active: false,
  attribution: '',
  author: 'Nilotpal',
  comment: 'Best book',
  description: '',
  id: '',
  illustrator: '',
  name: 'Some book',
  scenes: [],
  thumbnails: [],
};

const App = () => {
  return <NarrationTile narration={NARRATION} />;
};

export default App;
