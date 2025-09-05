import { motion } from "framer-motion"

export default function Loading() {
  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-white"
      style={{ zIndex: 9999 }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        style={{
          width: "40px",
          height: "40px",
          border: "4px solid #dee2e6", // Bootstrap gray-300
          borderTop: "4px solid #0d6efd", // Bootstrap primary blue
          borderRadius: "50%",
        }}
      />
      <span className="ms-3 fs-5 fw-medium">Loading...</span>
    </div>
  )
}
