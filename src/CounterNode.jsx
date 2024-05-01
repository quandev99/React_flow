import { useState } from "react";
import {  useStoreApi } from "reactflow";

export default function CounterNode(props) {
    const store = useStoreApi();
  const [count, setCount] = useState(props?.data?.initialCount ?? 0);
  const handleIncrease = (count) => {
    const { nodeInternals } = store?.getState();
    const nodeInternalsArray = Array.from(nodeInternals?.values());
    const seventhElement = nodeInternalsArray[7];
  const updatedInitialCount = seventhElement?.data?.initialCount + 1;

    Array.from(nodeInternals.values()).map((node) => {
      if (seventhElement) {
        node.data = {
          ...node.data,
          initialCount: updatedInitialCount,
        };
      }
    })
  setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button className="nodrag" onClick={() => handleIncrease(count)}>
        Increment
      </button>
    </div>
  );
}
