import Page from 'classes/Page';

export default class Product extends Page {
  constructor() {
    super({
      id: 'product',
      element: '.product--wrapper',
      elements: {
        navigation: document.querySelector('.navigation'),
        footer: document.querySelector('footer')
      }
    })
  }
}