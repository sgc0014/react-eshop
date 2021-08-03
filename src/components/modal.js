import styled from "styled-components";
import { Card } from "./card";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 999999999;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  backdrop-filter: blur(2px);
  transition: 0.3s all;
`;
const Button = styled.button`
  background: var(--accent-color);
  border: none;
  color: #fff;
  font-weight: 600;
  padding: 8px 10px;
  border-radius: 8px;
  margin-top: 50px;
  cursor: pointer;
`;
export default function Modal({ visible, children }) {
  return visible && <ModalOverlay>{children}</ModalOverlay>;
}

export function CheckoutModal({ mFor, onReject }) {
  return (
    <Modal visible={mFor}>
      <Card
        title={mFor.title}
        style={{
          margin: "0 auto",
          width: "100vw",
          maxWidth: "570px",
          boxShadow: "0px 3px 6px rgba(0,0,0,.16)",
          background: "var(--bg-color)",
        }}
      >
        <p>Purchase Complete.</p>
        <Button
          color={"#000"}
          buttonType="primary"
          onClick={onReject}
          width="72px"
        >
          Close
        </Button>
      </Card>
    </Modal>
  );
}
