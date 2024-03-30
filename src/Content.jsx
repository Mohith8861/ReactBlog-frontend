import { useEffect, useRef, useState } from "react";
import Article from "./Article";
import Headings from "./components/Headings";

export default function Content() {
  const B = useRef([]);
  let [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function func() {
      setIsLoading(true);
      const res = await fetch(`http://127.0.0.1:5000/blog`);
      const D = await res.json();

      B.current = [...D.data];
      console.log(B.current);
      setIsLoading(false);
    }
    func();
  }, []);
  return (
    <div>
      {isLoading ? (
        <div style={{ fontSize: "5rem" }}>Loading......</div>
      ) : (
        <div className="content">
          <Headings S={B.current} />
          <Article S={B.current} />
        </div>
      )}
    </div>
  );
}
