import React, { useState } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import MathEditor from "./components/MathEditor";


const queryClient = new QueryClient();

const App = () => (
    <QueryClientProvider client={queryClient}>
        <div>
            <h1>Formula</h1>
            <MathEditor />
        </div>
    </QueryClientProvider>
);

export default App;
