/* eslint-disable react/destructuring-assignment */
import Link from 'next/link';
import React from 'react';

function Button(props) {
  return <Link href={props.link}>{props.children}</Link>;
}

export default Button;
