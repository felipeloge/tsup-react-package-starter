import React from 'react';

export type HelloWorldProps = {
  text?: String;
};

export function HelloWorld(props: HelloWorldProps) {
  const [count, setCount] = React.useState(0);
  return (
    <h1>Hello World</h1>
  );
}
