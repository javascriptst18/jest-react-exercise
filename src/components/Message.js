import React from 'react';
import PropTypes from 'prop-types';

function Message(props){
  if (props.message.type === 'ERROR') {
    return (
      <p className="bg-red-lightest border border-red-light text-red-dark px-4 py-3 mb-4 rounded relative error">
        {props.message.body}
      </p>
    );
  }
  if (props.message.type === 'SUCCESS') {
    return (
      <p className="bg-green-lightest border border-green-light text-green-dark px-4 py-3 mb-4 rounded relative success">
        {props.message.body}
      </p>
    );
  }
  return (
    <p className="bg-blue-lightest border border-blue-light text-blue-dark px-4 py-3 mb-4 rounded relative success">
      Please login
    </p>
  );
};

Message.propTypes = {
  message: PropTypes.shape({
    type: PropTypes.string,
    body: PropTypes.string
  }).isRequired
};

export default Message;
