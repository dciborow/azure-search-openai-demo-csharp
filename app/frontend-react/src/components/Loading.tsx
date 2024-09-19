import React from 'react';
import { Spinner, Text } from '@fluentui/react-components';

interface LoadingProps {
  busyMessage?: string;
}

const Loading: React.FC<LoadingProps> = ({ busyMessage = "🤖 I'm generating an answer... Please wait." }) => {
  return (
    <div>
      <Text variant="large" block>
        {busyMessage}
      </Text>
      <Spinner label="Loading..." />
    </div>
  );
};

export default Loading;
