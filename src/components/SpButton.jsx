import PropTypes from "prop-types";

function SpButton({ type = "button", className = "", children, ...props }) {
  return (
    <button
      type={type}
      className={`mr-1 rounded bg-blue-800 px-3 py-2 text-center text-white transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e] sm:w-auto ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

SpButton.propTypes = {
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  className: PropTypes.string,
  children: PropTypes.node,
};

// Define default props
SpButton.defaultProps = {
  type: "button",
  className: "",
};

export default SpButton;
