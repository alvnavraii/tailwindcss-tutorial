import Header from "./components/Header";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.body.classList.add("bg-Almost-White");
  }, []);
  return (
    <>
      <div className="font-Epilogue">
        <Header />
      </div>
    </>
  );
}

export default App;
