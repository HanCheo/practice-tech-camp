import today_recommendation from './data/today_recommendation.js';
import event from './data/event.js';
import instargram from './data/instargram.js';
import recipe from './data/recipe.js';
import md_choice from './data/md_choice.js';
import theme_goods_11 from './data/theme_goods_11.js';
import theme_goods_12 from './data/theme_goods_12.js';
import theme_goods_20 from './data/theme_goods_20.js';
import theme_goods_21 from './data/theme_goods_21.js';
import theme_goods_9 from './data/theme_goods_9.js';

const comma = (n) => {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

//@ 한화면에 4장씩
class GridType4 {
  constructor({ $parent, initialState, initType }) {
    this.state = initialState;
    this.type = initType;
    this.$target = document.createElement('ul');
    $parent.appendChild(this.$target);
    this.render();
  }

  setState(nextState) {
    this.state = nextState;
    this.render();
  }

  render() {
    this.$target.innerHTML = this.state.map((node, i) => {
      let price = +node.price;
      let d = +node.discount;
      let discount = comma(Math.round((price - price * (d / 100)) / 10) * 10) + '원';
      let _price = comma(price) + '원';

      return `<li>
      <div class="item-img-wrapper"><img src="/images/items/${node.image}" alt="상품이미지" /> </div>
      <div class="item-info">
        <div class="item-name">${node.name}</div>
        ${
          d != 0
            ? "<div class='discount'>" +
              d +
              '% <span class="price">' +
              discount +
              '</span>' +
              '</div>' +
              '<div class="cancel-price">' +
              _price +
              '</div>'
            : "<div class='price'>" + _price + '</div>'
        }
      </div>      
      </li>`;
    }).join("");
  }
}

const _gridType4 = [
  ['today_recommendation', today_recommendation],
  ['md_choice', md_choice],
  ['theme_goods_11', theme_goods_11],
  ['theme_goods_12', theme_goods_12],
  ['theme_goods_20', theme_goods_20],
  ['theme_goods_21', theme_goods_21],
  ['theme_goods_9', theme_goods_9],
];

_gridType4.forEach((a) => {
  new GridType4({
    $parent: document.getElementById(a[0]),
    initialState: a[1],
    initType: a[0],
  });
});

//@ 한화면에 3장씩
class GridType3 {
  constructor({ $parent, initialState, initType }) {
    this.state = initialState;
    this.type = initType;
    this.$target = document.createElement('ul');
    $parent.appendChild(this.$target);
    this.render();
  }

  setState(nextState) {
    this.state = nextState;
    this.render();
  }

  render() {
    this.$target.innerHTML = this.state.map((node, i) => {
      return `<li class=${this.type}>
      <div class="item-img-wrapper"><img src="/images/items/${this.type}/${i}.jpeg" alt="상품이미지" /> </div>
      <div class="item-info">
        <div class="item-title">${node.title}</div>
        ${!!node.subtitle ? '<div class="item-subtitle">' + node.subtitle + '</div>' : ''}
      </li>`;
    }).join("");
  }
}

const _gridType3 = [
  ['event', event],
  ['recipe', recipe],
];

_gridType3.forEach((a) => {
  new GridType3({
    $parent: document.getElementById(a[0]),
    initialState: a[1],
    initType: a[0],
  });
});

//@ 한화면에 6장씩
class GridType6 {
  constructor({ $parent, initialState, initType }) {
    this.state = initialState;
    this.type = initType;
    this.$target = document.createElement('ul');
    $parent.appendChild(this.$target);
    this.render();
  }

  setState(nextState) {
    this.state = nextState;
    this.render();
  }

  render() {
    this.$target.innerHTML = this.state.map((node, i) => {
      return `<li class=${this.type}>
      <a href="#" class="item-img-wrapper"><img src="/images/items/${node.image}" alt="상품이미지" /></a>
      </li>`;
    }).join("");
  }
}

new GridType6({
  $parent: document.getElementById('instargram'),
  initialState: instargram,
  initType: 'instargram',
});
