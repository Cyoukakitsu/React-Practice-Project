import { useState } from "react";
import QueueForm from "./components/QueueForm";
import QueueDisplay from "./components/QueueDisplay";
import type { Customer, Status } from "./types/types";
import "./App.css";

function App() {
  const [queue, setQueue] = useState<Customer[]>([]);

  const addToQueue = (customer: Omit<Customer, "id" | "status">) => {
    //React 更新数组的标准写法 例如：setQueue([...queue, newItem]);
    //...queue → 把旧数据原样复制  newItem → 往数组末尾加一个新元素
    setQueue([...queue, { ...customer, id: Date.now(), status: "waiting" }]);
  };

  const updateStatus = (id: number, newStatus: Status) => {
    setQueue(
      queue.map((customer) =>
        customer.id === id ? { ...customer, status: newStatus } : customer
      )
    );
  };

  const removeFromQueue = (id: number) => {
    setQueue(queue.filter((customer) => customer.id !== id));
  };

  return (
    <div>
      <header>
        <h1>Queue Management Application</h1>
        <p>Manage your customers efficiently</p>
      </header>
      <main>
        <QueueForm onAdd={addToQueue} />
        <QueueDisplay
          queue={queue}
          onUpdateStatus={updateStatus}
          onRemove={removeFromQueue}
        />
      </main>
    </div>
  );
}
export default App;
