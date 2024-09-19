import React, { useEffect, useState } from 'react';
import { Dialog, DialogFooter, DialogType, PrimaryButton, DefaultButton, Spinner } from '@fluentui/react-components';

interface PdfViewerDialogProps {
  fileName: string;
  src: string;
  onClose: () => void;
}

const PdfViewerDialog: React.FC<PdfViewerDialogProps> = ({ fileName, src, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const iframe = document.getElementById('pdf-viewer') as HTMLIFrameElement;
    if (iframe) {
      iframe.onload = () => {
        setIsLoading(false);
      };
    }
  }, []);

  return (
    <Dialog
      hidden={false}
      onDismiss={onClose}
      dialogContentProps={{
        type: DialogType.largeHeader,
        title: fileName,
        subText: 'PDF Viewer',
      }}
      modalProps={{
        isBlocking: false,
      }}
    >
      <div style={{ display: isLoading ? 'none' : 'block' }}>
        <iframe id="pdf-viewer" src={src} title={fileName} style={{ width: '100%', height: '600px' }} />
      </div>
      {isLoading && <Spinner label="Loading PDF..." />}
      <DialogFooter>
        <PrimaryButton onClick={onClose} text="Close" />
      </DialogFooter>
    </Dialog>
  );
};

export default PdfViewerDialog;
