// src/pages/FilmPage.tsx
import React from 'react';
import {
    Box,
    Flex,
    Grid,
    Heading,
    Text,
    Button,
    Image
  } from '@chakra-ui/react';
  
  const FilmPage = () => {
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
  
        <Grid templateColumns="300px 1fr" gap={8}>
          {/* Постер фильма */}
          <Box>
            <Image 
              src="https://via.placeholder.com/300x450" 
              alt="Матрица"
              borderRadius="md"
            />
          </Box>
  
          {/* Информация о фильме */}
          <Box>
            <Heading as="h2" fontSize="3xl" fontWeight="bold" mb={4}>
              Матрица
            </Heading>
  
            <Flex alignItems="center" mb={6}>
              <Text fontWeight="medium" mr={4}>
                Боевик
              </Text>
              <Text color="gray.500">
                138 минут
              </Text>
            </Flex>
  
            <Text mb={8} lineHeight="tall">
              «Матрица» — научно-фантастический боевик, поставленный братьями
              Вачовски по собственному сценарию и спродосированный Джоэлом
              Сильвером. Главные роли исполнили Кивну Рива, Лоренс Фишбери, Керри-
              Энн Мосс и Хьюго Уивинг. Фильм вышел на экраны в США 31
              марта 1999 года и послужил созданию одноимённой медиафраншизы, в
              которую вошли ещё три фильма, комиксы, компьютерные игры и аниме.
              <br /><br />
              Фильм изображает будущее, в котором реальность, существующая для
              большинства людей, является в действительности симуляцией типа «мозг в
              колбе», созданной разумными машинами, чтобы подчинить и усмирить
              человеческое население, в то время как тепло и электрическая активность
              их тел используются машинами в качестве источника энергии. Привлечённый
              повстанцами против машин хакер по кличке Нео оказывается в новом,
              пугающем реальном мире.
            </Text>
  
            <Flex justifyContent="flex-end" gap={4}>
              <Button colorScheme="blue" variant="outline">
                Редактировать
              </Button>
              <Button colorScheme="red">
                Удалить
              </Button>
            </Flex>
          </Box>
        </Grid>
      </Box>
    );
  };
  
  export default FilmPage;