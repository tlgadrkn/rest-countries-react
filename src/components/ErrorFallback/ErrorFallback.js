import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

export function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role='alert'>
      There was an error:{' '}
      <pre style={{ whiteSpace: 'normal' }}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

export function CountryErrorBoundary(props) {
  return <ErrorBoundary FallbackComponent={ErrorFallback} {...props} />;
}
export default CountryErrorBoundary;
