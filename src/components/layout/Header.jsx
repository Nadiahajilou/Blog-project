import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import BookIcon from "@mui/icons-material/Book";

function Header() {
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography component="h1" variant="h5" fontWeight="500">
            وبلاگ
          </Typography>

          <BookIcon />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
