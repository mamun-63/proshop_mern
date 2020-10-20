import React from 'react'
import { Alert } from 'react-bootstrap'

// variant is color of the alert , children is the text to be displayed
const Message = ({ variant, children }) => {
  return <Alert variant={variant}>{children}</Alert>
}

Message.defaultProps = {
  variant: 'info', // info means blue color
}

export default Message
