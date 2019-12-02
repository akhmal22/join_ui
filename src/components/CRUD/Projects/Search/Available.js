import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./Searchview.css"

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});



export const Available = ({ projects }) => {
  const classes = useStyles();
  return (
    <div>
        <h3> Available Project </h3>
        <Grid container spacing={3}>
            {projects.map((project) => (
                <Grid item xs={3}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            style={{ height: 0, paddingTop: '56%'}}
                            image={require("./logo192.png")}
                            title={project.name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {project.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {project.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button 
                                size="small" 
                                color="primary" 
                            >
                                Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    </div>
  )
}


