document.getElementById("fetchData").addEventListener("click", () => {
    fetch("http://127.0.0.1:55745/api")  // Use the Minikube URL here
        .then(response => response.json())
        .then(data => {
            document.getElementById("output").innerText = data.message;
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            document.getElementById("output").innerText = "Error fetching data!";
        });
});
