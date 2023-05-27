import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Spinner from "react-spinkit";

const Message = styled.small`
  text-align: center;
  display: block;
`;

interface LoadingSpinnerProps {
  message?: string;
  testId?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  message = "Loading...",
  testId = "loading",
}) => {
  const [timer, setTimer] = useState(0);
  let intervalId: NodeJS.Timeout;

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    intervalId = setInterval(updateTimer, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const updateTimer = () => {
    setTimer((prevTimer) => (prevTimer === 15 ? 15 : prevTimer + 1));
    if (timer === 15) clearInterval(intervalId);
  };

  if (timer > 2 && timer <= 10) message = "Still Loading...";
  if (timer > 5 && timer < 15) message = "This is taking a while...";
  if (timer >= 15)
    message = "Oops! Something may have gone wrong. Please reload this page.";

  const spinnerStyles = { margin: "auto" };

  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20%" }}
        data-test={testId}
      >
        <div>
          <Spinner name="line-scale" fadeIn="none" style={spinnerStyles} />
        </div>
      </div>
      <Message>{message}</Message>
    </>
  );
};

export default LoadingSpinner;
