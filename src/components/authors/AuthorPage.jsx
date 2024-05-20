import { Avatar, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { GET_AUTHOR_INFO } from "../../graphQl/queris";
import { useQuery } from "@apollo/client";
import sanitizeHtml from "sanitize-html";
import CardEl from "../shared/CardEl";
import Loader from "../shared/Loader";

function AuthorPage() {

  //"slug" yek parameter ast ke be toor e m'amool dar URL taeen mishavad
  // va meghdar an be `AuthorPage` ersal mishavad.
  //In meghdar baray'e etela'at-i mesl-e shenase ya nam estefade mishavad.
  // Baray-e mesele, dar URL mishe ke `AuthorPage` bayad etela'at-e yek shakhs ba nam "john-doe" ra namayesh dahad
  // Dar in surat, "john-doe" beonvan `slug` estefade mishavad ta in komponent betavanad etela'at-e marbut be in shakhs ra az server daryaft va namayesh dahad.
  const { slug } = useParams();
  const { loading, data, error } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug: slug },
  });
  console.log(data);
  if (loading) return <Loader />;
  if (error) console.log(error);

  return (
    <Container maxWidth="lg">
      <Grid container mt={10}>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            src={data.author.avatar.url}
            sx={{ width: "250px", height: "250px" }}
          ></Avatar>
          <Typography component="h3" variant="h5" fontWeight="700" mt={3}>
            {data.author.name}
          </Typography>
          <Typography component="p" variant="h5" color="text.secondary" mt={1}>
            {data.author.field}
          </Typography>
        </Grid>
        <Grid item xs={12} mt={5}>
          <div
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(data.author.description.html),
            }}
          ></div>
        </Grid>
        <Grid item xs={12} mt={6}>
          <Typography component="h3" variant="h5" fontWeight="700">
            مقالات {data.author.name}
          </Typography>
          <Grid container spacing={2} mt={2}>
            {data.author.posts.map((post) => (
              <Grid item xs={12} sm={6} md={4} key={post.id}>
                <CardEl
                  title={post.title}
                  slug={post.slug}
                  coverPhoto={post.coverPhoto}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AuthorPage;
