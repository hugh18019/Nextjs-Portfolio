import { useMemo, useState, useEffect } from 'react';
import { useSpringValue } from '@react-spring/three';
import { animated } from '@react-spring/three';
import { useSpring, useSprings } from '@react-spring/three';
import { HandRaisedIcon } from '@heroicons/react/24/solid';

const useTypingEffect = (sequence, interKeyStrokes, stop) => {
  const [currentSequencePosition, setCurrentSequencePosition] = useState(0);
  const [currentPosition, setCurrentPosition] = useState(0);
  const curerntSequence = useMemo(
    () => sequence[currentSequencePosition],
    [currentSequencePosition, sequence]
  );

  useEffect(() => {
    if (stop) return;
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
    stop,
  ]);

  return curerntSequence.slice(0, currentPosition);
};

const AnimatedText = ({ sequence, speed }) => {
  const [stop, setStop] = useState(false);
  const text = useTypingEffect(sequence, speed, stop);

  const handleToggleAnimationState = () => setStop(!stop);

  return (
    <span className='flex flex-row justify-center sm:justify-start'>
      <button
        className='w-[50px] h-[50px] hover:bg-black rounded-lg bg-black'
        onClick={handleToggleAnimationState}
      >
        <HandRaisedIcon color='white' />
      </button>
      <h1 className='text-black font-bold text-3xl ml-5 inline-block'>
        {text}
      </h1>
    </span>
  );
};

export default AnimatedText;
