import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

function App() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleAgree = () => {
    
    console.log("User agreed.");
    setOpen(false);
  };

  return (
    <div>
      {}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Material UI App
          </Typography>
        </Toolbar>
      </AppBar>

      {}
      <Container>
        <Typography variant="h4" component="h1" gutterBottom>
          Добро пожаловать в наше приложение!
        </Typography>
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          OОткрыть диалоговое окно
        </Button>
      </Container>

      {}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Использовать Material UI?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Это простое React приложение с использованием Material UI. Вы можете настроить его по своему усмотрению.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            ОТМЕНА
          </Button>
          <Button onClick={handleAgree} color="primary" autoFocus>
            СОГЛАСЕН
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;
