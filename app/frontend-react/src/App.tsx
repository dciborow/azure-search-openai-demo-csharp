import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { FluentProvider, teamsLightTheme } from '@fluentui/react-components';
import ImageViewerDialog from './components/ImageViewerDialog';
import PdfViewerDialog from './components/PdfViewerDialog';
import Answer from './components/Answer';
import AnswerError from './components/AnswerError';
import Examples from './components/Examples';
import Loading from './components/Loading';
import SettingsPanel from './components/SettingsPanel';
import SupportingContent from './components/SupportingContent';

const App: React.FC = () => {
  return (
    <FluentProvider theme={teamsLightTheme}>
      <Router>
        <Switch>
          <Route path="/image-viewer" component={ImageViewerDialog} />
          <Route path="/pdf-viewer" component={PdfViewerDialog} />
          <Route path="/answer" component={Answer} />
          <Route path="/answer-error" component={AnswerError} />
          <Route path="/examples" component={Examples} />
          <Route path="/loading" component={Loading} />
          <Route path="/settings-panel" component={SettingsPanel} />
          <Route path="/supporting-content" component={SupportingContent} />
        </Switch>
      </Router>
    </FluentProvider>
  );
};

export default App;
