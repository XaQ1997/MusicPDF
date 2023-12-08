import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <div>
    <Header />
    <FileTable />
  </div>
);