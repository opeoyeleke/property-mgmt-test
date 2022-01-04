import React, { useState } from "react";
import { Modal, Input, message } from "antd";

const TransferProperty = ({
  showModal,
  setShowModal,
  handleSubmit,
  propertyId,
}) => {
  const [emailInput, setEmailInput] = useState("");

  return (
    <Modal
      title="Transfer Property"
      visible={showModal}
      onOk={() => {
        if (emailInput !== "") {
          handleSubmit(emailInput, propertyId);
          setEmailInput("");
          setShowModal(false);
        } else {
          message.warn("Please enter recipient email!");
        }
      }}
      onCancel={() => {
        setShowModal(false);
      }}
      okText="Confirm Transfer"
    >
      <div style={{ marginBottom: "5px" }}>Enter Recipient Email:</div>
      <Input
        placeholder="Email address"
        value={emailInput}
        onChange={(e) => {
          setEmailInput(e.target.value);
        }}
      />
    </Modal>
  );
};

export default TransferProperty;
