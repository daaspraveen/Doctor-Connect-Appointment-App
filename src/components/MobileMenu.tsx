import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { CalendarMonthSharp, Close, Home, LibraryBooks } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export const MobileMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {open ? <Close className="text-gray-800" /> :
          <MenuIcon className="text-gray-800" />}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            'aria-labelledby': 'basic-button',
          },
        }}
        className='min-md:hidden max-md:flex'
      >
        <MenuItem onClick={handleClose}>
            <Link to="/">
                <Home width={25} style={{opacity: '0.3'}} /> Home
            </Link>
        </MenuItem>
        <MenuItem className="hover:underline">
            <Link to="/bookings">
              <LibraryBooks width={25} style={{opacity: '0.3'}} /> Your Bookings
            </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
            <Link to="/book-appointment">
                <CalendarMonthSharp width={25} style={{opacity: '0.3'}} /> Book Appointment
            </Link>
        </MenuItem>
      </Menu>
    </>
  );
}
