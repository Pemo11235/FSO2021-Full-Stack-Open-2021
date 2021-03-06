import React from 'react'
import PropTypes from 'prop-types'

const Togglable = ({ buttonLabel, children }) => {
  const [visible, setVisible] = React.useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  return (
    <div>
      <div style={hideWhenVisible}>
        <button id='open-create-blog-form' onClick={toggleVisibility}>
          {buttonLabel}
        </button>
      </div>
      <div style={showWhenVisible}>
        {children}
        <button onClick={toggleVisibility}>cancel</button>
      </div>
    </div>
  )
}

Togglable.propTypes = { buttonLabel: PropTypes.string.isRequired }
export default Togglable
