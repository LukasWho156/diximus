import React from 'react';

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { io } from "socket.io-client";

import IndexPage from './components/pages/index-page';
import CreateRoomPage from './components/pages/create-room-page';
import GamePage from './components/pages/game-page';
import ContactPage from './components/pages/contact-page';
import AboutPage from './components/pages/about-page';
import DeckGalleryPage from './components/pages/deck-gallery-page';
import CardGalleryPage from './components/pages/card-gallery-page';
import ChangelogPage from './components/pages/changelog-page';

import Localization from './logic/localization';
import { serverUrl } from './logic/server-url';

const localization = new Localization();

const socket = io(serverUrl.replace('http', 'ws').replace('/api', ''));

class App extends React.Component {

  childProps;

  constructor(props) {
    super(props)
    this.state = {language: localization.language};
    this.childProps = {
      localization: localization,
      socket: socket,
      forceRerender: () => this.forceRerender(),
    }
  }

  forceRerender() {
    this.setState({language: localization.language});
  }

  render() {
    return (
      <Router>
        <div style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <Routes>
            <Route path="/" element={<IndexPage {...this.childProps}/>} />
            <Route path="/create" element={<CreateRoomPage {...this.childProps} />} />
            <Route path="/gallery" element={<DeckGalleryPage {...this.childProps} />} />
            <Route path="/gallery/:id" element={<CardGalleryPage {...this.childProps}/>} />
            <Route path="/about" element={<AboutPage {...this.childProps}/>} />
            <Route path="/contact" element={<ContactPage {...this.childProps}/>} />
            <Route path="/changelog" element={<ChangelogPage {...this.childProps}/>} />
            <Route path="/:id" element={<GamePage {...this.childProps}/>} />
          </Routes>
        </div>
      </Router>
    );
  }

}

export default App;
