# SONG TAG

A Spotify-like audio player built on a single `<audio>` tag. Listen to songs, albums, and artists in your library and create and curate your own playlists.

***Disclaimer:** This project is not at all afilliated with Spotify, nor do I own the rights to any music referenced in this project. I am a big fan and long time user of Spotify, so the design of this test project is heavily inspired by the Spotify web and desktop players. This is just a fun way for me to get better at developing applications with React and Redux.*

## Overview

This project is made up of two main parts: the audio player and the library manager.

### Audio Player
I implemented the audio player using a single `<audio>` tag which is accessed by a React component via a reference. I decided to build custom audio controls so that the audio player state can be managed with Redux. This means that playing, pausing, skipping, and restarting songs can be requested from anywhere in the app, whether double clicking on a song from a library view or clicking the player buttons. Using Redux also allowed me to manage a playlist and queue easily and access it from multiple parts of the app.

### Library Manager
The library manager uses React Router to easily navigate back and forth between albums, artists, and playlists. As mentioned above, because the audio player state is managed with Redux, any component can know about the current play conditions. This allows components like Album, Artist, or Playlist to display the current song, toggle play/pause controls correctly, or add music to the play queue.

## Usage (Or a temporary lack thereof)

This is a sandbox project to practice building applications with React and Redux, so instead of starting with a back end, I jumped right into the front end and built this with mock data and without the concept of multiple users. I am planning on going back and writing a real back end at some point. Currently, all API calls are stubbed out with mock data that references static assets I have stored locally.

To save my ears and my sanity while I build this, I am testing with real songs from my own library instead of license-free music, but I cannot include those files in source code as I do not own the rights. This means that currently, you can pull this project down but you won't be able to listen to any music until you add your own test data and song files into the project.

In the near future, I will spend some time gathering license-free music that I can include with test data so other people can pull this project down and start listening to some test music right away.

## Notes

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
