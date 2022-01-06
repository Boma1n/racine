import Page from 'classes/Page';

export default class Basket extends Page{
  constructor() {
    super({
      id: 'basket',
      element: '.basket--wrapper',
      elements: {
        navigation: document.querySelector('.navigation'),
        footer: document.querySelector('footer')
      }
    });
  }
}