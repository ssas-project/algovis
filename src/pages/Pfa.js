import React from 'react'
import { Grid } from '@material-ui/core'
import Side from '../components/pfa/Side'
import PathfindingVisualizer from '../components/pfa/pathfindingVisualizer/pathfindingVisualizer'
import useStyles from '../components/styles'

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
