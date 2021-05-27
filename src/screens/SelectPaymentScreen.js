import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { setPaymentType } from '../actions';
import Logo from '../components/Logo';
import { Store } from '../Store';
import { useStyles } from '../styles';

export default function SelectPaymentScreen(props) {
    
    const {dispatch}= useContext (Store);
    const styles = useStyles();

    const selectHandler=(paymentType) => {
        setPaymentType(dispatch, paymentType);
        if (paymentType ==='Pay here') {
            props.history.push('/payment');}

            else{
                props.history.push('/complete');}
            
        
    };

    return (
      <Box className={[styles.root, styles.purple]}>
         <Box className={[styles.main, styles.center]}>
         <Logo large></Logo>
         <Typography
         className={styles.center}
         gutterBottom
         variant="h3"
         component="h3"
         >
             Select payment method
         </Typography>
      
         <Box className={styles.cards}>
         <Card className={[styles.card, styles.space]}>
         <CardActionArea onClick={() => selectHandler('Pay here')}>
            <CardMedia
            component="img"
            alt="Pay here"
            image="/images/payhere.png"
            className={styles.media}
            />  
            <CardContent>
                <Typography
                gutterBottom
                variant="h6"
                color="textPrimary"
                component="p"
                >
                    Pay here
                </Typography>
            </CardContent>
         </CardActionArea>    
        </Card>
        <Card className={[styles.card, styles.space]}>
         <CardActionArea onClick={() => selectHandler('At counter')}>
            <CardMedia
            component="img"
            alt="At counter"
            image="/images/atcounter.png"
            className={styles.media}
            />  
            <CardContent>
                <Typography
                gutterBottom
                variant="h6"
                color="textPrimary"
                component="p"
                >
                    At counter
                </Typography>
            </CardContent>
         </CardActionArea>    
        </Card>
         </Box>
         </Box>
         </Box>
        
  
        
    )       
       
    
}
