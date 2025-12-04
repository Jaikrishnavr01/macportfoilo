import useWindowStore from '#store/window';
import React from 'react';

const WindowControls = ({ target }) => {
  const closeWindow = useWindowStore((s) => s.closeWindow);
  const minimizeWindow = useWindowStore((s) => s.minimizeWindow);
  const maximizeWindow = useWindowStore((s) => s.maximizeWindow);

  return (
    <div id="window-controls">
      <div className="close" onClick={() => closeWindow(target)}></div>
      <div className="minimize" onClick={() => minimizeWindow(target)}></div>
      <div className="maximize" onClick={() => maximizeWindow(target)}></div>
    </div>
  );
};

export default WindowControls;
