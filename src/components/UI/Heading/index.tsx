import React from 'react';

type HeadingProps = {
  content: string;
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

const Heading: React.FC<HeadingProps> = ({ content, type = 'h3' }) => {
  const HeadingTag = type;
  return <HeadingTag>{content}</HeadingTag>;
};

export default Heading;
