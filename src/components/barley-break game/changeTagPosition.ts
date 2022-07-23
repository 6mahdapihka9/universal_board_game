// eslint-disable-next-line max-len
export default function changeTagPosition(tags: [][], x: number, y: number, xNew: number, yNew: number) {
  const newTags = [...tags];
  const temp = newTags[y][x];
  newTags[y][x] = newTags[yNew][xNew];
  newTags[yNew][xNew] = temp;
  return newTags;
}
