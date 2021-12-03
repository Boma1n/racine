import each from 'lodash/each';

import Home from './pages/Home';

class App {
  constructor() {
    this.createContent()
    this.createPages()
    this.onChange()
  }

  createContent() {
    this.content = document.querySelector('.content')
    this.template = this.content.getAttribute('data-template')
  }

  createPages() {
    this.pages = {
      home: new Home()
    }

    this.page = this.pages[this.template]
    this.page.create()
  }

  onChange( url ) {

  }
}

new App();