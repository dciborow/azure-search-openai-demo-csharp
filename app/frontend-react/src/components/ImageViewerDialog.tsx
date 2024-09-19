import React from 'react';
import { Dialog, DialogFooter, DialogType, PrimaryButton, DefaultButton } from '@fluentui/react-components';

interface ImageViewerDialogProps {
  fileName: string;
  src: string;
  onClose: () => void;
}

const ImageViewerDialog: React.FC<ImageViewerDialogProps> = ({ fileName, src, onClose }) => {
  return (
    <Dialog
      hidden={false}
      onDismiss={onClose}
      dialogContentProps={{
        type: DialogType.largeHeader,
        title: fileName,
        subText: 'Image Viewer',
      }}
      modalProps={{
        isBlocking: false,
      }}
    >
      <img src={src} alt={fileName} style={{ maxHeight: '600px', width: '100%' }} />
      <DialogFooter>
        <PrimaryButton onClick={onClose} text="Close" />
      </DialogFooter>
    </Dialog>
  );
};

export default ImageViewerDialog;
