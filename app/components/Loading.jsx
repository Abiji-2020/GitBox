// components/Loading.js
const Loading = () => {
    return (
      <div className="loading-screen">
        <p>Loading...</p>
        <style jsx>{`
          .loading-screen {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #fff;
          }
        `}</style>
      </div>
    );
  };
  
  export default Loading;
  