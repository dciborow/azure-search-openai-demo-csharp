import React from 'react';
import { useState, useEffect } from 'react';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@fluentui/react-components';
import { Text, Chip, Paper } from '@fluentui/react-components';
import { CitationDetails, HtmlParsedAnswer, parseAnswerToHtml } from '../utils/AnswerParser';

interface AnswerProps {
  retort: ResponseChoice;
  followupQuestionClicked: (question: string) => void;
}

const Answer: React.FC<AnswerProps> = ({ retort, followupQuestionClicked }) => {
  const [parsedAnswer, setParsedAnswer] = useState<HtmlParsedAnswer | null>(null);

  useEffect(() => {
    setParsedAnswer(parseAnswerToHtml(retort.message.content, retort.citationBaseUrl));
  }, [retort]);

  const handleAskFollowup = (followupQuestion: string) => {
    followupQuestionClicked(followupQuestion);
  };

  const handleShowCitation = (citation: CitationDetails) => {
    // Implement the logic to show the citation
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {parsedAnswer && (
        <div style={{ width: '100%' }}>
          <Tabs>
            <TabList>
              <Tab>Answer</Tab>
              <Tab>Thought process</Tab>
              <Tab>Supporting Content</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Paper style={{ padding: '16px', elevation: 3 }}>
                  <Text>{parsedAnswer.answerHtml}</Text>
                  {parsedAnswer.citations.length > 0 && (
                    <div style={{ paddingTop: '16px' }}>
                      <Text variant="subtitle2" style={{ paddingBottom: '8px' }}>Citations:</Text>
                      {parsedAnswer.citations.map((citation) => (
                        <Chip
                          key={citation.number}
                          variant="outlined"
                          color="info"
                          onClick={() => handleShowCitation(citation)}
                        >
                          {`${citation.number}. ${citation.name}`}
                        </Chip>
                      ))}
                    </div>
                  )}
                  {parsedAnswer.followupQuestions.length > 0 && (
                    <div style={{ paddingTop: '16px' }}>
                      <Text variant="subtitle2" style={{ paddingBottom: '8px' }}>Follow-up questions:</Text>
                      {parsedAnswer.followupQuestions.map((followup) => (
                        <Chip
                          key={followup}
                          variant="outlined"
                          color="tertiary"
                          onClick={() => handleAskFollowup(followup)}
                        >
                          {followup}
                        </Chip>
                      ))}
                    </div>
                  )}
                </Paper>
              </TabPanel>
              <TabPanel>
                <Paper style={{ padding: '16px', elevation: 3 }}>
                  <pre style={{ whiteSpace: 'normal', fontSize: '1.2em' }}>
                    {retort.context.thoughtsString}
                  </pre>
                </Paper>
              </TabPanel>
              <TabPanel>
                <Paper style={{ padding: '8px', elevation: 3 }}>
                  <SupportingContent dataPoints={retort.context.dataPointsContent} images={retort.context.dataPointsImages || []} />
                </Paper>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      )}
    </div>
  );
};

export default Answer;
