import { Drawer, Box, Typography, IconButton, List, ListItem, ListItemText, Button } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import { Link } from 'react-router-dom'

interface SidebarData {
    value: string;
    title: string;
    path: string;
}

interface MuiDrawerProps {
    sidebarData: SidebarData[];
}

const MuiDrawer = ({ sidebarData }: MuiDrawerProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <IconButton size='large' edge='start' onClick={() => setIsOpen(true)}>
                <MenuIcon />
            </IconButton>
            <Drawer anchor='left' open={isOpen} onClose={() => setIsOpen(false)}>
                <Box p={2} width="250px" textAlign='center' role="presentation">
                    {/* <Typography variant='h5' component='div'>
                        Drawer
                    </Typography> */}
                    <List>
                        {sidebarData.map((item, index) => (
                            <ListItem key={index}>
                                <ListItemText>
                                    <Button className='button'>{item.title}</Button>
                                </ListItemText>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </>
    )
}

export default MuiDrawer