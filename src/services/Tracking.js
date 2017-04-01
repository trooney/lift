import ReactGA from 'react-ga';

exports.initialize = function initialize() {
  if (process.env.NODE_ENV === 'production') {
    console.log('Tracking.initialize')
    ReactGA.initialize('UA-3929674-2');
  }
};

exports.track = function track() {
  
  if (process.env.NODE_ENV === 'production') {
    console.log('Tracking.track:' + window.location.pathname)
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  }
};