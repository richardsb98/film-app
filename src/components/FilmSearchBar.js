import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
// import Button from '@mui/material/Button';
import { useState, useStyles, useEffect } from 'react';


export default function FilmSearchBar() {
  const paperStyle={padding:'50px 20px', width: 800, margin:"50px auto"}
  
  // const [title, setTitle] = useState('')
  // const [length, setLength] = useState('')
  // const [release_year, setRelease_Year] = useState('')
  // const [rating, setRating] = useState('')
  const [films, setFilms] = useState([])
  const [searchFilm, setSearchFilm] = useState('')

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   const film = {title, length, release_year, rating};
  //   console.log(film)

  //   fetch("https://program-1655722851205.azurewebsites.net/Home/addfilm", { 
  //   method:'POST',
  //   header:{ "Content - Type": "application/json" },
  //   body: JSON.stringify(film)
    
  // }).then(() => {
  //   console.log("New Film Saved")
  // })
  // }
  
  useEffect(() => {
    fetch("https://program-1655722851205.azurewebsites.net/Home/allfilms")
    .then(res=>res.json())
    .then((result)=> {
      setFilms(result);
    }
  )
  }, [])

  return (
    <Container>
    {/* <Paper elevation={3} style={paperStyle}>
    <h1 style = {{color: "blue"}}><u> Add Film </u></h1> 
    
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Film Title" variant="outlined" fullWidth 
        value = {title}
        onChange = {(e) => setTitle(e.target.value)}
      />
      <TextField id="outlined-basic" label="Film Length" variant="outlined" fullWidth 
        value = {length}
        onChange = {(e) => setLength(e.target.value)}
      />
      <TextField id="outlined-basic" label="Film Release Year" variant="outlined" fullWidth 
        value = {release_year}
        onChange = {(e) => setRelease_Year(e.target.value)}
      />
      <TextField id="outlined-basic" label="Film Rating" variant="outlined" fullWidth 
        value = {rating}
        onChange = {(e) => setRating(e.target.value)}
      />
    </Box>

    <Button variant="contained" onClick = {handleClick}>Submit</Button>

    </Paper> */}
      <Paper elevation={3} style={paperStyle}>
      <h1> Search For Films </h1>

      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      >
      <TextField id="outlined-basic" label="Film Title" variant="outlined" fullWidth 
        onChange={event => {setSearchFilm(event.target.value)}}
      />
      </Box>

        {films.filter((value) => {
          if (searchFilm === "") {
            return value
          } else if (value.title.toLowerCase().includes(searchFilm.toLowerCase())) {
            return value;
          }
        })
        .map(film => (
          <Paper elevation={6} style={{margin:"10px", padding:"15px", textAlign:"left"}} key={film.film_id}>
          Id: {film.film_id} <br/>
          Title: {film.title}<br/>
          Running Length: {film.length}<br/>
          Release Year: {film.release_year}<br/>
          Age Rating: {film.rating}<br/>
          </Paper>
       ))}


     </Paper>
    </Container>
  );
}
