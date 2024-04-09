import React, { useEffect, useState } from "react";
import styled from "styled-components";

const CountdownArea = styled.div`
  width: 100%;
  min-width: 250px;
  height: 100%;
  padding: 40px 25px;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  background: radial-gradient(circle, #c8dff2 0%, rgb(224 241 255 / 10%) 100%);
  margin-bottom: 20px;
  border: 6px dotted #fff;

  h1 {
    font-size: 3rem;
    color: var(--basic-enable-color);
  }
  p {
    font-size: 1.75rem;
    font-weight: 700;
    span {
      border-bottom: 1px dashed;
      font-size: 2rem;
      color: var(--custom-blue-color);
    }
  }
`;

/**
 * @title 카운트다운
 * @param targetDate
 */
export const Countdown: React.FC<{ targetDate: Date }> = ({ targetDate }) => {
  const [daysLeft, setDaysLeft] = useState<number>(0);

  useEffect(() => {
    const today = new Date();
    const difference = targetDate.getTime() - today.getTime();
    const days = Math.ceil(difference / (1000 * 60 * 60 * 24));
    setDaysLeft(days);

    const interval = setInterval(() => {
      const today = new Date();
      const difference = targetDate.getTime() - today.getTime();
      const days = Math.ceil(difference / (1000 * 60 * 60 * 24));
      setDaysLeft(days);
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <CountdownArea key={daysLeft}>
      <h1>💍</h1>
      <p>
        D-day <span>{daysLeft}</span>
      </p>
    </CountdownArea>
  );
};
