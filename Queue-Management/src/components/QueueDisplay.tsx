import type { Customer, Status } from "../types/types";

type QueueDisplayProps = {
  queue: Customer[];
  onUpdateStatus: (id: number, newStatus: Status) => void;
  onRemove: (id: number) => void;
};
function QueueDisplay({ queue, onUpdateStatus, onRemove }: QueueDisplayProps) {
  const getStatueColor = (status: Status): string => {
    switch (status) {
      case "waiting":
        return "var(--waiting)";
      case "serving":
        return "var(--success)";
      case "completed":
        return "var(--info)";
      default:
        return "var(--text)";
    }
  };

  return (
    <div className="queue-display">
      <h2>Current queue</h2>
      {queue.length === 0 ? (
        <p className="empty-queue">No cutomer data</p>
      ) : (
        <p className="queue-list">
          {queue.map((customer) => (
            <div className="queue-item" key={customer.id}>
              <div className="customer-info">
                <h3>{customer.name}</h3>
                <p>{customer.service}</p>
                <span
                  className="status"
                  style={{ color: getStatueColor(customer.status) }}
                >
                  {customer.status}
                </span>
              </div>
              <div className="actions">
                {customer.status === "waiting" && (
                  <button
                    className="serve-btn"
                    onClick={() => onUpdateStatus(customer.id, "serving")}
                  >
                    Serve
                  </button>
                )}
                {customer.status === "serving" && (
                  <button
                    className="complete-btn"
                    onClick={() => onUpdateStatus(customer.id, "completed")}
                  >
                    Serve
                  </button>
                )}
                <button
                  className="remove-btn"
                  onClick={() => onRemove(customer.id)}
                >
                  remove
                </button>
              </div>
            </div>
          ))}
        </p>
      )}
    </div>
  );
}
export default QueueDisplay;
