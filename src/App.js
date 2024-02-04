import React from 'react';
import { Link, Navigate, Routes, Route } from 'react-router-dom';

import NotePage from './pages/NotePage';
import NotFoundPage from './pages/NotFoundPage';
import NoteArchivePage from './pages/NoteArchivePage';
import DetailNotePage from './pages/DetailNotePage';
import NewNotePages from './pages/NewNotePage';
import Navigation from './components/action layout/Navigation';
import EditNotePage from './pages/EditNotePage';

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>
          <Link to="/">Note App</Link>
        </h1>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<NotePage />} />
          <Route path="/archives" element={<NoteArchivePage />} />
          <Route path="/notes" element={<Navigate to="/" replace />} />
          <Route path="/notes/new" element={<NewNotePages />} />
          <Route path="/notes/:id" element={<DetailNotePage />} />
          <Route path="/notes/:id/edit" element={<EditNotePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
