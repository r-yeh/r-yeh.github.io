import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

const ProjectCard = (props) => {
    const {title, image, description, url, ...other} = props;

    return (
        <Card sx={{display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: 'primary.main'}}>
            <CardMedia
                component="img"
                height="140"
                image={image}
                alt="temp"
                sx={{
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                }}
            />
            <CardContent sx={{
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                gap: '0.5rem',
                paddingX: '1rem',
                wordBreak: 'break-word',
            }}>
                <Typography gutterBottom variant="h6" component="div">
                    {title}
                </Typography>
                <Box sx={{height: '65%', overflowY: 'auto'}}>
                    <Typography variant="body3">
                        {description}
                    </Typography>
                </Box>
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