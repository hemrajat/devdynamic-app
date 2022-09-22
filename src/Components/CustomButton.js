import React from 'react'
import { makeStyles } from '@material-ui/core'
const useStyles = makeStyles({
  customButton: {
    padding: '5px 15px',
    marginRight: '20px',
    border: 'none',
    borderRadius: '5px',
    '&:hover': {
      cursor: 'pointer',
    },
  },
})

const CustomButton = ({ text, onClickCB, bgColor }) => {
  const classes = useStyles()
  return (
    <div>
      <button
        className={classes.customButton}
        onClick={onClickCB}
        style={{ backgroundColor: bgColor }}
      >
        {text}
      </button>
    </div>
  )
}

export default CustomButton
