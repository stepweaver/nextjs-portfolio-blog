'use client';

import Card from '@/components/card';
import { useState } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(true);
  const [names, setNames] = useState(['Stephen', 'Mike', 'Ben']);
  const name = 'Stephen';
  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  const cards =
    isVisible && names.map((name, index) => <Card key={index}>{name}</Card>);

  const handleAdd = () => {
    setNames([...names, 'New Name!']);
  };

  return (
    <>
      <div className='p-20 space-y-4'>
        <div>Hello, {name}</div>
        {cards}
        <div className='flex space-x-4'>
          <button onClick={handleClick}>{isVisible ? 'Hide' : 'Show'}</button>
          <button onClick={handleAdd}>Add</button>
        </div>
      </div>
    </>
  );
}
