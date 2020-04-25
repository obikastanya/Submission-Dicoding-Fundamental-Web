class Footer extends HTMLElement {
    connectedCallback() {

        this.innerHTML += `    
        <style>
        .foot{
            height: 10em;
            padding: 2% 2% 2% 5%;
            background-color: #011627;
            color: white;
        }
        .foot p{
            font-size: 0.8em;
        }

        </style>
    <div class="foot sticky-bottom">
        <h1>Maniac Popcorn</h1>
        <p>Search and Find popular movies here </p>
        <p>Copyright: @obikastanya</p>
    </div>`;
    }
}
customElements.define("foot-er", Footer)