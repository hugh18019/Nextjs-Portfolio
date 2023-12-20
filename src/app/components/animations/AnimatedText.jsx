import { useMemo, useState, useEffect } from 'react';
import { useSpringValue } from '@react-spring/three';
import { animated } from '@react-spring/three';
import { useSpring, useSprings } from '@react-spring/three';

const useTypingEffect = (sequence, interKeyStrokes) => {
  const [currentSequencePosition, setCurrentSequencePosition] = useState(0);
  const [currentPosition, setCurrentPosition] = useState(0);
  const curerntSequence = useMemo(
    () => sequence[currentSequencePosition],
    [currentSequencePosition, sequence]
  );

  useEffect(() => {
    const next = (position, end) => (position === end ? 0 : position + 1);
    const interval = setInterval(() => {
      setCurrentPosition((currentPosition) =>
        next(currentPosition, curerntSequence.length)
      );
      if (currentPosition === curerntSequence.length) {
        setCurrentSequencePosition(
          next(currentSequencePosition, sequence.length - 1)
        );
      }
    }, interKeyStrokes);

    return () => clearInterval(interval);
  }, [
    curerntSequence.length,
    currentPosition,
    currentSequencePosition,
    interKeyStrokes,
    sequence,
  ]);

  return curerntSequence.slice(0, currentPosition);
};

const AnimatedText = ({ sequence, speed }) => {
  const text = useTypingEffect(sequence, speed);

  return (
    <span>
      <p className='text-black font-bold text-3xl inline-block'>{text}</p>
      {/* <FlashingCursor /> */}
    </span>
  );
};

export default AnimatedText;
