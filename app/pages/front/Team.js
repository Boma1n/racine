import Page from 'classes/Page';

export default class Team extends Page {
  constructor() {
    super({
      id: 'team',
      element: '.team--wrapper',
      elements: {
        navigation: document.querySelector('.navigation'),
        footer: document.querySelector('footer')
      }
    });
  }
}