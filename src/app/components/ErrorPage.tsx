import React from "react";

interface Props {
  errorCode: number;
}

function ErrorPage({ errorCode }: Props) {

  return (
    <div>
      {errorCode === 404 ? (
        <h1 className="text-center">404 Not Found</h1>
      ) : (
        <h1 className="text-center">500 Internal Server Error</h1>
      )}
      <p className="text-center">Sorry, an error has occurred.</p>
    </div>
  );
}

export default ErrorPage;
