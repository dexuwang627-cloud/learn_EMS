import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import ModbusPage from './src/pages/ModbusPage.jsx';
import { MemoryRouter } from 'react-router-dom';

try {
  const html = renderToStaticMarkup(
    <MemoryRouter>
      <ModbusPage />
    </MemoryRouter>
  );
  console.log("Rendered successfully. Length:", html.length);
} catch (err) {
  console.error("Runtime rendering error:", err);
}
