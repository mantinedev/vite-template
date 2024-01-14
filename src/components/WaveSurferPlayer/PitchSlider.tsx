import { useState } from 'react';
import { Group, Stack, rem } from '@mantine/core';
import { useMove } from '@mantine/hooks';

interface PitchSliderProps {
  changePitch: (y: number) => void;
}

const PitchSlider: React.FC<PitchSliderProps> = ({ changePitch }) => {
  const [value, setValue] = useState(0.5);
  const setter = (y: number) => {
    setValue(y);
    // changePitch(y * 0.25 + 0.875);
    // changePitch(y * 0.5 + 0.75);
    // changePitch(y * 1 + 0.5);
    changePitch(y * 2 + 0);
  };
  const { ref } = useMove(({ y }) => setter(y));

  return (
    <Stack bg="gray" p="sm" style={{ borderRadius: '6px' }}>
      <Group justify="center" p="" onDoubleClick={() => setter(0.5)}>
        <div
          ref={ref}
          style={{
            width: rem(16),
            height: rem(120),
            backgroundColor: 'orange',
            position: 'relative',
            borderRadius: '3px',
            overflow: 'hidden',
          }}
        >
          {/* Thumb */}
          <div
            style={{
              position: 'absolute',
              top: `calc(${value * 99}%`,
              left: 0,
              width: rem(16),
              height: rem(1),
              // transform: `translate(0,-${rem(2)})`,
              backgroundColor: 'white',
            }}
          />
        </div>
      </Group>

      {/* <Text ta="center">{(value * 2).toFixed(1)}</Text> */}
    </Stack>
  );
};

export default PitchSlider;
