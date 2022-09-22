import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
const useStyles = makeStyles({
  name: {
    height: '50px',
    fontSize: '22px',
    textShadow: '0px 3px 2px #dfdfdf',
  },
  sidebar: {
    width: '200px',
    paddingLeft: '50px',
    boxSizing: 'border-box',
  },
  sidebarOptions: {
    height: '90vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    '& div': {
      color: 'gray',
      marginBottom: '10px',
      cursor: 'pointer',
    },
  },
  option: {
    color: 'gray',
    marginBottom: '10px',
  },
})
const Sidebar = () => {
  const OVERVIEW = 'Overview'
  const METRICS = 'Metrics'
  const PROJECTS = 'Projects'
  const ALERTS = 'Alerts'
  const classes = useStyles()
  const [option, setOption] = useState(OVERVIEW)

  return (
    <div className={classes.sidebar}>
      <div className={classes.name}>Project Name</div>
      <div className={classes.sidebarOptions}>
        <div>
          <div style={{ color: option === OVERVIEW ? 'black' : '' }}>
            {OVERVIEW}
          </div>
          <div>{METRICS}</div>
          <div>{PROJECTS}</div>
          <div>{ALERTS}</div>
        </div>
        <div>Logout</div>
      </div>
    </div>
  )
}

export default Sidebar
