import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';

export default function ConstantIcons(props) {
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
        color="white"
        size={defaults.size}
        animate={true}
      />
    </div>
  );
}