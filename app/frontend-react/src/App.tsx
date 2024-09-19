import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { FluentProvider, teamsLightTheme } from '@fluentui/react-components';
import ImageViewerDialog from './components/ImageViewerDialog';
import PdfViewerDialog from './components/PdfViewerDialog';

const App: React.FC = () => {
  return (
    <FluentProvider theme={teamsLightTheme}>
      <Router>
        <Switch>
          <Route path="/image-viewer" component={ImageViewerDialog} />
          <Route path="/pdf-viewer" component={PdfViewerDialog} />
        </Switch>
      </Router>
    </FluentProvider>
  );
};

export default App;
