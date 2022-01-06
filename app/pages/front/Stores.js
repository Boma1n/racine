import Page from 'classes/Page';

export default class Stores extends Page{
  constructor() {
    super({
      id: 'stores',
      element: '.stores--wrapper',
      elements: {
        navigation: document.querySelector('.navigation'),
        footer: document.querySelector('footer')
      }
    });
  }
}