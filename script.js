document.addEventListener('DOMContentLoaded', function() {
    var header = document.getElementById('myHeader');
	  var page = document.getElementById('page');
    var openMenuButton = document.getElementById('openmenu');

    window.addEventListener('scroll', function() {
				page.classList.remove('menuopen');
        if (window.scrollY >= 100) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    // Event listener to remove the sticky class when the button is clicked
    openMenuButton.addEventListener('click', function() {
        header.classList.remove('sticky');
				page.classList.add('menuopen');
    });
	
	var links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // Prevent the default action
            event.preventDefault();

            // Get the target element
            var targetId = this.getAttribute('href');
            var targetElement = document.querySelector(targetId);

            // Smooth scroll to target
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
function downloadCV() {
    // Replace 'cv_file_path' with the actual file path of your CV
    var cvFilePath = 'imag/CV.pdf';
    // Create a temporary link element
    var link = document.createElement('a');
    link.href = cvFilePath;
    // Set the download attribute to force download
    link.download = 'CV.pdf';
    // Append the link to the document body
    document.body.appendChild(link);
    // Trigger the click event to start the download
    link.click();
    // Remove the link from the document body
    document.body.removeChild(link);
        }
        function downloadrs() {
            // Replace 'cv_file_path' with the actual file path of your CV
            var cvFilePaths = 'imag/res.pdf';
            // Create a temporary link element
            var link = document.createElement('b');
            link.href = cvFilePaths;
            // Set the download attribute to force download
            link.download = 'res.pdf';
            // Append the link to the document body
            document.body.appendChild(link);
            // Trigger the click event to start the download
            link.click();
            // Remove the link from the document body
            document.body.removeChild(link);
                };


                // Get all the targeted href links
const links = document.querySelectorAll('.targeted-links');
// Add event listeners to each link
links.forEach(link => {
  link.addEventListener('click', function(event) {
    // Prevent the default link behavior
    event.preventDefault();
    // Get the link location from a different attribute
    const linkLocation = this.getAttribute('data-link-location');
    // Perform any desired actions
    // For example, you can redirect to the link location
    window.location.href = linkLocation;
   
  });
});


