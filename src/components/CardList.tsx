import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const [url, setUrl] = useState<string>('');

  const handleViewImage = (url: string) => {
    onOpen();
    setUrl(url);
  };

  return (
    <>
      <SimpleGrid templateColumns="repeat(3, 1fr)" gap="40px">
        {cards.map(image => (
          <Card
            key={image.id}
            data={image}
            viewImage={() => handleViewImage(image.url)}
          />
        ))}
      </SimpleGrid>

      <ModalViewImage imgUrl={url} isOpen={isOpen} onClose={onClose} />
    </>
  );
}
