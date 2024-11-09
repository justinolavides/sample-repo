import {Box, Typography} from '@mui/material';

const Home = () => {
    return (
        <Box>
            <Box component="header" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100px',
                width: '100vw',
                backgroundColor: 'rgba(0, 0, 0)',
            }}>
                <Typography variant='h4' style={{
                    color: 'rgba(250, 250, 250)',
                    marginLeft: '50px',
                }}>
                    Home.
                </Typography>
            </Box>
            <Box component="main" style={{
            }}>
                
            </Box>
        </Box>
    )
}

export default Home;
