import { useQuery } from "@apollo/client";
import React from "react";
import { GET_AUTHORS_INFO } from "../../graphQl/queris";
import { Avatar, Divider, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Loader from "../shared/Loader";

function Authors() {
  const { loading, data, error } = useQuery(GET_AUTHORS_INFO);

  if (loading) return <Loader/>;
  if (error) console.log(error);
  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0,0,0,0.2) 0px 6px 15px",
        borderRadius: 4,
      }}
    >
      {data.authors.map((author, index) => (
        <React.Fragment  key={author.id}>
          <Grid
            item
            xs={12}
           
            sx={{
              padding: 2,
            }}
         
          >
            <Link
               to={`/authors/${author.slug}` } 
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <Avatar src={author.avatar.url}></Avatar>
              <Typography
                component="p"
                variant="p"
                color="text.secondary"
                mx={2}
              >
                {author.name}
              </Typography>
            </Link>
          </Grid>
          {/* baraye inke akharin item ziresh khat nadashte bashe: */}
          {index !== data.authors.length - 1 && (
            <Grid item xs={12}>
              <Divider variant="middle" />
            </Grid>
          )}
        </React.Fragment>
      ))}
    </Grid>
  );
}

export default Authors;
