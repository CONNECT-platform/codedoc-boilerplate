import { getRenderer } from '/Users/eugeneghanizadehkhoub/Documents/projects/connect/codedoc-boilerplate/.codedoc/node_modules/@codedoc/core/dist/es6/transport/renderer.js';
import { initJssCs } from '/Users/eugeneghanizadehkhoub/Documents/projects/connect/codedoc-boilerplate/.codedoc/node_modules/@codedoc/core/dist/es6/transport/setup-jss.js';initJssCs();
import { installTheme } from '/Users/eugeneghanizadehkhoub/Documents/projects/connect/codedoc-boilerplate/.codedoc/content/theme.ts';installTheme();
import { codeSelection } from '/Users/eugeneghanizadehkhoub/Documents/projects/connect/codedoc-boilerplate/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/selection.js';codeSelection();
import { sameLineLengthInCodes } from '/Users/eugeneghanizadehkhoub/Documents/projects/connect/codedoc-boilerplate/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/same-line-length.js';sameLineLengthInCodes();
import { initHintBox } from '/Users/eugeneghanizadehkhoub/Documents/projects/connect/codedoc-boilerplate/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-hint/index.js';initHintBox();
import { initCodeLineRef } from '/Users/eugeneghanizadehkhoub/Documents/projects/connect/codedoc-boilerplate/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-ref/index.js';initCodeLineRef();
import { initSmartCopy } from '/Users/eugeneghanizadehkhoub/Documents/projects/connect/codedoc-boilerplate/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/smart-copy.js';initSmartCopy();
import { copyHeadings } from '/Users/eugeneghanizadehkhoub/Documents/projects/connect/codedoc-boilerplate/.codedoc/node_modules/@codedoc/core/dist/es6/components/heading/copy-headings.js';copyHeadings();
import { contentNavHighlight } from '/Users/eugeneghanizadehkhoub/Documents/projects/connect/codedoc-boilerplate/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/contentnav/highlight.js';contentNavHighlight();
import { loadDeferredIFrames } from '/Users/eugeneghanizadehkhoub/Documents/projects/connect/codedoc-boilerplate/.codedoc/node_modules/@codedoc/core/dist/es6/transport/deferred-iframe.js';loadDeferredIFrames();
import { smoothLoading } from '/Users/eugeneghanizadehkhoub/Documents/projects/connect/codedoc-boilerplate/.codedoc/node_modules/@codedoc/core/dist/es6/transport/smooth-loading.js';smoothLoading();
import { tocHighlight } from '/Users/eugeneghanizadehkhoub/Documents/projects/connect/codedoc-boilerplate/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/toc-highlight.js';tocHighlight();
import { postNavSearch } from '/Users/eugeneghanizadehkhoub/Documents/projects/connect/codedoc-boilerplate/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/search/post-nav/index.js';postNavSearch();
import { copyLineLinks } from '/Users/eugeneghanizadehkhoub/Documents/projects/connect/codedoc-boilerplate/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-links/copy-line-link.js';copyLineLinks();
import { gatherFootnotes } from '/Users/eugeneghanizadehkhoub/Documents/projects/connect/codedoc-boilerplate/.codedoc/node_modules/@codedoc/core/dist/es6/components/footnote/gather-footnotes.js';gatherFootnotes();
import { ToCPrevNext } from '/Users/eugeneghanizadehkhoub/Documents/projects/connect/codedoc-boilerplate/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/prevnext/index.js';
import { GithubSearch } from '/Users/eugeneghanizadehkhoub/Documents/projects/connect/codedoc-boilerplate/.codedoc/node_modules/@codedoc/core/dist/es6/components/misc/github/search.js';
import { ToCToggle } from '/Users/eugeneghanizadehkhoub/Documents/projects/connect/codedoc-boilerplate/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/toggle/index.js';
import { DarkModeSwitch } from '/Users/eugeneghanizadehkhoub/Documents/projects/connect/codedoc-boilerplate/.codedoc/node_modules/@codedoc/core/dist/es6/components/darkmode/index.js';
import { ConfigTransport } from '/Users/eugeneghanizadehkhoub/Documents/projects/connect/codedoc-boilerplate/.codedoc/node_modules/@codedoc/core/dist/es6/transport/config.js';
import { TabSelector } from '/Users/eugeneghanizadehkhoub/Documents/projects/connect/codedoc-boilerplate/.codedoc/node_modules/@codedoc/core/dist/es6/components/tabs/selector.js';
import { CollapseControl } from '/Users/eugeneghanizadehkhoub/Documents/projects/connect/codedoc-boilerplate/.codedoc/node_modules/@codedoc/core/dist/es6/components/collapse/collapse-control.js';

const components = {
  'WPLWb+7laH0qGYo/1yuuMw==': ToCPrevNext,
  'iRZVzWUIwPFwcRSR76Q3dg==': GithubSearch,
  'ewS3P9q5dWYiTVkf0IeC6g==': ToCToggle,
  'JAV9od3EkA7nyGAQTH62RA==': DarkModeSwitch,
  'Vom3WOGOXVKH2eL6rqj9zQ==': ConfigTransport,
  'o3Sd/4ef8VSmCri8FlYnaQ==': TabSelector,
  'hzpg2jPDLYl7axDlj9PWHg==': CollapseControl
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
