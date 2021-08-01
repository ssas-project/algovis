import React, { useState, useEffect } from 'react'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Form from './Form'
import useStyles from '../styles'
import { Bubble, Insertion, Selection, Quick, Merge } from './Sorts'

let arr = []

const width = 500
const height = 500
const arrayS = 50
const size = 10
const speed = 10
// const width

const Compare = () => {
  const classes = useStyles()

  const [cmp1, setCmp1] = useState(0)
  const [cmp2, setCmp2] = useState(1)
  const [controller, setController] = useState(false)

  const algos = ['Bubble', 'Insertion', 'Selection', 'Quick', 'Merge']

  const compare = () => setController((state) => !state)

  const gen = () => {
    for (let i = 0; i < arrayS; i++) arr[i] = Math.ceil(Math.random() * 500)
  }

  useEffect(() => {
    gen()
  }, [controller])

  return (
    <>
      <Paper className={classes.paper}>
        <Form
          cmp1={cmp1}
          setCmp1={setCmp1}
          cmp2={cmp2}
          setCmp2={setCmp2}
          algos={algos}
          compare={compare}
          controller={controller}
        />

        <Grid container>
          <Grid item className={classes.s}>
            {controller && (
              <article>
                {cmp1 === 0 ? (
                  <Bubble width={width} height={height} size={size} arr={arr} speed={speed} />
                ) : cmp1 === 1 ? (
                  <Insertion width={width} height={height} size={size} arr={arr} speed={speed} />
                ) : cmp1 === 2 ? (
                  <Selection width={width} height={height} size={size} arr={arr} speed={speed} />
                ) : cmp1 === 3 ? (
                  <Quick width={width} height={height} size={size} arr={arr} speed={speed * 2} />
                ) : (
                  <Merge width={width} height={height} size={size} arr={arr} speed={speed * 2} />
                )}
              </article>
            )}
          </Grid>

          <Grid item className={classes.s}>
            {controller && (
              <article>
                {cmp2 === 0 ? (
                  <Bubble width={width} height={height} size={size} arr={arr} speed={speed} />
                ) : cmp2 === 1 ? (
                  <Insertion width={width} height={height} size={size} arr={arr} speed={speed} />
                ) : cmp2 === 2 ? (
                  <Selection width={width} height={height} size={size} arr={arr} speed={speed} />
                ) : cmp2 === 3 ? (
                  <Quick width={width} height={height} size={size} arr={arr} speed={speed * 2} />
                ) : (
                  <Merge width={width} height={height} size={size} arr={arr} speed={speed * 2} />
                )}
              </article>
            )}
          </Grid>
        </Grid>
      </Paper>
    </>
  )
}

export default Compare
