import React from 'react';

type CountButtonProps = {
  text?: String;
};

export function CountButton(props: CountButtonProps) {
  const [count, setCount] = React.useState(0);
  return (
    <button
      type="button"
      onClick={() => setCount(count + 1)}
    >
      {`${props.text} ${count}`}
    </button>
  );
}
