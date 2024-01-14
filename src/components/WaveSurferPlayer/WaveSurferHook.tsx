import { RefObject, useState, useEffect } from 'react';
import WaveSurfer, { WaveSurferOptions } from 'wavesurfer.js';
import HoverPlugin from 'wavesurfer.js/dist/plugins/hover';
import TimelinePlugin from 'wavesurfer.js/dist/plugins/timeline';
import ZoomPlugin from 'wavesurfer.js/dist/plugins/zoom';

export const useWavesurfer = (
  containerRef: RefObject<HTMLDivElement>,
  options: WaveSurferOptions
): WaveSurfer | null => {
  const [wavesurfer, setWavesurfer] = useState<WaveSurfer | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ws = WaveSurfer.create({
      ...options,
      container: containerRef.current,
    });
    ws.registerPlugin(ZoomPlugin.create({ scale: 0.01 }));
    ws.registerPlugin(
      HoverPlugin.create({
        lineColor: '#ff0000',
        lineWidth: 1,
      })
    );
    ws.registerPlugin(
      TimelinePlugin.create({
        height: 40,
        style: {
          color: 'orange',
          transform: 'translate(-0px,-40px)',
        },
      })
    );

    setWavesurfer(ws);

    return () => {
      ws.destroy();
    };
  }, [options, containerRef]);
  return wavesurfer;
};
