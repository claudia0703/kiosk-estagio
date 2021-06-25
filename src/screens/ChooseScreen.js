import { Box, Card, CardActionArea, CardContent, CardMedia, Fade, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { setOrderType } from '../actions';
import Logo from '../components/Logo';
import {useStyles} from '../styles';
import { Store } from '../Store';

export default function ChooseScreen(props) {
    const styles= useStyles();
const {dispatch}=useContext(Store);


const chooseHandler=(orderType)=>{
    setOrderType(dispatch, orderType);
    props.history.push('/order');
}

    return (
        <Fade in={true}>
            <Box className={[styles.root, styles.purple]}>
               <Box className={[styles.main, styles.center]}>
            <Logo large></Logo>
            <Typography variant="h3"
               component="h3" 
               className={styles.center} 
               gutterBottom> 
               Where will you be eating today?
               </Typography>
               <Box className={styles.cards}>
            <Card className={[styles.card, styles.space]}>
            <CardActionArea onClick={()=> chooseHandler('Eat In')}>
                <CardMedia
                    component="img"
                    alt="Eat in"
                    image="/images/eatin.png"
                    className={styles.media}
                />
                <CardContent>
                <Typography
                    gutterBottom
                    variant="h4"
                    color="textPrimary"
                    component="p"
                />
                Eat In
                </CardContent>
            </CardActionArea>
            </Card>

            <Card className={[styles.card, styles.space]}>
            <CardActionArea onClick={()=> chooseHandler('Take Out')}>
                <CardMedia
                    component="img"
                    alt="Take Away"
                    image="/images/takeaway.png"
                    className={styles.media}
                />
                <CardContent>
                <Typography
                    gutterBottom
                    variant="h4"
                    color="textPrimary"
                    component="p"
                />
                Take Away
                </CardContent>
            </CardActionArea>
            </Card>
               </Box>
            
               </Box>
            </Box>
        </Fade>
    );
}
