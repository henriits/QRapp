import QRGenerator from "./components/QRGenerator";

function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          width: "100vw",
          textAlign: "center",
        }}
      >
        <QRGenerator />
      </div>
    </>
  );
}

export default App;
