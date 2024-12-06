import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./OrderDetails.css";
import Footer from "../Footer/Footer";

const OrderDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const order = location.state;

  const updateStatus = (status) => {
    console.log(`Order ${order.order_id} status updated to ${status}`);
    // Here you can add API calls to update the order status in the backend
  };

  const cancelOrder = () => {
    console.log(`Order ${order.order_id} canceled`);
    // Add API call to cancel the order
    navigate("/allorders");
  };

  return (
    <>
      
      <div className="container">
        <div className="order-details">
          <h1>Order Details</h1>
          <p>
            <strong>Order ID:</strong> {order.order_id}
          </p>
          <p>
            <strong>Customer Name:</strong> {order.customerName}
          </p>
          <p>
            <strong>Order Date:</strong> {order.orderdate}
          </p>
          <p>
            <strong>Total Amount:</strong> {order.total}
          </p>
          <p>
            <strong>Items Ordered:</strong> {order.items}
          </p>
          <p>
            <strong>Payment Method:</strong> {order.payment}
          </p>

          <div className="order-actions">
            <button onClick={() => updateStatus("In Progress")}>
              Mark as In Progress
            </button>
            <button onClick={() => updateStatus("Shipped")}>
              Mark as Shipped
            </button>
            <button onClick={() => updateStatus("Delivered")}>
              Mark as Delivered
            </button>
            <button onClick={cancelOrder} className="cancel-button">
              Cancel Order
            </button>
          </div>
        </div>
      </div>

<Footer/>
    </>
  );
};

export default OrderDetails;
