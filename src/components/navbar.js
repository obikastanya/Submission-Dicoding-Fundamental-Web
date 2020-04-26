class Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML += `
        <style>
        .navbar-toggler-icon{
            background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 1)' stroke-width='3' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
        }
        .navbar{
            background-color: #3a86ff;
            height: 7em;
        }
        @media only screen and (max-width: 900px){
            #navbarSupportedContent{
                margin-left:0!important;
            }
            #search{
                margin: 10px 10px 10px 0px ;
            }
            .navbar{
                height: 12em!important;
             }
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