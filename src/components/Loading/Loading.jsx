

    import './Loading.css';

function Loading() {
  return (
    <div className="loading-screen">
      <div className="loader-card rounded-2xl p-8 flex flex-col items-center justify-center min-h-55">
        <div className="orbital-loader">
          <div className="orbital-ring"></div>
          <div className="orbital-ring"></div>
          <div className="orbital-ring"></div>
          <div className="orbital-center"></div>
        </div>
      </div>
    </div>
  );
}

export default Loading;


