import Page from 'classes/Page';

export default class Faq extends Page {
  constructor() {
    super({
      id: 'faq',
      element: '.faq--wrapper',
      elements: {
        navigation: document.querySelector('.navigation'),
        footer: document.querySelector('footer')
      }
    });
  }
}