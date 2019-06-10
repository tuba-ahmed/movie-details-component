/** @jsx html */
import { html } from 'snabbdom-jsx';
export default class ContentRenderer extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
        <div>
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Search Text" aria-label="Search Text" id="search_input">
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button" id="search_btn">Search</button>
                </div>
            </div>
            <hr>
            <div style="padding-left: 40%; padding-top: 5%;">
                <slot name="content_html">
                 Fallback Text: No proper content to render. :(
                </slot>
            </div>
        </div>
        `;
        this.handleClick = this.handleClick.bind(this);
        this.handleInput = this.handleInput.bind(this);
        var inputEl = shadowRoot.getElementById('search_input');
        var btn = shadowRoot.getElementById('search_btn');
        inputEl.addEventListener('input', this.handleInput);
        btn.addEventListener('click', this.handleClick);
        this.inputValue = '';
    }
    handleClick(e) {
        this.firstElementChild.setAttribute('moviequery', this.inputValue);
    }
    handleInput(e) {
        this.inputValue = e.srcElement.value;
        e.currentTarget.nextElementSibling.disabled = this.inputValue.length > 0? false: true;
    }
}