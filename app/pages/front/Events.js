import Page from 'classes/Page';

export default class Events extends Page{
  constructor() {
    super({
      id: 'events',
      element: '.events--wrapper',
      elements: {
        navigation: document.querySelector('.navigation'),
        footer: document.querySelector('footer')
      }
    });
  }
}