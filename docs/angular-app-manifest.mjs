
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "route": "/taskdigitalbond"
  }
],
  assets: new Map([
['index.csr.html', {size: 5710, hash: '4f31f1b297aaf3744027dcfd5e1aab3691af73061ad32233686a0c2c638d63e4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1208, hash: 'bc60b110336bacfe14d9197ee72e1f66856457fcda9c98b4fcbb9ce4b81bb26a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['index.html', {size: 62615, hash: '17e54c6a3d8be1950660bb07c9bc0508da0ee64127ec9a56b77da3f8d639c30d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}], 
['main-IIO3AIVH.css', {size: 26054, hash: '3KMEVki9tus', text: () => import('./assets-chunks/main-IIO3AIVH_css.mjs').then(m => m.default)}], 
['main.server.css', {size: 26054, hash: '3KMEVki9tus', text: () => import('./assets-chunks/main_server_css.mjs').then(m => m.default)}], 
['styles-B3SA6HC3.css', {size: 265112, hash: 'Qc6lqRfUEFg', text: () => import('./assets-chunks/styles-B3SA6HC3_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
