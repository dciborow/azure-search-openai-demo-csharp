import React from 'react';
import { List, ListItem, Text, Divider, Image } from '@fluentui/react-components';

interface SupportingContentProps {
  dataPoints: SupportingContentRecord[];
  images: SupportingImageRecord[];
}

interface SupportingContentRecord {
  title: string;
  content: string;
}

interface SupportingImageRecord {
  title: string;
  url: string;
}

const SupportingContent: React.FC<SupportingContentProps> = ({ dataPoints, images }) => {
  const parsedSupportingContent = dataPoints.map((item) => parseSupportingContent(item));

  return (
    <List>
      {parsedSupportingContent.map((value, index) => {
        if (value.isEmpty) {
          return null;
        }

        const { title, content } = value;
        const last = index === parsedSupportingContent.length - 1;

        return (
          <React.Fragment key={index}>
            {index !== 0 && !last && <Divider />}
            <ListItem>
              <Text variant="subtitle1" style={{ fontWeight: 'bold' }} color="primary">
                {title}
              </Text>
              <Text variant="body1" dangerouslySetInnerHTML={{ __html: content }} />
            </ListItem>
          </React.Fragment>
        );
      })}
      <Divider />
      {images.map((value, index) => {
        const last = index === images.length - 1;
        if (!value) {
          return null;
        }

        const { title, url } = value;

        return (
          <React.Fragment key={index}>
            {index !== 0 && !last && <Divider />}
            <ListItem>
              <Image src={url} alt={title} height={400} />
            </ListItem>
          </React.Fragment>
        );
      })}
    </List>
  );
};

const parseSupportingContent = (item: SupportingContentRecord) => {
  const title = item.title;
  const content = item.content.trim();

  return {
    title,
    content,
    isEmpty: !title || !content,
  };
};

export default SupportingContent;
