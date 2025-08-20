import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import GitHubIcon from "@mui/icons-material/GitHub";

// fixed image height? fixed card height so it doesnt resize on larger descriptions? on hover, detailed explanation appears rather than full layout present at the start?

const ProjectCard = (props) => {
    const {title, image, description, tags, url, ...other} = props;

    return (
        <Card sx={{
            display: 'flex',
            flexDirection: 'column',
            height: 'clamp(22rem, 50vh, 32rem)',
            backgroundColor: 'primary.main'
        }}>
            <CardMedia
                component="img"
                image={image}
                alt="temp"
                sx={{
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                    height: "40%",
                    width: "100%",
                    objectFit: "cover",
                }}
            />
            <CardContent sx={{
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                gap: '0.8rem',
                paddingX: '1rem',
                wordBreak: 'break-word',
            }}>
                <Typography variant="h6" component="div">
                    {title}
                </Typography>
                <Box sx={{display: 'flex', flexDirection: 'row', gap: '0.5rem'}}>
                    {tags.map((tag, index) => (
                        <Chip key={index} label={tag} variant="outlined" size="small" color="tertiary"/>
                    ))}
                </Box>
                <Box sx={{height: '65%', overflowY: 'auto'}}>
                    <Typography variant="body3">
                        {description}
                    </Typography>
                </Box>
            </CardContent>
            <CardActions sx={{display: 'flex', flexDirection: 'row', justifyContent: 'end', margin: '0.3rem'}}>
                <Link target="_blank" rel="noopener noreferrer" href={url}>
                    <Button sx={{borderRadius: '25px'}} size="small" variant="contained" color="secondary"
                            startIcon={<GitHubIcon/>}>
                        <Typography variant="body3">View Project</Typography>
                    </Button>
                </Link>
            </CardActions>
        </Card>
    );
}

export default ProjectCard;