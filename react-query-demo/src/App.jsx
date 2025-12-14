import React from 'react';
import PostsComponent from './PostsComponent.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a QueryClient instance
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <PostsComponent />
      </div>
    </QueryClientProvider>
  );
}

export default App;
