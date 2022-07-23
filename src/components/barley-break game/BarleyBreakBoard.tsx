import React, { useState, useEffect } from 'react';
import { v4 } from 'uuid';
import shuffleTags from './shuffleTags';
import TagNode from './TagNode';
import changeTagPosition from './changeTagPosition';

type BarleyBreakBoardType = {
  size: number,
    isOrderCorrect: Function
}
const BarleyBreakBoard = ({ size, isOrderCorrect }: BarleyBreakBoardType) => {
  // eslint-disable-next-line no-unused-vars
  const [tags, setTags] = useState(shuffleTags(size));

  const handleTagPositionChange = (x: number, y: number) => {
    if (x - 1 > -1 && tags[y][x - 1] === 0) {
      setTags([...changeTagPosition(tags, x, y, x - 1, y)]);
    }

    if (x + 1 < size && tags[y][x + 1] === 0) {
      setTags([...changeTagPosition(tags, x, y, x + 1, y)]);
    }

    if (y - 1 > -1 && tags[y - 1][x] === 0) {
      setTags([...changeTagPosition(tags, x, y, x, y - 1)]);
    }

    if (y + 1 < size && tags[y + 1][x] === 0) {
      setTags([...changeTagPosition(tags, x, y, x, y + 1)]);
    }
  };

  useEffect(() => {
    isOrderCorrect(tags);
  }, [tags]);

  return (
    <div style={{
      position: 'relative',
      width: `${size * 70}px`,
      height: `${size * 70}px`,
    }}
    >
      {
        tags.map((arr, y) => arr.map((tag, x) => (
          <TagNode
            x={x}
            y={y}
            key={v4()}
            handleTagClick={handleTagPositionChange}
          >
            {tag || ''}
          </TagNode>
        )))
      }
    </div>
  );
};

export default BarleyBreakBoard;
