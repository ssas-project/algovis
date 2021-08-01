import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import useStyles from '../styles'

const Side = () => {
  const classes = useStyles()

  return (
    <Paper className={`${classes.paper} ${classes.side}`}>
      <Typography variant='h6' className={classes.title}>
        Pathfinding Algorithm Visualizer
      </Typography>
      <Typography className={classes.title}>
        <b>How To Use ?</b>
      </Typography>
      <Typography>
        <ol>
          <li>Select Algorithm</li>
          <li>Make maze or use random maze generator</li>
          <li>Set Speed</li>
          <li>Visualize Algorithm</li>
        </ol>
      </Typography>
      <hr />
      <Typography>
        <b>Intro: </b>
        Pathfinding algorithms are the algorithms that tend to find the shortest path from starting node to ending node
        , avoiding obstacles and minimizing
      </Typography>
      <Typography>the cost(time, distance, risks, fuel, price, etc).</Typography>
      <Typography>
        Pathfinder algorithms are most often used in navigation. <br />
      </Typography>
      <Typography>
        But its usage is not limited in navigation only. Various algorithms are used in efficient maze solving ,
        obstacle avoidance etc.
      </Typography>
      <hr />
      <Typography>
        Pathfinding or pathing is the plotting, by a computer application, of the shortest route between two points. It
        is a more practical variant on solving mazes. This field of research is based heavily on Dijkstra's algorithm
        for finding the shortest path on a weighted graph.
      </Typography>
      <br />
      <Typography>
        Basic algorithms such as breadth-first and depth-first search address the first problem by exhausting all
        possibilities; starting from the given node, they iterate over all potential paths until they reach the
        destination node. These algorithms run in
        <i>
          <b> O(|V| + |E|)</b>
        </i>
        , or linear time, where V is the number of vertices, and E is the number of edges between vertices.
      </Typography>
      <hr />
      <br />
      <Typography>
        <b>Dijkstra Algorithm</b>
      </Typography>
      <Typography>
        A common example of a graph-based pathfinding algorithm is
        <b> Dijkstra's algorithm</b>. This algorithm begins with a start node and an "open set" of candidate nodes. At
        each step, the node in the open set with the lowest distance from the start is examined. The node is marked
        "closed", and all nodes adjacent to it are added to the open set if they have not already been examined. This
        process repeats until a path to the destination has been found. Since the lowest distance nodes are examined
        first, the first time the destination is found, the path to it will be the shortest path.
      </Typography>
      <hr />
      <Typography>
        <b>A* Algorithm</b>
      </Typography>
      <Typography>
        A* is a variant of Dijkstra's algorithm commonly used in games. A* assigns a weight to each open node equal to
        the weight of the edge to that node plus the approximate distance between that node and the finish. This
        approximate distance is found by the heuristic, and represents a minimum possible distance between that node and
        the end. This allows it to eliminate longer paths once an initial path is found. If there is a path of length x
        between the start and finish, and the minimum distance between a node and the finish is greater than x, that
        node need not be examined.
      </Typography>
      <hr />
      <Typography>
        <b>BFS Algorithm</b>
      </Typography>
      <Typography>
        Breadth first search is a graph traversal algorithm that starts traversing the graph from root node and explores
        all the neighbouring nodes. Then, it selects the nearest node and explore all the unexplored nodes. The
        algorithm follows the same process for each of the nearest node until it finds the goal. The algorithm of
        breadth first search is given below. The algorithm starts with examining the node A and all of its neighbours.
        In the next step, the neighbours of the nearest node of A are explored and process continues in the further
        steps. The algorithm explores all neighbours of all the nodes and ensures that each node is visited exactly once
        and no node is visited twice
      </Typography>
      <hr />
      <Typography className={classes.footer}>&#169;2021 All rights reserved</Typography>
      <br />
    </Paper>
  )
}

export default Side
