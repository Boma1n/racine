import Page from 'classes/Page';

export default class Eshop extends Page {
  constructor() {
    super({
      id: 'eshop',
      element: '.eshop--wrapper',
      elements: {
        navigation: document.querySelector('.navigation'),
        footer: document.querySelector('footer')
      }
    });
  }
}