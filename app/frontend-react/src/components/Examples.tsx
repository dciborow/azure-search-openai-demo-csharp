import React from 'react';
import { Card, CardHeader, CardBody, Text, Button, Grid, GridItem } from '@fluentui/react-components';

interface ExamplesProps {
  message: string;
  onExampleClicked: (exampleText: string) => void;
}

const Examples: React.FC<ExamplesProps> = ({ message, onExampleClicked }) => {
  const examples = [
    "What is included in my Northwind Health Plus plan that is not in standard?",
    "What happens in a performance review?",
    "What does a Product Manager do?"
  ];

  return (
    <Grid>
      <GridItem span={12}>
        <Text variant="xLarge">{message}</Text>
      </GridItem>
      {examples.map((example, index) => (
        <GridItem key={index} span={4}>
          <Card onClick={() => onExampleClicked(example)}>
            <CardHeader>
              <Text variant="large">{example}</Text>
            </CardHeader>
            <CardBody>
              <Button onClick={() => onExampleClicked(example)}>Ask</Button>
            </CardBody>
          </Card>
        </GridItem>
      ))}
    </Grid>
  );
};

export default Examples;
