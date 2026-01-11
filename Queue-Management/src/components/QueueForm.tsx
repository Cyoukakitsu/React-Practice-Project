import { useState } from "react";
import { FaUserPlus } from "react-icons/fa";
import type { Customer } from "../types/types";

type NewCustomer = {
  name: string;
  service: string;
};

type QueueFormProps = {
  onAdd: (customer: Omit<Customer, "id" | "status">) => void;
};

function QueueForm({ onAdd }: QueueFormProps) {
  const [name, setName] = useState<string>("");
  const [service, setService] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !service.trim()) return;
    onAdd({ name, service });
    setName("");
    setService("");
  };

  return (
    <>
      <form className="queue-form" onSubmit={handleSubmit}>
        <h2>Add to queue</h2>
        <div className="form-group">
          <input
            placeholder="Customer name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
        </div>

        <div className="form-group">
          <select value={service} onChange={(e) => setService(e.target.value)}>
            <option value="">Select service</option>
            <option value="consultation">consultation</option>
            <option value="payment">payment</option>
            <option value="support">support</option>
          </select>
        </div>
        <button type="submit">
          <FaUserPlus />
          Add Customer
        </button>
      </form>
    </>
  );
}
export default QueueForm;
