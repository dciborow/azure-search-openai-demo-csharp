import React from 'react';
import ReactDOM from 'react-dom';
import { FluentProvider, teamsLightTheme } from '@fluentui/react-components';
import App from './App';
import Answer from './components/Answer';
import AnswerError from './components/AnswerError';
import Examples from './components/Examples';
import Loading from './components/Loading';
import SettingsPanel from './components/SettingsPanel';
import SupportingContent from './components/SupportingContent';

ReactDOM.render(
  <FluentProvider theme={teamsLightTheme}>
    <App />
    <Answer retort={{ message: { content: '' }, citationBaseUrl: '' }} followupQuestionClicked={() => {}} />
    <AnswerError question="" error="" onRetryClicked={() => {}} />
    <Examples message="" onExampleClicked={() => {}} />
    <Loading />
    <SettingsPanel />
    <SupportingContent dataPoints={[]} images={[]} />
  </FluentProvider>,
  document.getElementById('root')
);
