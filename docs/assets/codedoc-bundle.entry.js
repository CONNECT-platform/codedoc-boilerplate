import { getRenderer } from '/Users/eugeneghanizadeh/Documents/projects/connect/codedoc-boilerplate/.codedoc/node_modules/@codedoc/core/dist/es6/transport/renderer.js';
import { initJssCs } from '/Users/eugeneghanizadeh/Documents/projects/connect/codedoc-boilerplate/.codedoc/node_modules/@codedoc/core/dist/es6/transport/setup-jss.js';initJssCs();
import { installTheme } from '/Users/eugeneghanizadeh/Documents/projects/connect/codedoc-boilerplate/.codedoc/content/theme.ts';installTheme();
import { codeSelection } from '/Users/eugeneghanizadeh/Documents/projects/connect/codedoc-boilerplate/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/selection.js';codeSelection();
import { sameLineLengthInCodes } from '/Users/eugeneghanizadeh/Documents/projects/connect/codedoc-boilerplate/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/same-line-length.js';sameLineLengthInCodes();
import { initHintBox } from '/Users/eugeneghanizadeh/Documents/projects/connect/codedoc-boilerplate/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-hint/index.js';initHintBox();
import { initCodeLineRef } from '/Users/eugeneghanizadeh/Documents/projects/connect/codedoc-boilerplate/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-ref/index.js';initCodeLineRef();
import { initSmartCopy } from '/Users/eugeneghanizadeh/Documents/projects/connect/codedoc-boilerplate/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/smart-copy.js';initSmartCopy();
import { copyHeadings } from '/Users/eugeneghanizadeh/Documents/projects/connect/codedoc-boilerplate/.codedoc/node_modules/@codedoc/core/dist/es6/components/heading/copy-headings.js';copyHeadings();
import { contentNavHighlight } from '/Users/eugeneghanizadeh/Documents/projects/connect/codedoc-boilerplate/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/contentnav/highlight.js';contentNavHighlight();
import { loadDeferredIFrames } from '/Users/eugeneghanizadeh/Documents/projects/connect/codedoc-boilerplate/.codedoc/node_modules/@codedoc/core/dist/es6/transport/deferred-iframe.js';loadDeferredIFrames();
import { smoothLoading } from '/Users/eugeneghanizadeh/Documents/projects/connect/codedoc-boilerplate/.codedoc/node_modules/@codedoc/core/dist/es6/transport/smooth-loading.js';smoothLoading();
import { tocHighlight } from '/Users/eugeneghanizadeh/Documents/projects/connect/codedoc-boilerplate/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/toc-highlight.js';tocHighlight();
import { postNavSearch } from '/Users/eugeneghanizadeh/Documents/projects/connect/codedoc-boilerplate/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/search/post-nav/index.js';postNavSearch();
import { copyLineLinks } from '/Users/eugeneghanizadeh/Documents/projects/connect/codedoc-boilerplate/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-links/copy-line-link.js';copyLineLinks();
import { gatherFootnotes } from '/Users/eugeneghanizadeh/Documents/projects/connect/codedoc-boilerplate/.codedoc/node_modules/@codedoc/core/dist/es6/components/footnote/gather-footnotes.js';gatherFootnotes();
import { ToCPrevNext } from '/Users/eugeneghanizadeh/Documents/projects/connect/codedoc-boilerplate/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/prevnext/index.js';
import { GithubSearch } from '/Users/eugeneghanizadeh/Documents/projects/connect/codedoc-boilerplate/.codedoc/node_modules/@codedoc/core/dist/es6/components/misc/github/search.js';
import { ToCToggle } from '/Users/eugeneghanizadeh/Documents/projects/connect/codedoc-boilerplate/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/toggle/index.js';
import { DarkModeSwitch } from '/Users/eugeneghanizadeh/Documents/projects/connect/codedoc-boilerplate/.codedoc/node_modules/@codedoc/core/dist/es6/components/darkmode/index.js';
import { ConfigTransport } from '/Users/eugeneghanizadeh/Documents/projects/connect/codedoc-boilerplate/.codedoc/node_modules/@codedoc/core/dist/es6/transport/config.js';
import { TabSelector } from '/Users/eugeneghanizadeh/Documents/projects/connect/codedoc-boilerplate/.codedoc/node_modules/@codedoc/core/dist/es6/components/tabs/selector.js';
import { CollapseControl } from '/Users/eugeneghanizadeh/Documents/projects/connect/codedoc-boilerplate/.codedoc/node_modules/@codedoc/core/dist/es6/components/collapse/collapse-control.js';

const components = {
  'BsTJUKYCtsqMqMIVMgp9Og==': ToCPrevNext,
  'ydmLi92ULtnY0HTyT+4QAQ==': GithubSearch,
  '+HVUa12UPWz50rBZ/bkIag==': ToCToggle,
  'Hlcq5x15FRKhrnNjyjiIfw==': DarkModeSwitch,
  'tW/40an18Oru7qhlg+vhLw==': ConfigTransport,
  'rUHezQ/PRD6Oih/9tF96BQ==': TabSelector,
  'Tsc7PUTPjUuqMmKTMal3fA==': CollapseControl
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
