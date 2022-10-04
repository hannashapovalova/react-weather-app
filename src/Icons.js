import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';

export default function Icons(props) {
  const defaults = {
    icon: props.icon,
    color: props.color,
    size: props.size,
    animate: true
  };
  return (
    <div>
      <ReactAnimatedWeather
        icon={defaults.icon}
        color={defaults.color}
        size={defaults.size}
        animate={defaults.animate}
      />
    </div>
  );
}

