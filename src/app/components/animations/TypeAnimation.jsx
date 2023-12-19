import { TypeAnimation } from 'react-type-animation';

const TextAnimation = ({ sequence, ...otherProps }) => {
  return <TypeAnimation sequence={sequence} {...otherProps} />;
};

export default TextAnimation;
