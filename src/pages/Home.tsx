import React from 'react';

// src/pages/Home.tsx
import { Box, Flex, Grid, Heading, Text, Button } from '@chakra-ui/react';
import FilmCard from '../components/FilmCard';

const Home = () => {
  const films = [
    {
      id: '1',
      title: 'Матрица',
      genre: 'Боевик',
      duration: '138 мин',
      imageUrl: 'https://via.placeholder.com/300x450',
    },
  ];

  return (
    <Box p={8}>
      <Flex mb={8} alignItems="center">
        <Heading as="h1" fontSize="2xl" fontWeight="bold">
          Все фильмы
        </Heading>
        <Text ml={4} color="gray.500">
          Избранное
        </Text>
        <Button ml={4} size="sm" colorScheme="blue">
          Добавить фильм
        </Button>
      </Flex>

      <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6}>
        {films.map((film) => (
          <FilmCard key={film.id} {...film} />
        ))}
      </Grid>
    </Box>
  );
};

export default Home;