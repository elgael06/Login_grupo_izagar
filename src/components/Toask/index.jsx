import React from 'react';
import { ToastProvider } from "react-toast-notifications";
import Custom  from './Custom';

const ToaskApp = () => (
  <ToastProvider
    autoDismissTimeout={6000}
    components={{ Toast: Custom }}
    placement="bottom-center"
  >
  </ToastProvider>
);

export default ToaskApp;