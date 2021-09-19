(function M3WebApi() {

    function getProducts() {
        var baseURL = "https://localhost:1000/Products";
        var queryString = "";

        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = doAfterGetProducts;

        xhr.open("GET", baseURL + queryString, true);
        xhr.send();

        function doAfterGetProducts() {

            if (xhr.readyState === 4) { //done
                if (xhr.status === 200) { //ok
                    //alert(xhr.responseText);

                    var response = JSON.parse(xhr.responseText);

                    if (response.result === "success") {
                        var products = response.products;
                        Show.message.alert("Success");
                        
                    } else {
                        alert("API Error: " + response.message);
                    }

                } else {
                    alert("Server Error: " + xhr.statusText);
                }
            }
        }
    }

    function handleSearch() {
        
        var search = textSearch.value;

        var baseURL = "https://localhost:1000/Products/SearchProducts" + "&search=" + search;
        var queryString = "";

        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = doAfterSearchProducts;

        xhr.open("GET", baseURL + queryString, true);
        xhr.send();

        function doAfterSearchProducts() {

            if (xhr.readyState === 4) { //done
                if (xhr.status === 200) { //ok
                    //alert(xhr.responseText);

                    var response = JSON.parse(xhr.responseText);

                    if (response.result === "success") {
                        var products = response.products;
                        Show.message.alert("success");
                    } else {
                        alert("API Error: " + response.message);
                    }

                } else {
                    alert("Server Error: " + xhr.statusText);
                }
            }
        }
    }

    var textSearch = document.getElementById("textSearch");
    textSearch.addEventListener("input", handleSearch);

    document.getElementById("btn-search").addEventListener("click", getProducts);


    getProducts();

}());