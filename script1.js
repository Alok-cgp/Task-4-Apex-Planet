// Theme toggle
document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("theme-toggle");
  
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");
    });
  });
  document.getElementById("see-more-btn").addEventListener("click", function() {
    var moreProjects = document.getElementById("more-projects");
    var seeMoreBtn = document.getElementById("see-more-btn");
    
    if (moreProjects.style.display === "none") {
        moreProjects.style.display = "block";
        seeMoreBtn.textContent = "See Less Projects";
    } else {
        moreProjects.style.display = "none";
        seeMoreBtn.textContent = "See More Projects";
    }
});

      // Form submission and validation
      document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting traditionally
        
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Basic validation
        if (name && email && message) {
            // Display success message
            document.getElementById("form-message").style.display = "block";
            document.getElementById("contact-form").reset(); // Reset form after submission
        } else {
            alert("Please fill in all the fields.");
        }
    });