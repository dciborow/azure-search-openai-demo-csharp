import React from 'react';
import { Button, Text, Card, CardHeader, CardBody } from '@fluentui/react-components';

interface AnswerErrorProps {
  question: string;
  error: string;
  onRetryClicked: (question: string) => void;
}

const AnswerError: React.FC<AnswerErrorProps> = ({ question, error, onRetryClicked }) => {
  const handleRetryClick = () => {
    onRetryClicked(question);
  };

  return (
    <Card>
      <CardHeader>
        <Text variant="large" color="error">
          Error
        </Text>
      </CardHeader>
      <CardBody>
        <Text>{error}</Text>
        <Text>Unable to retrieve valid response from the server.</Text>
        <Button onClick={handleRetryClick} icon="Refresh">
          Retry
        </Button>
      </CardBody>
    </Card>
  );
};

export default AnswerError;
