import React, { Component } from "react";
import { MenuItem, FormControl, InputLabel, Select, Button } from "@material-ui/core";
import "./navbar.css";
// import useStyles from '../../styles'

// const classes = useStyles()

class NavBar extends Component {

  state = {
    algorithm: "Visualize Algorithm",
    maze: "Generate Maze",
    pathState: false,
    mazeState: false,
    speedState: "Speed",
  };

  selectAlgorithm(selection) {
    if (this.props.visualizingAlgorithm) {
      return;
    }
    if (
      selection === this.state.algorithm ||
      this.state.algorithm === "Visualize Algorithm" ||
      this.state.algorithm === "Select an Algorithm!"
    ) {
      this.setState({ algorithm: selection });
    } else if (this.state.pathState) {
      this.clearPath();
      this.setState({ algorithm: selection });
    } else {
      this.setState({ algorithm: selection });
    }
  }

  selectMaze(selection) {
    if (this.props.visualizingAlgorithm || this.props.generatingMaze) {
      return;
    }
    if (
      selection === this.state.maze ||
      this.state.maze === "Generate Maze" ||
      this.state.maze === "Select a Maze!"
    ) {
      this.setState({ maze: selection });
    } else if (!this.state.mazeState) {
      this.setState({ maze: selection });
    } else {
      this.clearGrid();
      this.setState({ maze: selection });
    }
  }

  visualizeAlgorithm() {
    if (this.props.visualizingAlgorithm || this.props.generatingMaze) {
      return;
    }
    if (this.state.pathState) {
      this.clearTemp();
      return;
    }
    if (
      this.state.algorithm === "Visualize Algorithm" ||
      this.state.algorithm === "Select an Algorithm!"
    ) {
      this.setState({ algorithm: "Select an Algorithm!" });
    } else {
      this.setState({ pathState: true });
      if (this.state.algorithm === "Visualize Dijkstra")
        this.props.visualizeDijkstra();
      else if (this.state.algorithm === "Visualize A*")
        this.props.visualizeAStar();
      else if (this.state.algorithm === "Visualize Greedy BFS")
        this.props.visualizeGreedyBFS();
      else if (this.state.algorithm === "Visualize Bidirectional Greedy")
        this.props.visualizeBidirectionalGreedySearch();
      else if (this.state.algorithm === "Visualize Breadth First Search")
        this.props.visualizeBFS();
      else if (this.state.algorithm === "Visualize Depth First Search")
        this.props.visualizeDFS();
    }
  }

  generateMaze() {
    if (this.props.visualizingAlgorithm || this.props.generatingMaze) {
      return;
    }
    if (this.state.mazeState || this.state.pathState) {
      this.clearTemp();
    }
    if (
      this.state.maze === "Generate Maze" ||
      this.state.maze === "Select a Maze!"
    ) {
      this.setState({ mazeState: true });
      if (this.state.maze === "Generate Random Maze")
        this.props.generateRandomMaze();
    }
  }

  clearGrid() {
    if (this.props.visualizingAlgorithm || this.props.generatingMaze) {
      return;
    }
    this.props.clearGrid();
    this.setState({
      algorithm: "Visualize Algorithm",
      maze: "Generate Maze",
      pathState: false,
      mazeState: false,
    });
  }

  clearPath() {
    if (this.props.visualizingAlgorithm || this.props.generatingMaze) {
      return;
    }
    this.props.clearPath();
    this.setState({
      pathState: false,
      mazeState: false,
    });
  }

  clearTemp() {
    if (this.props.visualizingAlgorithm || this.props.generatingMaze) {
      return;
    }
    this.props.clearGrid();
    this.setState({
      pathState: false,
      mazeState: false,
    });
  }

  changeSpeed(speed) {
    if (this.props.visualizingAlgorithm || this.props.generatingMaze) {
      return;
    }
    let value = [10, 10];
    if (speed === "Slow") value = [45, 28];
    else if (speed === "Medium") value = [20, 15];
    else if (speed === "Fast") value = [3, 3];
    this.setState({ speedState: speed });
    this.props.updateSpeed(value[0], value[1]);
  }

  render() {
    return (
      <nav className="nv">
           <FormControl variant='filled' className='slt'>
              <InputLabel id='compType1'>Select path finding Algortihm</InputLabel>
              <Select labelId='compType1' id='compType1' value={this.selection} onChange={(e) => this.selectAlgorithm(e.target.value)}>
                <MenuItem value={"Visualize Dijkstra"}>Dijkstra's Algorithm</MenuItem>
                <MenuItem value={"Visualize A*"}>A* Algorithm</MenuItem>
                <MenuItem value={"Visualize Greedy BFS"}>Greedy Best First Search</MenuItem>
                <MenuItem value={"Visualize Bidirectional Greedy"}> Bidirectional Greedy Search</MenuItem>
                <hr />                
                <MenuItem value={"Visualize Breadth First Search"}>Breadth First Search</MenuItem>
                <MenuItem value={"Visualize Depth First Search"}>Depth First Search</MenuItem>
                <MenuItem value={"Visualize Random Walk"}>Random Walk</MenuItem>
              </Select>
            </FormControl>
              
            <Button variant='contained' className='btnC' onClick={() => this.visualizeAlgorithm()}>
              {this.state.algorithm}
            </Button>

            <Button variant='contained' className='btnC' onClick={() => this.props.generateRandomMaze()}>
              Random Maze
            </Button>
          
            <Button variant='contained' className='btnC' onClick={() => this.clearGrid()}>
              Clear Grid
            </Button>

            <Button variant='contained' id='dropdownMenu1' className='btnC' color='primary'>
              {this.state.speedState}
            </Button>

            <FormControl variant='filled' className='slt1'>
              <InputLabel id='compType1'>Speed</InputLabel>
                <Select labelId='speed' id='speed' value={this.speed} onChange={(e) => this.changeSpeed(e.target.value)}>
                  <MenuItem value={"Slow"}>Slow</MenuItem>
                  <MenuItem value={"Medium"}>Medium</MenuItem>
                  <MenuItem value={"Fast"}>Fast</MenuItem>
                </Select>
            </FormControl>
      </nav>
    );
  }
}
export default NavBar;
