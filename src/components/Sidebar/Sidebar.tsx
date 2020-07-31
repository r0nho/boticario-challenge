import React, { useEffect, useState } from 'react';
import history from 'utils/history';
import { Link } from 'react-router-dom';

// Material
import { withStyles } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ClearAllRoundedIcon from '@material-ui/icons/ClearAllRounded';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PostAddRoundedIcon from '@material-ui/icons/PostAddRounded';

// Assets
import Logo from 'assets/images/logo-white.svg';

// Styles
import { materialStyles } from './styles/styles';

const Sidebar = ({ user, classes, logout }: any) => {
  const [position, setPosition] = useState<'left' | 'top'>('left');

  const logoutHandler = () => {
    logout();
    history.push('/login');
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
  });

  const handleResize = () => {
    const wWidth = window.innerWidth;

    if (wWidth < 1000 && position === 'left') {
      setPosition('top');
    }

    if (wWidth >= 1000 && position === 'top') {
      setPosition('left');
    }
  };

  return (
    <>
      <Drawer
        anchor={position}
        variant="permanent"
        elevation={5}
        PaperProps={{ elevation: 8 }}
        open
        className={classes.menu}
      >
        <img src={Logo} alt="O Boticario" title="O Boticario Logo" className={classes.logo} />

        <Divider />

        <Grid container className={classes.profile}>
          <Grid item xs={12}>
            <div className={classes.profile}>
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar alt={user.name} src={user.avatar} />
                  </ListItemAvatar>
                  <ListItemText primary={user.name} secondary={user.email} />
                </ListItem>
              </List>
            </div>
            <Grid item xs={12}>
              <div className={classes.logout} onClick={logoutHandler}>
                Logout <ExitToAppIcon />
              </div>
            </Grid>
          </Grid>
        </Grid>

        <Divider />
        <div className={classes.list}>
          <List component="nav">
            <ListItem button component={Link} to="/dashboard/register">
              <ListItemIcon className={classes.icon}>
                <PostAddRoundedIcon style={{ fontSize: 30 }} />
              </ListItemIcon>
              <ListItemText primary="Cadastrar compra" />
            </ListItem>
            <ListItem button component={Link} to="/dashboard/home">
              <ListItemIcon className={classes.icon}>
                <ClearAllRoundedIcon style={{ fontSize: 30 }} />
              </ListItemIcon>
              <ListItemText primary="Minhas compras" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </>
  );
};

export default withStyles(materialStyles)(Sidebar);
