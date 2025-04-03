fetch("/dashboard/get_dashboard_data")
    .then(response => response.json())
    .then(data => {
        console.log("Dashboard data received:", data);  // Debugging output

        // Directly update elements without checking "status"
        document.getElementById("bloodCount").innerText = data.blood_donations || 0;
        document.getElementById("organCount").innerText = data.organ_donations || 0;
        document.getElementById("accidentCount").innerText = data.accidents || 0;
    })
    .catch(error => console.error("Fetch error:", error));

 