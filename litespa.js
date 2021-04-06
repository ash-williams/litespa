const litespa_content_element = document.querySelector('[litespa-content]');
const litespa_link_elements = document.querySelectorAll('[litespa-link]');

window.addEventListener("load", () => {
    console.log(window.location.hash);
    if(window.location.hash === null || window.location.hash === ""){
        try{
            const litespa_default_link = document.querySelector('[litespa-default]');
            const route = litespa_default_link.getAttribute('litespa-link').toLowerCase();
            window.location.hash = route;
            getPage(route);
        }catch{
            throw 'Did you include a default link?';
        }
        
    }else{
        getPage(window.location.hash.substr(1));
    }
});

litespa_link_elements.forEach((e) => {
    const route = e.getAttribute('litespa-link').toLowerCase();
    const name = route.substr(1);
    
    e.addEventListener("click", () => {
        window.location.hash = route;
        getPage(route);  
    });
});

const getPage = (route) => {
    const page = './pages' + route + ".html";
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4) {
            if (this.status == 200) {litespa_content_element.innerHTML = this.responseText;}
            if (this.status == 404) {litespa_content_element.innerHTML = "Page not found.";}
        }
    }      
    xhttp.open("GET", page, true);
    xhttp.send();
}


