import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux'
import store from '../store/';
// import 'reset-css/sass/_reset.scss'

export default class Wrap extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div>
        <Provider store={store} >
          <Component {...pageProps} />
        </Provider>
      </div>
    );
  }
}

