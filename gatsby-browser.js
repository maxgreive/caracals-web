import React from 'react';
import Layout from './src/components/Layout';
import './src/styles/global.css';
import '@fontsource/roboto-condensed';
import '@fontsource/roboto-condensed/latin-700.css';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}