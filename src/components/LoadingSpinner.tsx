const LoadingSpinner = () => {
  return (
    <div className="my-4 flex items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-t-4 border-blue-500 border-opacity-75"></div>
    </div>
  );
};

export default LoadingSpinner;
