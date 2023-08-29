import React, { useState } from 'react'
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MoveUpIcon from '@mui/icons-material/MoveUp';
import { Route, Routes, useNavigate } from 'react-router-dom';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import DashBoard from './DashBoard';
import StackManage from './StackManage';
import IncomeReport from './IncomeReport';
import DepositFunds from './DepositFunds';
import PendingDeposite from '../DepositsFunds/PendingDeposite';
import CompleteDeposite from '../DepositsFunds/CompleteDeposite';
import RejectDeposite from '../DepositsFunds/RejectDeposite';
import WithdrawReport from './WithdrawReport';
import RejectRequest from '../Withdraw-requests/RejectRequest';
import MyIncome from '../IncomeReports/MyIncome';
import MyTeamIncome from '../IncomeReports/MyTeamIncome';
import AvatarMenu from './AvatarMenu';
import ProfilePAge from './ProfilePAge';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const drawerWidth = 240;

function Header(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const navigate = useNavigate();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar sx={{ background: 'black', placeContent: 'center' }}>
                <img
                    src="htx-logo.png"
                    alt="Your Alt Text"
                    style={{ width: '100px', cursor: 'pointer', height: 'auto' }}
                />
            </Toolbar>
            <Divider />
            <List sx={{ color: 'white', background: '#161616' }}>
                <ListItem disablePadding sx={{ display: 'block', padding: '5px', borderBottom: '1px solid #2e2a2a' }} >
                    <ListItemButton
                        onClick={() => navigate("/")}  >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                justifyContent: 'center',
                            }}
                        >
                            <AvTimerIcon sx={{ color: "#d8af72", marginRight: '10px', fontSize: "30px" }} />
                        </ListItemIcon>
                        <ListItemText primary="Portfolio" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ display: 'block', padding: '5px', borderBottom: '1px solid #2e2a2a' }} >
                    <ListItemButton

                        onClick={() => navigate("/ProfilePAge")}  >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                justifyContent: 'center',
                            }}

                        >
                            <ManageAccountsIcon sx={{ color: "#d8af72", marginRight: '10px', fontSize: "30px" }} />
                        </ListItemIcon>
                        <ListItemText primary=" Profile" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding sx={{ display: 'block', padding: '5px', borderBottom: '1px solid #2e2a2a' }} >
                    <ListItemButton

                        onClick={() => navigate("/StackManage")}  >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                justifyContent: 'center',
                            }}

                        >
                            <MoveUpIcon sx={{ color: "#d8af72", marginRight: '10px', fontSize: "30px" }} />
                        </ListItemIcon>
                        <ListItemText primary="Transaction" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ display: 'block', borderBottom: '1px solid #2e2a2a' }} >

                    <IncomeReport />

                </ListItem>
                <ListItem disablePadding sx={{ display: 'block', borderBottom: '1px solid #2e2a2a' }} >

                    <DepositFunds />

                </ListItem>
                <ListItem disablePadding sx={{ display: 'block', borderBottom: '1px solid #2e2a2a' }} >

                    <WithdrawReport />

                </ListItem>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ background: '#272727', display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    background: 'black',
                    borderBottom: '1px solid white',
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={() => handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>


                </Toolbar>
                <Typography variant="h6" noWrap component="div" sx={{ display: 'flex', alignItems: 'center', fontSize: '0.96rem' }}>

                    Welcome htxtradex
                    <AvatarMenu />
                    {/* <Avatar sx={{ color: '#d8af72', borderRadius: '50%', marginLeft: '1rem', border: '2px solid #d8af72 ', background: 'transparent', marginRight: '1rem' }} /> */}
                </Typography>

            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >

                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={() => handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{

                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Routes>
                    <Route path='/' element={<DashBoard />} ></Route>
                    <Route exact path='/StackManage' element={<StackManage />} ></Route>
                    <Route exact path='/ProfilePAge' element={<ProfilePAge />} ></Route>
                    <Route exact path='/MyIncome' element={<MyIncome />} ></Route>
                    <Route exact path='/MyTeamIncome' element={<MyTeamIncome />} ></Route>
                    <Route exact path='/PendingDeposite' element={<PendingDeposite />} ></Route>
                    <Route exact path='/CompleteDeposite' element={<CompleteDeposite />} ></Route>
                    <Route exact path='/RejectDeposite' element={<RejectDeposite />} ></Route>
                    <Route exact path='/RejectRequest' element={<RejectRequest />} ></Route>


                </Routes>

            </Box>
        </Box>
    );
}

Header.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Header;