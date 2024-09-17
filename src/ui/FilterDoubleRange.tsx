import React, { useCallback, useEffect, useState, useRef } from "react";
import styled from "styled-components";

interface FilterDoubleRangeProps {
    min: number;
    max: number;
    onChange: (values: { min: number, max: number }) => void;
}

const SliderContainer = styled.div`
  position: relative;
  width: 200px;
  margin-top: 2rem;
`;

const SliderTrack = styled.div`
  position: absolute;
  border-radius: 3px;
  height: 5px;
  background-color: #ced4da;
  width: 100%;
  z-index: 1;
`;

const SliderRange = styled.div`
  position: absolute;
  border-radius: 3px;
  height: 5px;
  background-color: #9fe5e1;
  z-index: 2;
  cursor: pointer;
`;

const SliderValue = styled.div<{ position: string }>`
  position: absolute;
  color: #dee2e6;
  font-size: 12px;
  margin-top: 20px;

  ${({ position }) => (position === "left" ? "left: 6px;" : "right: -4px;")}
`;

const Thumb = styled.input`
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
  pointer-events: none;
  position: absolute;
  height: 0;
  width: 200px;
  outline: none;
`;

const LeftThumb = styled(Thumb)`
  z-index: 3;
`;

const RightThumb = styled(Thumb)`
  z-index: 4;
`;

const FilterDoubleRange: React.FC<FilterDoubleRangeProps> = ({ min, max, onChange }) => {
    const [minVal, setMinVal] = useState(min);
    const [maxVal, setMaxVal] = useState(max);
    const minValRef = useRef(min);
    const maxValRef = useRef(max);
    const range = useRef<HTMLDivElement>(null);

    const getPercent = useCallback(
        (value: number) => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    );

    useEffect(() => {
        const minPercent = getPercent(minVal);
        const maxPercent = getPercent(maxValRef.current);

        if (range.current) {
            range.current.style.left = `${minPercent}%`;
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [minVal, getPercent]);

    useEffect(() => {
        const minPercent = getPercent(minValRef.current);
        const maxPercent = getPercent(maxVal);

        if (range.current) {
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [maxVal, getPercent]);

    useEffect(() => {
        onChange({ min: minVal, max: maxVal });
    }, [minVal, maxVal, onChange]);

    return (
        <SliderContainer>
            <LeftThumb
                type="range"
                min={min}
                max={max}
                value={minVal}
                onChange={(event) => {
                    const value = Math.min(Number(event.target.value), maxVal - 1);
                    setMinVal(value);
                    minValRef.current = value;
                }}
                className="thumb thumb--left"
                style={{ zIndex: minVal > max - 100 ? 5 : undefined }}
            />
            <RightThumb
                type="range"
                min={min}
                max={max}
                value={maxVal}
                onChange={(event) => {
                    const value = Math.max(Number(event.target.value), minVal + 1);
                    setMaxVal(value);
                    maxValRef.current = value;
                }}
                className="thumb thumb--right"
            />

            <SliderTrack />
            <SliderRange ref={range} />
            <SliderValue position="left">{minVal}</SliderValue>
            <SliderValue position="right">{maxVal}</SliderValue>
        </SliderContainer>
    );
};

export default FilterDoubleRange;
