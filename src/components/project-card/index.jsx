import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

const ProjectCard = (props) => {
    const {title, image, description, url, ...other} = props;

    return (
        <Card sx={{display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: 'primary.main'}}>
            <CardMedia
                component="img"
                height="140"
                image={image}
                alt="temp"
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {title}
                </Typography>
                <Typography variant="body3">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Link target="_blank" rel="noopener noreferrer" href={url}>
                    <Button size="small">
                        <Typography variant="body3">View Project</Typography>
                    </Button>
                </Link>
            </CardActions>
        </Card>
    );
}

export default ProjectCard;