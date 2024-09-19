import React, { useState, useEffect } from 'react';
import { Drawer, DrawerHeader, DrawerBody, DrawerFooter, TextField, Checkbox, RadioGroup, Radio, Button } from '@fluentui/react-components';
import { useLocation } from 'react-router-dom';

interface SettingsPanelProps {
  open: boolean;
  onClose: () => void;
}

const SettingsPanel: React.FC<SettingsPanelProps> = ({ open, onClose }) => {
  const [settings, setSettings] = useState({
    promptTemplate: '',
    top: 1,
    excludeCategory: '',
    semanticRanker: false,
    retrievalMode: 'Text',
    semanticCaptions: false,
    suggestFollowupQuestions: false,
  });

  const location = useLocation();
  const [supportedSettings, setSupportedSettings] = useState('All');

  useEffect(() => {
    const route = location.pathname.split('/').pop();
    setSupportedSettings(route === 'ask' ? 'Ask' : route === 'chat' ? 'Chat' : 'All');
  }, [location]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <Drawer open={open} onDismiss={onClose} type="overlay" position="right" size="large">
      <DrawerHeader>
        <h2>Configure Answer Generation</h2>
      </DrawerHeader>
      <DrawerBody>
        <TextField
          label="Override prompt template"
          name="promptTemplate"
          value={settings.promptTemplate}
          onChange={handleInputChange}
          multiline
          rows={5}
        />
        <TextField
          label="Retrieve this many documents from search"
          name="top"
          type="number"
          value={settings.top}
          onChange={handleInputChange}
          min={1}
          max={50}
        />
        <TextField
          label="Exclude category"
          name="excludeCategory"
          value={settings.excludeCategory}
          onChange={handleInputChange}
        />
        <Checkbox
          label="Use semantic ranker for retrieval"
          name="semanticRanker"
          checked={settings.semanticRanker}
          onChange={handleInputChange}
        />
        <h3>Retrieval Mode</h3>
        <RadioGroup
          name="retrievalMode"
          selectedKey={settings.retrievalMode}
          onChange={handleInputChange}
        >
          <Radio label="Text" value="Text" />
          <Radio label="Hybrid" value="Hybrid" />
          <Radio label="Vector" value="Vector" />
        </RadioGroup>
        <Checkbox
          label="Use query-contextual summaries instead of whole documents"
          name="semanticCaptions"
          checked={settings.semanticCaptions}
          onChange={handleInputChange}
        />
        <Checkbox
          label="Suggest follow-up questions"
          name="suggestFollowupQuestions"
          checked={settings.suggestFollowupQuestions}
          onChange={handleInputChange}
        />
      </DrawerBody>
      <DrawerFooter>
        <Button onClick={onClose} appearance="primary">Close</Button>
      </DrawerFooter>
    </Drawer>
  );
};

export default SettingsPanel;
