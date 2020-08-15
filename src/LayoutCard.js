import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CardMedia, Typography, CardContent, Card, Button, IconButton} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(() => ({
  
  icon: {
    marginRight: "auto", 
    color: 'red'
  },
}));

const LayoutCard = ({item, deleteItem}) => {
  const classes = useStyles();
    return (
        <div>
            <Card >
                <CardMedia style={{height: "150px"}} image={item.image}>
                  <Button onClick={() => deleteItem(item.id)}>
            <IconButton className={classes.icon} aria-label="settings">
                <DeleteIcon />
            </IconButton>
        </Button>
              </CardMedia>
        <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {item.title}
        </Typography>
        <Typography variant="body2" component="p">
          {item.description}
        </Typography>
            
      </CardContent>
    </Card>
        </div>
    )
}

export default LayoutCard
