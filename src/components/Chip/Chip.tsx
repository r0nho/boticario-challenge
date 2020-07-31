import Chip from '@material-ui/core/Chip';
import PropTypes from 'prop-types';
import React from 'react';

interface Props {
  status: 'aprovado' | 'em validação' | 'reprovado';
  label: string;
}

const BoticarioChip = ({ status, label }: Props) => {
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

  return <Chip label={label} style={{ background: colors[status], color: textColor[status] }} />;
};

BoticarioChip.propTypes = {
  label: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

BoticarioChip.defaultProps = {
  status: 'aprovado',
};

export default BoticarioChip;
