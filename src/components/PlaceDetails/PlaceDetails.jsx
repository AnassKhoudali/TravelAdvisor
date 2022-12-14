import React from 'react';
import {
  Box,
  Typography,
  Button,
  CardMedia,
  Card,
  CardContent,
  CardActions,
  Chip,
} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';
import useStyles from './styles';
import { CallMissedSharp } from '@material-ui/icons';
export default function PlaceDetails({ place, selected, refProp, type }) {
  const classes = useStyles();

  if (selected) {
    refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={
          place.photo
            ? place.photo.images.large.url
            : type === 'restaurants'
            ? 'https://portal.restomontreal.ca/le-marlow/logo/bigimage.jpg?v=4023'
            : type === 'attractions'
            ? 'https://allytravels.com/wp-content/uploads/2020/11/Ottawa-800x618.jpg'
            : 'https://s7d2.scene7.com/is/image/ritzcarlton/50556589-outside?$XlargeViewport100pct$'
        }
        title={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {place.name}
        </Typography>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Price</Typography>
          <Typography gutterBOttom variant="subtitle1">
            {place.price_level}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Rating value={Number(place.rating)} readOnly />
          <Typography gutterBOttom variant="subtitle1">
            out of {place.num_reviews} reviews
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Raking</Typography>
          <Typography gutterBOttom variant="subtitle1">
            {place.ranking}
          </Typography>
        </Box>
        {place?.awards?.map((award) => (
          <Box
            my={1}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <img src={award.images.small} alt={award.display_name} />
            <Typography variant="subtitle2" color="textSecondary">
              {award.display_name}
            </Typography>
          </Box>
        ))}
        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} className={classes.chip} />
        ))}
        {place?.address && (
          <Typography
            gutterBottom
            variant="subtitle2"
            color="textSecondary"
            className={classes.subtitle}
          >
            <LocationOnIcon />
            {place.address}
          </Typography>
        )}
        {place?.phone && (
          <Typography
            gutterBottom
            variant="subtitle2"
            color="textSecondary"
            className={classes.subtitle}
          >
            <PhoneIcon />
            {place.phone}
          </Typography>
        )}
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => window.open(place.web_url, '_blank')}
          >
            Trip Advisor
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() => window.open(place.website, '_blank')}
          >
            Website
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
