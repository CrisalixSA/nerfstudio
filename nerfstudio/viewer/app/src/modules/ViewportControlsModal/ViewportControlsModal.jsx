/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

import { Box, Button, Modal } from '@mui/material';
import KeyboardIcon from '@mui/icons-material/Keyboard';

export default function ControlsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="LandingModal">
      <Button
        className="banner-button"
        variant="outlined"
        size="small"
        startIcon={<KeyboardIcon />}
        onClick={handleOpen}
      >
        Viewport Controls
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="ViewportConstrolsModal-box">
          <center>
            <img
              style={{ width: '100%', paddingTop: '30px', margin: 'auto' }}
              src="https://assets.nerf.studio/keyboard_controls.png"
              alt="Controls diagram"
            />
            <div className="modal-controls">
              <p>Reconstruction</p>
              <span><button className="modal-controls-button">T</button>Translate</span>
              <span><button className="modal-controls-button">R</button>Rotate</span>
              <span><button className="modal-controls-button">C</button>Scale</span>
            </div>
          </center>
        </Box>
      </Modal>
    </div>
  );
}
