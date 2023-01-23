import React from "react";
import { useRoutes, Navigate } from "react-router-dom";
import RouteMiddleware from "../middleware/RouteMiddleware";
import NotePage from "../pages/NotePage";
import NoteArchivePage from "../pages/NoteArchivePage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import NewNotePages from "../pages/NewNotePage";
import DetailNotePage from "../pages/DetailNotePage";
import RegisterPage from "../pages/RegisterPage";

const Routes = () => useRoutes([
    {
        path: '/',
        element: (
            <RouteMiddleware middleware="auth">
                <NotePage />
            </RouteMiddleware>
        )
    },
    {
        path: '/login',
        element: (
            <RouteMiddleware middleware="public">
                <LoginPage />
            </RouteMiddleware>
        )
    },
    {
        path: '/register',
        element: (
            <RouteMiddleware middleware="public">
                <RegisterPage />
            </RouteMiddleware>
        )
    },
    {
        path: '/archives',
        element: (
            <RouteMiddleware middleware="auth">
                <NoteArchivePage />
            </RouteMiddleware>
        )
    },
    {
        path: '/notes',
        element: (
            <RouteMiddleware middleware="auth">
                <Navigate to="/" replace />
            </RouteMiddleware>
        )
    },
    {
        path: '/notes/new',
        element: (
            <RouteMiddleware middleware="auth">
                <NewNotePages />
            </RouteMiddleware>
        )
    },
    {
        path: '/notes/:id',
        element: (
            <RouteMiddleware middleware="auth">
                <DetailNotePage />
            </RouteMiddleware>
        )
    },
    {
        path: '/*',
        element: (
            <RouteMiddleware middleware="auth">
                <NotFoundPage />
            </RouteMiddleware>
        )
    }
])
  
export default Routes;