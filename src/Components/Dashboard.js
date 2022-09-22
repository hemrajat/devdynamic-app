import React, { useLayoutEffect, useRef, useState } from 'react'
import { makeStyles } from '@material-ui/core'
import CustomButton from './CustomButton'
import PlotGraph from './PlotGraph'
const useStyles = makeStyles({
  dashboard: {
    width: '100%',
    height: '100vh',
    overflow: 'scroll',
    padding: '0px 50px',
    backgroundColor: '#d8d8d9',
    paddingTop: '100px',
    boxSizing: 'border-box',
  },
  graphTypeOption: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '30px',
  },
  graphRow1: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  graphRow2: {
    marginTop: '30px',
  },
  graph1: {
    borderRadius: '5px',
    width: '45%',
    height: '200px',
    overflow: 'hidden',
    boxShadow: '4px 4px 18px 0px black',
  },
  graph2: {
    borderRadius: '5px',
    width: '45%',
    height: '200px',
    overflow: 'hidden',
    boxShadow: '4px 4px 18px 0px black',
  },
  graph3: {
    borderRadius: '5px',
    height: '300px',
    width: '100%',
    overflow: 'hidden',
    boxShadow: '4px 4px 18px 0px black',
  },
})

const generateRandomData = (numOfGraphs = 1, graphType, showDot) => {
  const plotData = []
  const graphMode = graphType && showDot ? 'lines+markers' : 'lines'
  for (let i = 1; i <= numOfGraphs; i++) {
    const x = []
    const y = []
    for (let j = 1; j <= 31; j++) {
      const yval = Math.random() * 50
      const xval = new Date(2022, 8, j).toISOString()
      x.push(xval)
      y.push(yval)
    }
    const trace = {
      x,
      y,
      type: graphType,
      mode: graphMode,
    }
    plotData.push(trace)
  }
  return plotData
}
let plotDataG1 = generateRandomData(1, 'lines', true)
let plotDataG2 = generateRandomData(2, 'lines', true)
let plotDataG3 = generateRandomData(1, 'lines', false)

const changeType = (graphData, type, mode) => {
  graphData.forEach((graph) => {
    graph.type = type
    graph.mode = mode
  })
}

const Dashboard = () => {
  const classes = useStyles()
  const [graphType, setGraphType] = useState('lines')
  if (graphType === 'bar') {
    changeType(plotDataG1, 'bar', 'bar')
    changeType(plotDataG2, 'bar', 'bar')
    changeType(plotDataG3, 'bar', 'bar')
  }
  if (graphType === 'lines') {
    changeType(plotDataG1, 'lines', 'lines+markers')
    changeType(plotDataG2, 'lines', 'lines+markers')
    changeType(plotDataG3, 'lines', 'lines')
  }
  const getColor = (option, type) => {
    return option === type ? '#bdeaf1' : ''
  }
  return (
    <div className={classes.dashboard}>
      <div className={classes.graphTypeOption}>
        <CustomButton
          text={'Line'}
          onClickCB={() => setGraphType('lines')}
          bgColor={getColor('lines', graphType)}
        />
        <CustomButton
          text={'Bar'}
          onClickCB={() => setGraphType('bar')}
          bgColor={getColor('bar', graphType)}
        />
      </div>
      <div className={classes.graphRow1}>
        <div className={classes.graph1}>
          <PlotGraph data={plotDataG1} xaxixVibile={false} />
        </div>
        <div className={classes.graph2}>
          <PlotGraph data={plotDataG2} />
        </div>
      </div>
      <div className={classes.graphRow2}>
        <div className={classes.graph3}>
          <PlotGraph data={plotDataG3} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
