import { CloseOutlined } from "@ant-design/icons";
import propTypes from "prop-types";
import styles from "./toast.module.css";
// import { useEffect, useState } from "react";
ToastComponent.propTypes = {
  showToast: propTypes.bool,
  onClose: propTypes.func,
  toastContent: propTypes.object,
  position: propTypes.string,
};

export default function ToastComponent({
  showToast = false,
  position,
  onClose,
  toastContent,
}) {
  return (
    <div
      className={`${styles.toast} ${styles[position]} ${
        showToast ? styles["show" + position] : styles["hide" + position]
      } p-2 rounded-xl shadow`}
    >
      <div className={`flex ${styles.myclass}`}>
        <div>{toastContent?.summary}</div>
        <CloseOutlined onClick={onClose} />
      </div>
    </div>
  );
}

// function getPositionClass(position) {
//   switch (position) {
//     case "top-left":
//       return styles.topLeft;
//     case "top-right":
//       return "right-8 top-8";
//     case "bottom-right":
//       return "right-8 bottom-8";
//     case "bottom-left":
//       return "left-8 bottom-8";
//     default:
//       return "Invalid Position";
//   }
// }
