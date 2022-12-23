function search() {
    if (document.getElementById("search_input").value != "") {
        window.location.href = "https://cn.bing.com/search?q=" + document.getElementById("search_input").value;
        document.getElementById("search_input").value = "";
    }
    return false;
} 
