import { Box, Card, CardActionArea, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import TouchAppIcon from '@material-ui/icons/TouchApp';
import {useStyles} from '../styles';
import Logo from '../components/Logo';

export default function HomeScreen(props) {
    const styles= useStyles();
    var [date, setDate] = useState(new Date())
    
     useEffect(() => {
       var timer = setInterval(() => setDate(new Date()), 1000)
       return function cleanup() {
           clearInterval(timer)
       }});
    


    return (
        <Card>
            <CardActionArea onClick={()=> props.history.push('/choose')}>

                <Box className={[styles.root, styles.purple]}>
                <Box className={[styles.center]}>
                <Typography gutterBottom  component="h6" variant="h6">
                        Current time: {date.toLocaleTimeString()}
                        </Typography>
                </Box>
               
                    <Box className={[styles.main, styles.center]}>
                    
                        <Typography component="h6" variant="h6">
                        Fast & Easy
                        </Typography>
                        <Typography component="h1" variant="h1">
                            Order <br /> & pay <br /> here
                        </Typography>
                        <TouchAppIcon fontSize="large"></TouchAppIcon>
                        <p></p>
                        

                    </Box>
                    <Box className={[styles.center, styles.orange]}>
                        <Logo large></Logo>
                        <Typography component="h5" variant="h5">
                            Touch to Start
                        </Typography>
                    </Box>
                </Box>
            </CardActionArea>
        </Card>
    )
}

