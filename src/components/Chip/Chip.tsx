import Chip from '@material-ui/core/Chip';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

interface Props {
  status: 'aprovado' | 'em validação' | 'reprovado';
  label: string;
  onChangeStatus: (status: string) => void;
}

const BoticarioChip = ({ status, label, onChangeStatus }: Props) => {
  const colors = {
    aprovado: '#00555C',
    'em validação': 'yellow',
    reprovado: '#ff1744',
  };

  const textColor = {
    aprovado: 'white',
    'em validação': 'black',
    reprovado: 'white',
  };

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selected, setSelected] = useState(label);

  useEffect(() => {
    // update only when have change
    if (selected !== status && onChangeStatus) {
      onChangeStatus(selected);
    }
  }, [selected, onChangeStatus, status]);

  const toggleMenu = (event: any) => {
    if (Boolean(anchorEl)) return;
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event: any): void => {
    setSelected(event.target.attributes.value.value);
    setAnchorEl(null);
  };

  return (
    <>
      <Chip
        label={selected}
        onClick={toggleMenu}
        style={{ background: colors[status], color: textColor[status] }}
        aria-controls="simple-menu"
        aria-haspopup="true"
      />
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={toggleMenu} id="simple-menu">
        {Object.keys(colors).map(
          menuItem =>
            selected !== menuItem && (
              <MenuItem style={{ textTransform: 'capitalize' }} onClick={handleClose} key={menuItem} value={menuItem}>
                {menuItem}
              </MenuItem>
            ),
        )}
      </Menu>
    </>
  );
};

BoticarioChip.propTypes = {
  label: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  onChangeStatus: PropTypes.any,
};

BoticarioChip.defaultProps = {
  status: 'aprovado',
};

export default BoticarioChip;
