import React from 'react'
import { Grid } from '@material-ui/core'
import Side from '../components/tspLex/Side'
import PathfindingVisualizer from '../components/pfa/pathfindingVisualizer/pathfindingVisualizer'
import useStyles from '../components/styles'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/js/dist/dropdown'

const Pfa = () => {
  const classes = useStyles()
  return (
    <Grid container className={classes.main} alignItems='stretch'>
      <Grid item xs={12} md={3}>
        <Side />
      </Grid>

      <Grid item xs={12} md={9}>
        <PathfindingVisualizer />
      </Grid>
    </Grid>
  )
}

export default Pfa
