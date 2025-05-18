import React from 'react';

import { Box, Image, Text, Heading, Link, Flex } from '@chakra-ui/react';

interface FilmCardProps {
  title: string;
  genre: string;
  duration: string;
  imageUrl: string;
  id: string;
}

const FilmCard = ({ title, genre, duration, imageUrl, id }: FilmCardProps) => {
  return (
    <Link href={`/film/${id}`} _hover={{ textDecoration: 'none' }}>
      <Box 
        borderWidth="1px" 
        borderRadius="lg" 
        overflow="hidden" 
        _hover={{ transform: 'scale(1.02)', transition: 'transform 0.2s' }}
      >
        <Image src={imageUrl} alt={title} />
        <Box p={4}>
          <Heading as="h3" size="md" mb={2}>
            {title}
          </Heading>
          <Flex justifyContent="space-between">
            <Text fontSize="sm" color="gray.600">
              {genre}
            </Text>
            <Text fontSize="sm" color="gray.600">
              {duration}
            </Text>
          </Flex>
        </Box>
      </Box>
    </Link>
  );
};

export default FilmCard;