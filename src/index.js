/** @jsx html */
import { init } from "snabbdom";
import { h } from "snabbdom";
import {attributesModule} from "snabbdom/modules/attributes";
import { html } from 'snabbdom-jsx';
import ContentRenderer from "./ContentRenderer.js";
import MovieDetails from "./MovieDetails.js";
const patch = init([
    attributesModule
]);

customElements.define('content-renderer', ContentRenderer);

customElements.define('movie-details', MovieDetails);

var vnode = <content-renderer>
    <movie-details attrs-slot="content_html" attrs-moviequery=""></movie-details>
</content-renderer>;


window.addEventListener('DOMContentLoaded', () => {
    var container = document.getElementById('appHolder');
    patch(container, vnode);
  });