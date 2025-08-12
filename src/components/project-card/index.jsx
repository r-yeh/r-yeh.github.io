import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const ProjectCard = (props) => {
    const {image, ...other} = props;

    return (
        <Card sx={{display: 'flex', flexDirection: 'column', height: '100%'}}>
            <CardMedia
                component="img"
                height="140"
                image={image}
                alt="temp"
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    Project Name
                </Typography>
                <Typography variant="body3">
                    This is a description of the project.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size='small'>
                    Github
                </Button>
            </CardActions>
        </Card>
    );
}

export default ProjectCard;