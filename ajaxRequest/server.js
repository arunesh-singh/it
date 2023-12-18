function submitForm() {
  // Get form values
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const age = document.getElementById("age").value;
  const birthday = document.getElementById("birthday").value;
  const foodPreferences = document.getElementById("foodPreferences").value;

  // Create Customer object
  const customer = {
    firstName: firstName,
    lastName: lastName,
    age: age,
    birthday: birthday,
    foodPreferences: foodPreferences,
  };

  // Create JSON object
  const customerJSON = JSON.stringify(customer);

  // Print objects to console
  console.log("Customer Object:", customer);
  console.log("JSON Object:", customerJSON);

  // Display customer data using AJAX
  displayCustomerData(customerJSON);
}

function displayCustomerData(customerJSON) {
  // Assuming you have a server endpoint to handle AJAX requests
  const url = "your_server_endpoint";
  const xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const response = JSON.parse(this.responseText);
      document.getElementById("customerOutput").innerHTML = `
                <p><strong>Customer 1:</strong> ${customerJSON}</p>
                <p><strong>Customer 2:</strong> ${JSON.stringify(response)}</p>
            `;
    }
  };

  // Send data to server
  xhttp.open("POST", url, true);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.send(customerJSON);
}
