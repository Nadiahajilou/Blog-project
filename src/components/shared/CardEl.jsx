import React from "react";
import { Link } from "react-router-dom";

import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  Divider,
  Button,
} from "@mui/material";

function CardEl({ title, slug, coverPhoto, author }) {
  return (
    <Card
      sx={{
        boxShadow: "rgba(0,0,0,0.2) 0px 6px 15px",
        borderRadius: 4,
      }}
    >
      {author && (
        <CardHeader
          avatar={<Avatar src={author.avatar.url} />}
          title={
            <Typography
              component="p"
              variant="p"
              color="text.secondary"
              sx={{ marginRight: 2, fontWeight: 700 }}
            >
              {author.name}
            </Typography>
          }
        />
      )}
      <CardMedia
        component="img"
        height="194"
        image={coverPhoto.url}
        alt={slug}
      />
      <CardContent>
        <Typography
          component="h3"
          variant="h6"
          color="text.primary"
          sx={{ fontSize: "16px" }}
        >
          {title}
        </Typography>
      </CardContent>
      <Divider variant="middle" sx={{ margin: "15px" }} />
      <CardActions >
        <Link to={`/blogs/${slug}`}>
          <Button variant="outlined" size="medioum" sx={{ width: "100%", borderRadius: 3  }}>
            مطالعه مقاله
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default CardEl;
