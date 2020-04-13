import { getRenderer } from '/Users/eugeneghanizadeh/Documents/projects/connect/codedoc-boilerplate/node_modules/@codedoc/core/dist/es5/transport/renderer.js';
import { initJssCs } from '/Users/eugeneghanizadeh/Documents/projects/connect/codedoc-boilerplate/node_modules/@codedoc/core/dist/es5/transport/setup-jss.js';initJssCs();
import { installTheme } from '/Users/eugeneghanizadeh/Documents/projects/connect/codedoc-boilerplate/.codedoc/build/theme.ts';installTheme();
import { codeSelection } from '/Users/eugeneghanizadeh/Documents/projects/connect/codedoc-boilerplate/node_modules/@codedoc/core/dist/es5/components/code/selection.js';codeSelection();
import { sameLineLengthInCodes } from '/Users/eugeneghanizadeh/Documents/projects/connect/codedoc-boilerplate/node_modules/@codedoc/core/dist/es5/components/code/same-line-length.js';sameLineLengthInCodes();
import { initHintBox } from '/Users/eugeneghanizadeh/Documents/projects/connect/codedoc-boilerplate/node_modules/@codedoc/core/dist/es5/components/code/line-hint/index.js';initHintBox();
import { initCodeLineRef } from '/Users/eugeneghanizadeh/Documents/projects/connect/codedoc-boilerplate/node_modules/@codedoc/core/dist/es5/components/code/line-ref/index.js';initCodeLineRef();
import { initSmartCopy } from '/Users/eugeneghanizadeh/Documents/projects/connect/codedoc-boilerplate/node_modules/@codedoc/core/dist/es5/components/code/smart-copy.js';initSmartCopy();
import { copyHeadings } from '/Users/eugeneghanizadeh/Documents/projects/connect/codedoc-boilerplate/node_modules/@codedoc/core/dist/es5/components/heading/copy-headings.js';copyHeadings();
import { contentNavHighlight } from '/Users/eugeneghanizadeh/Documents/projects/connect/codedoc-boilerplate/node_modules/@codedoc/core/dist/es5/components/page/contentnav/highlight.js';contentNavHighlight();
import { loadDeferredIFrames } from '/Users/eugeneghanizadeh/Documents/projects/connect/codedoc-boilerplate/node_modules/@codedoc/core/dist/es5/transport/deferred-iframe.js';loadDeferredIFrames();
import { smoothLoading } from '/Users/eugeneghanizadeh/Documents/projects/connect/codedoc-boilerplate/node_modules/@codedoc/core/dist/es5/transport/smooth-loading.js';smoothLoading();
import { tocHighlight } from '/Users/eugeneghanizadeh/Documents/projects/connect/codedoc-boilerplate/node_modules/@codedoc/core/dist/es5/components/page/toc/toc-highlight.js';tocHighlight();
import { postNavSearch } from '/Users/eugeneghanizadeh/Documents/projects/connect/codedoc-boilerplate/node_modules/@codedoc/core/dist/es5/transport/post-nav-search.js';postNavSearch();
import { ToCPrevNext } from '/Users/eugeneghanizadeh/Documents/projects/connect/codedoc-boilerplate/node_modules/@codedoc/core/dist/es5/components/page/toc/prevnext/index.js';
import { GithubSearch } from '/Users/eugeneghanizadeh/Documents/projects/connect/codedoc-boilerplate/node_modules/@codedoc/core/dist/es5/components/misc/github/search.js';
import { ToCToggle } from '/Users/eugeneghanizadeh/Documents/projects/connect/codedoc-boilerplate/node_modules/@codedoc/core/dist/es5/components/page/toc/toggle/index.js';
import { DarkModeSwitch } from '/Users/eugeneghanizadeh/Documents/projects/connect/codedoc-boilerplate/node_modules/@codedoc/core/dist/es5/components/darkmode/index.js';
import { ConfigTransport } from '/Users/eugeneghanizadeh/Documents/projects/connect/codedoc-boilerplate/node_modules/@codedoc/core/dist/es5/transport/config.js';
import { TabSelector } from '/Users/eugeneghanizadeh/Documents/projects/connect/codedoc-boilerplate/node_modules/@codedoc/core/dist/es5/components/tabs/selector.js';
import { CollapseControl } from '/Users/eugeneghanizadeh/Documents/projects/connect/codedoc-boilerplate/node_modules/@codedoc/core/dist/es5/components/collapse/collapse-control.js';

const components = {
  'Mn4pScIkvjgoqiM03lAumQ==': ToCPrevNext,
  'h92AjB8AVId5hYmd2mcSzg==': GithubSearch,
  '6QCObElznTHQjOv77cODkg==': ToCToggle,
  'umeDvQ/nUo+FvY1K3dEYUA==': DarkModeSwitch,
  'uhkzSXNRC1NdTH7qS82QZA==': ConfigTransport,
  '+rp6bXAOeMVjs6zXeHoDzg==': TabSelector,
  'IKIn7iezY+paLzZLM1EC5g==': CollapseControl
};

const renderer = getRenderer();
const ogtransport = window.__sdh_transport;
window.__sdh_transport = function(id, hash, props) {
  if (hash in components) {
    const target = document.getElementById(id);
    renderer.render(renderer.create(components[hash], props)).after(target);
    target.remove();
  }
  else if (ogtransport) ogtransport(id, hash, props);
}
