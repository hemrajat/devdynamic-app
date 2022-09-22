import React from 'react'
import Plot from 'react-plotly.js'
import { makeStyles } from '@material-ui/core'
const useStyles = makeStyles({
  plot: {
    width: '100%',
    height: '100%',
    border: 'none',
  },
})
const PlotGraph = ({ data, xaxixVibile = true }) => {
  const classes = useStyles()
  return (
    <Plot
      data={data}
      layout={{
        showlegend: false,
        barmode: 'stack',
        xaxis: {
          showgrid: false,
          fontSize: '5px',
          nticks: 6,
          visible: xaxixVibile,
        },
        yaxis: {
          rangemode: 'nonnegative',
        },
        yaxis: { rangemode: 'nonnegative' },
        margin: {
          l: 50,
          r: 10,
          t: 30,
          b: 60,
        },
        autosize: true,
      }}
      config={{
        responsive: true,
      }}
      useResizeHandler
      className={classes.plot}
    />
  )
}

export default PlotGraph
