// Array to store product data
var products = [];

// Function to add product
function addProduct() {
    // Get product data from input fields
    var productName = document.getElementById("productName").value;
    var productValue = document.getElementById("productValue").value;
    var productQuantity = document.getElementById("productQuantity").value;

    // Add product data to products array
    products.push({
        name: productName,
        value: productValue,
        quantity: productQuantity
    });

    // Render product table
    renderProductTable();

    // Clear input fields
    document.getElementById("productName").value = "";
    document.getElementById("productValue").value = "";
    document.getElementById("productQuantity").value = "";
}

// Function to remove product
function removeProduct(index) {
    // Remove product data from products array
    products.splice(index, 1);

    // Render product table
    renderProductTable();
}

// Function to render product table
function renderProductTable() {
    // Get table body
    var tableBody = document.getElementById("productTable").getElementsByTagName("tbody")[0];

    // Remove existing rows
    tableBody.innerHTML = "";

    // Loop through products array and add rows
    for (var i = 0; i < products.length; i++) {
        var product = products[i];

        var row = document.createElement("tr");

        var nameCell = document.createElement("td");
        nameCell.textContent = product.name;
        row.appendChild(nameCell);

        var valueCell = document.createElement("td");
        valueCell.textContent = product.value;
        row.appendChild(valueCell);

        var quantityCell = document.createElement("td");
        quantityCell.textContent = product.quantity;
        row.appendChild(quantityCell);

        var actionCell = document.createElement("td");

        var removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.onclick = function() {
            removeProduct(i);
        };
        actionCell.appendChild(removeButton);

        row.appendChild(actionCell);

        tableBody.appendChild(row);
    }
}