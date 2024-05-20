import { useQuery } from "@apollo/client";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GET_BLOG_INFO } from "../../graphQl/queris";
import Loader from "../shared/Loader";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import sanitizeHtml from "sanitize-html";
import CommentForm from "../comments/CommentForm";
import Comments from "../comments/Comments";

function BlogPage() {
  const { slug } = useParams();
  const { error, loading, data } = useQuery(GET_BLOG_INFO, {
    variables: { slug: slug },
  });
  //baraye inke harja hastim yek safhe be aghab ya jolo bargardim ke inja baraye aghab bargashtan estefade mikonim
  const navigate = useNavigate();

  if (loading) return <Loader />;
  if (error) console.log(error);

  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid
          item
          xs={12}
          mt={9}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography
            component="h2"
            variant="h4"
            color="primary"
            fontWeight={700}
          >
            {data.post.title}
          </Typography>

          <ArrowBackRoundedIcon
            onClick={() => {
              navigate(-1);
            }}
          />
        </Grid>
        <Grid item xs={12} mt={6}>
          <img
            src={data.post.coverPhoto.url}
            alt={data.post.slug}
            height="700px"
            width="90%"
            style={{ borderRadius: "15px" }}
          />
        </Grid>
        <Grid item xs={12} mt={7} display="flex" alignItems="center">
          <Avatar
            src={data.post.author.avatar.url}
            sx={{ width: 80, height: 80, marginLeft: 2 }}
          ></Avatar>
          <div>
            <Typography component="p" variant="h5" fontWeight={700}>
              {data.post.author.name}
            </Typography>
            <Typography component="p" variant="p" color="text.secondary">
              {data.post.author.field}
            </Typography>
          </div>
        </Grid>
        <Grid item>
          <div
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(data.post.content.html),
            }}
          ></div>
        </Grid>
        <Grid item xs={12}>
          <CommentForm slug={slug} />
        </Grid>
        <Grid item xs={12}>
      <Comments slug={slug} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default BlogPage;
