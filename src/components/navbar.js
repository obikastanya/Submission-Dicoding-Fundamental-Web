class Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML += `
        <style>
        .navbar{
            background-color: #3a86ff;
            height: 7em;
        }
        #navbarSupportedContent{
            margin-left:45%;
        }
        .navbar-brand:hover{
            color:white;
            transition: 0.8s;
        }
        .navbar-brand{
            color:#ffbe0b;
            font-size:2em;
            font-weight:750;
        }
        .btn{
            background-color: #ffbe0b;
            border: 1px solid white;
        }
        .btn:hover{
            opacity:0.9;
            border: 1px solid #ffbe0b;
            color: #ffbe0b;
            background-color: white;
            transition: 0.8s;
        }
        
        </style>
        <nav class="navbar navbar-expand-lg sticky-top">
        <a class="navbar-brand" id="gohome" href="">Maniac Popcorn</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <input id="search" class="form-control mr-sm-2" type="search" placeholder="Find Another Movies Here!" aria-label="Search">
                    <button id="searchSubmit" class="btn my-2 my-sm-0" type="submit">Search</button>
        </div>
    </nav>`;
    }
}
customElements.define("nav-bar", Navbar);