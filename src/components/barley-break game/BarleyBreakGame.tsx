import React, { useState, useEffect } from 'react';
import BarleyBreakBoard from './BarleyBreakBoard';
import BarleyBreakForm from './BarleyBreakForm/BarleyBreakForm';

const BarleyBreakGame = () => {
  const [size, setSize] = useState<number>(3);
  const [isWon, setIsWon] = useState(false);

  const isOrderCorrect = (tags: [][]) => {
    let list: number[] = [];
    tags.forEach((arr: number[]) => { list = [...list, ...arr]; });
    console.log(list);
    if (list
      .filter((el: number, id: number) => (id !== list.length - 1))
      .every((el: number, id: number) => el === id + 1)) {
      setIsWon(true);
    } else {
      setIsWon(false);
    }
  };

  useEffect(() => {
    console.log(isWon);
  }, [isWon]);

  return (
    <div>
      <BarleyBreakForm onChangeBoardSize={setSize} />
      <BarleyBreakBoard size={size} isOrderCorrect={isOrderCorrect} />
      {/* todo add reseter and diasbler */}
      {
            isWon && <h1>You won!</h1>
        }
    </div>
  );
};

export default BarleyBreakGame;
