import each from 'lodash/each';

import Home from './pages/front/Home';
import Events from './pages/front/Events';
import Eshop from './pages/front/Eshop';
import Product from './pages/front/Product';

class App {
  constructor() {
    this.createContent()
    this.createPages()
    this.addListenerLinks()
  }

  createContent () {
    this.content = document.querySelector('.content')
    this.template = this.content.getAttribute('data-template')
  }

  createPages() {
    this.pages = {
      home: new Home(),
      events: new Events(),
      eshop: new Eshop(),
      product: new Product(),
    }

    this.page = this.pages[this.template]
    this.page.create()
  }

  async onChange({ url, name }) {
    url = url.replace(window.location.origin, '')

    await this.page.hide();

    const request = await window.fetch(url);
    if(request.status === 200) {
      const html = await request.text();
      const div = document.createElement('div');

      div.innerHTML = html;

      const divContent = div.querySelector('.content')

      this.template = divContent.getAttribute('data-template')

      this.content.setAttribute('data-template', this.template)
      this.content.innerHTML = divContent.innerHTML

      this.page = this.pages[this.template]
      await this.page.create()
      await this.page.show()
      window.location.replace(url);

      this.addListenerLinks()
    } else {
      console.log('Error');
    }
  }

  addListenerLinks() {
    const links = document.querySelectorAll('a');
    each(links, link => {
      link.onclick = e => {
        e.preventDefault();

        const { href } = link;

        this.onChange({
          url: link.href
        });
      }
    })
  }
}

new App();