import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { withStyles } from '@mui/styles';

const styles ={
  root: {
    width: '100%',
    marginTop: 'theme.spacing.unit *3',
    overflowX: 'auto'
  },
  table: {
    minWidth: '1080px'
  },
};

const customers = [
  {
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': 'Hong Gil Dong',
  'birthday': '19961222',
  'gender': 'male',
  'job': 'student'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': 'Lee Do',
  'birthday': '19910515',
  'gender': 'male',
  'job': 'teacher'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': 'Lee Sun Sin',
  'birthday': '19931020',
  'gender': 'male',
  'job': 'programer'
},
];

class App extends Component {
  render(){
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Profile</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Birthday</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Job</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map(c => { return( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />)})}
          </TableBody>
        </Table>
      </Paper>
    )
  }
}

export default withStyles(styles)(App);
