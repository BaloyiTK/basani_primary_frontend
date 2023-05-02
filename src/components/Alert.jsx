import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ message, type, dismiss }) => {
  const backgroundColor = {
    warning: 'bg-yellow-100',
    error: 'bg-red-100',
    success: 'bg-green-100',
  }[type];

  const borderColor = {
    warning: 'border-yellow-500',
    error: 'border-red-500',
    success: 'border-green-500',
  }[type];

  const textColor = {
    warning: 'text-yellow-700',
    error: 'text-red-700',
    success: 'text-green-700',
  }[type];

  return (
    <div
      className={`fixed top-0 right-0 w-full flex items-center ${backgroundColor} border-l-4 ${borderColor} py-2 px-3`}
      role="alert"
    >
      <div className="text-lg">
        <i className="fas fa-exclamation-triangle"></i>
      </div>
      <div className="ml-2 text-sm font-semibold uppercase">{type}</div>
      <div className={`flex-1 ml-5 ${textColor}`}>{message}</div>
      {dismiss && (
        <button
          className={`text-${type}-500 hover:text-${type}-700 focus:outline-none focus:text-${type}-700 ml-3`}
          onClick={dismiss}
        >
          <i className="fas fa-times"></i>
        </button>
      )}
    </div>
  );
};

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['warning', 'error', 'success']).isRequired,
  dismiss: PropTypes.func,
};

export default Alert;
