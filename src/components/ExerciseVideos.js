import React from 'react';
import { Typography, Box, Stack } from '@mui/material';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  return (
    <Box sx={{ marginTop: { lg: '203px', xs: '20px' } }} p='20px'>
      <Typography
        sx={{ fontSize: { lg: '44px', xs: '25px' } }}
        fontWeight={700}
        color='#000'
        mb='33px'
      >
        Watch{' '}
        <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>
          {name}
        </span>{' '}
        exercise videos
      </Typography>
      <Stack
        sx={{ flexDirection: { lg: 'row' }, gap: { lg: '20px', xs: '30px' } }}
        justifyContent='flex-start'
        flexWrap='wrap'
        alignItems='center'
      >
        {exerciseVideos?.slice(0, 6)?.map((item, index) => (
          <a
            key={index}
            className='exercise-video'
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target='_blank'
            rel='noreferrer'
          >
            <img
              style={{
                borderTopLeftRadius: '10px',
                borderTopRightRadius: '10px',
                width: '100%',
                height: '60%',
                objectFit: 'cover',
              }}
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
            />
            <Box>
              <Typography
                sx={{ fontSize: { lg: '28px', xs: '18px' }, p: '0 20px' }}
                fontWeight={600}
                color='#000'
              >
                {item.video.title.length < 40
                  ? item.video.title
                  : item.video.title.slice(0, 40) + '...'}
              </Typography>
              <Typography fontSize='14px' color='#000' p='0 20px'>
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
