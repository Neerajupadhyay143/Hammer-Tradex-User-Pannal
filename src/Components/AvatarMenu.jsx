import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function AvatarMenu() {

    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <Avatar sx={{ color: '#d8af72', borderRadius: '50%', marginLeft: '1rem', border: '2px solid #d8af72 ', background: 'transparent', marginRight: '1rem' }} />
            </Button>
            <Menu
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                {/* <MenuItem onClick={navigate('/ProfilePage')}>Profile</MenuItem> */}
    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right show" style={{background: 'rgb(39, 39, 39)', border: '1px solid rgba(177, 141, 95, 0.65)', boxShadow: 'rgb(195, 161, 119) 0px 0px 15px', left: 'inherit', right: 0}}>
  {/* <span class="dropdown-item dropdown-header">choudharyakash2791@gmail.com</span> */}
  <div className="ropdown-item drop_header_bg">
    <h3 className="dropdown-header">bskikoktail@gmail.com</h3>
    <h2>TOKEN BALANCE</h2>
    <h2>Total Team Memeber: 2</h2>
    <h3 className="tokens_count">0 $HTX</h3>
  </div>
  <div className="dropdown-divider" />
  <div className="dropdown-item drop_items">
    <a href="https://hammertradex.com/My-Profile">
      <img src="https://presale.golteum.io/static/media/nav2.809346c5.svg" />
      <span>My Profile</span>
    </a>
  </div>
  {/* <div class="dropdown-item drop_items">
                  <a href="https://hammertradex.com/My-Profile">
                      <img src="https://presale.golteum.io/static/media/referral.15234737.svg">
                          <span>Referral</span>
                  </a>
              </div> */}
  <div className="dropdown-item drop_items">
    <a href="https://hammertradex.com/buy-token">
      <img src="https://presale.golteum.io/static/media/nav3.b4d32e04.svg" />
      <span>Buy Token</span>
    </a>
  </div>
  <div className="dropdown-item drop_items">
    <a href="https://hammertradex.com/Logout">
      <img src="https://presale.golteum.io/static/media/logout.490c019d.svg" />
      <span>Logout</span>
    </a>
  </div>
  {/* <p class="dropdown-item" style="color:#fff">
                  Name : htxtradex
              </p>
              <p class="dropdown-item" style="color:#fff">
                  UserName : htxtradex
              </p>
              <p class="dropdown-item" style="color:#fff">
                  Joining Date : 2022-12-12
              </p>
              <p class="dropdown-item" style="color:#fff">
                  Thank you for signing up, Dheeraj Kumawat. In accordance with the terms and conditions you will be able to purchase and see your Hammer Tradex tokens using this dashboard.

              </p> */}
</div>

            </Menu>
        </div>
    );
}