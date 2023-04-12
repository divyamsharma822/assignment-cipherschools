import React from "react";
import { Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";

function App() {
    return (
        <>
            <React.Suspense
                fallback={<div className='text-center'>Loading...</div>}>
                <Routes>
                    {/* // Home Route */}
                    <Route index element={<Profile />} />
                </Routes>
            </React.Suspense>
        </>
    );
}

export default App;
