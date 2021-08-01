import React from 'react'
import useStyles from '../components/styles'

const Sort = () => {
  const classes = useStyles()
  return (
    <div className={classes.home}>
      <h2>AlgoVis: Algorithms visualized using React and P5.js</h2>
      <hr />
      <br />
      <div>This is a project done by BCT-074 group SSAS, students of Purwanchal Campus</div>
      <br />
      <h4>Group Members</h4>
      <ul>
        <li>Abdullah Waqar</li>
        <li>Sandesh Chudal</li>
        <li>Sarthak Parajuli</li>
        <li>Srijan Chaudhary</li>
      </ul>
      <br />
      <h4>
        View the source code
        <a href='https://github.com/ssas-project/algovis' rel='noreferrer' target='_blank'>
          here
        </a>
      </h4>
      <br />

      <h2>Contents</h2>
      <div className={classes.cardC}>
        <div className={classes.card}>
          <a href='/sorti' className={classes.a}>
            Sort
          </a>
        </div>
        <div className={classes.card}>
          <a href='/compare' className={classes.a}>
            Compare
          </a>
        </div>
        <div className={classes.card}>
          <a href='/lex' className={classes.a}>
            TSP
          </a>
        </div>
        <div className={classes.card}>
          <a href='/pfa' className={classes.a}>
            Graph Traversal
          </a>
        </div>
      </div>
    </div>
  )
}

export default Sort
