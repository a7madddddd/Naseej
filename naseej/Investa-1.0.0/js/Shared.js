const jwtToken = sessionStorage.getItem('jwtToken');

const loginLogoutBtn = document.getElementById('loginLogoutBtn');

if (jwtToken) {
    loginLogoutBtn.textContent = 'Logout';
    loginLogoutBtn.href = 'index.html'; 
    loginLogoutBtn.addEventListener('click', function () {
        
        sessionStorage.removeItem('jwtToken');
        window.location.reload();
    });
}










async function subscribe() {
    try {
        // Get the email input
        const emailInput = document.getElementById('userEmail');
        const email = emailInput.value.trim();

        // Basic email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            await Swal.fire({
                title: 'Error!',
                text: 'Please enter your email address.',
                icon: 'error'
            });
            return;
        }

        if (!emailPattern.test(email)) {
            await Swal.fire({
                title: 'Error!',
                text: 'Please enter a valid email address.',
                icon: 'error'
            });
            return;
        }

        // Disable button and show loading state
        const subscribeButton = document.getElementById('subscribeButton');
        subscribeButton.disabled = true;
        subscribeButton.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Subscribing...';

        // Send the subscription request
        const response = await fetch('http://localhost:25025/api/NewsLatters/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(email)  // Send just the email string
        });

        // Reset button state
        subscribeButton.disabled = false;
        subscribeButton.innerHTML = 'Subscribe';

        if (response.ok) {
            // Show success message
            await Swal.fire({
                title: 'Success!',
                text: 'Thank you for subscribing to our newsletter!',
                icon: 'success'
            });

            // Clear the input field
            emailInput.value = '';
        } else {
            const errorMessage = await response.text();
            throw new Error(errorMessage);
        }
    } catch (error) {
        console.error('Subscription error:', error);
        await Swal.fire({
            title: 'Error!',
            text: 'Failed to subscribe. Please try again later.',
            icon: 'error'
        });
    }
}






// Add enter key support for the email input
document.addEventListener('DOMContentLoaded', function () {
    const emailInput = document.getElementById('userEmail');
    if (emailInput) {
        emailInput.addEventListener('keypress', function (event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                subscribe();
            }
        });
    }
}); async function subscribe() {
    try {
        // Get the email input
        const emailInput = document.getElementById('userEmail');
        const email = emailInput.value.trim();

        // Basic email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            await Swal.fire({
                title: 'Error!',
                text: 'Please enter your email address.',
                icon: 'error'
            });
            return;
        }

        if (!emailPattern.test(email)) {
            await Swal.fire({
                title: 'Error!',
                text: 'Please enter a valid email address.',
                icon: 'error'
            });
            return;
        }

        // Disable button and show loading state
        const subscribeButton = document.getElementById('subscribeButton');
        subscribeButton.disabled = true;
        subscribeButton.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Subscribing...';

        // Send the subscription request
        const response = await fetch('http://localhost:25025/api/NewsLatters/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(email)  // Send just the email string
        });

        // Reset button state
        subscribeButton.disabled = false;
        subscribeButton.innerHTML = 'Subscribe';

        if (response.ok) {
            // Show success message
            await Swal.fire({
                title: 'Success!',
                text: 'Thank you for subscribing to our newsletter!',
                icon: 'success'
            });

            // Clear the input field
            emailInput.value = '';
        } else {
            const errorMessage = await response.text();
            throw new Error(errorMessage);
        }
    } catch (error) {
        console.error('Subscription error:', error);
        await Swal.fire({
            title: 'Error!',
            text: 'Failed to subscribe. Please try again later.',
            icon: 'error'
        });
    }
}

// Add enter key support for the email input
document.addEventListener('DOMContentLoaded', function () {
    const emailInput = document.getElementById('userEmail');
    if (emailInput) {
        emailInput.addEventListener('keypress', function (event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                subscribe();
            }
        });
    }
});












    // < !--Footer Start-- >
    // <div class="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
    //     <div class="container py-5">
    //         <div class="row g-5">
    //         <div class="col-md-6 col-lg-6 col-xl-3">
    //             <div class="footer-item d-flex flex-column">
    //                 <div class="footer-item">
    //                     <h4 class="text-white mb-4">Newsletter</h4>
    //                     <p class="mb-3">Stay updated with our latest news and updates. Subscribe to our newsletter!</p>
    //                     <div class="position-relative mx-auto">
    //                         <input class="form-control rounded-pill w-100 py-3 ps-4 pe-5" type="email"
    //                             placeholder="Enter your email" id="userEmail" aria-label="Newsletter subscription email">
    //                         <button type="button" class="btn btn-primary rounded-pill position-absolute top-0 end-0 py-2 mt-2 me-2"
    //                             onclick="subscribe()" id="subscribeButton">
    //                             Subscribe
    //                         </button>
    //                     </div>
    //                     <div class="mt-2 text-white-50 small">
    //                         We respect your privacy and will never share your email.
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //             <div class="col-md-6 col-lg-6 col-xl-3">
    //                 <div class="footer-item d-flex flex-column">
    //                     <h4 class="text-white mb-4">Explore</h4>
    //                     <a href="#"><i class="fas fa-angle-right me-2"></i> Home</a>
    //                     <a href="#"><i class="fas fa-angle-right me-2"></i> Services</a>
    //                     <a href="#"><i class="fas fa-angle-right me-2"></i> About Us</a>
    //                     <a href="#"><i class="fas fa-angle-right me-2"></i> Latest Projects</a>
    //                     <a href="#"><i class="fas fa-angle-right me-2"></i> testimonial</a>
    //                     <a href="#"><i class="fas fa-angle-right me-2"></i> Our Team</a>
    //                     <a href="#"><i class="fas fa-angle-right me-2"></i> Contact Us</a>
    //                 </div>
    //             </div>
    //             <div class="col-md-6 col-lg-6 col-xl-3">
    //                 <div class="footer-item d-flex flex-column">
    //                     <h4 class="text-white mb-4">Contact Info</h4>
    //                     <a href=""><i class="fa fa-map-marker-alt me-2"></i> Ajloun, jordan</a>
    //                     <a href=""><i class="fas fa-envelope me-2"></i> Naseej.jordan@gmail.com</a>
    //                     <a href=""><i class="fas fa-envelope me-2"></i> Naseej.jordan@gmail.com</a>
    //                     <a href=""><i class="fas fa-phone me-2"></i> +962 7 8683 1111</a>
    //                     <a href="" class="mb-3"><i class="fas fa-print me-2"></i> +962 7 8683 1111</a>
    //                     <div class="d-flex align-items-center">
    //                         <a class="btn btn-light btn-md-square me-2" href=""><i class="fab fa-facebook-f"></i></a>
    //                         <a class="btn btn-light btn-md-square me-2" href=""><i class="fab fa-twitter"></i></a>
    //                         <a class="btn btn-light btn-md-square me-2" href=""><i class="fab fa-instagram"></i></a>
    //                         <a class="btn btn-light btn-md-square me-0" href=""><i class="fab fa-linkedin-in"></i></a>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div class="col-md-6 col-lg-6 col-xl-3">
    //                 <div class="footer-item-post d-flex flex-column">
    //                     <h4 class="text-white mb-4">Popular Post</h4>
    //                     <div class="d-flex flex-column mb-3">
    //                         <p class="text-uppercase text-primary mb-2">Investment</p>
    //                         <a href="#" class="text-body">Revisiting Your Investment & Distribution Goals</a>
    //                     </div>
    //                     <div class="d-flex flex-column mb-3">
    //                         <p class="text-uppercase text-primary mb-2">Business</p>
    //                         <a href="#" class="text-body">Dimensional Fund Advisors Interview with Director</a>
    //                     </div>
    //                     <div class="footer-btn text-start">
    //                         <a href="#" class="btn btn-light rounded-pill px-4">View All Post <i
    //                                 class="fa fa-arrow-right ms-1"></i></a>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    // <!--Footer End-- >


    // < !--Copyright Start-- >
    // <div class="container-fluid copyright py-4">
    //     <div class="container">
    //         <div class="row g-4 align-items-center">
    //             <div class="col-md-6 text-center text-md-start mb-md-0">
    //                 <span class="text-body"><a href="#" class="border-bottom text-primary"><i
    //                             class="fas fa-copyright text-light me-2"></i>Your Site Name</a>, All right
    //                     reserved.</span>
    //             </div>
    //             <div class="col-md-6 text-center text-md-end text-body">
    //                 <!--/*** This template is free as long as you keep the below author’s credit link/attribution link/backlink. ***/-->
    //                 <!--/*** If you'd like to use the template without the below author’s credit link/attribution link/backlink, ***/-->
    //                 <!--/*** you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". ***/-->
    //                 Designed By <a class="border-bottom text-primary" href="https://htmlcodex.com">HTML Codex</a>
    //                 Distributed By <a class="border-bottom text-primary" href="https://themewagon.com">ThemeWagon</a>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    // <!--Copyright End-- >



    // <a href="#" class="btn btn-primary btn-lg-square back-to-top"><i class="fa fa-arrow-up"></i></a>








    //   < !--Footer Start-- >
    // <div class="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
    //     <div class="container py-5">
    //         <div class="row g-5">
    //             <div class="col-md-6 col-lg-6 col-xl-3">
    //                 <div class="footer-item d-flex flex-column">
    //                     <div class="footer-item">
    //                         <h4 class="text-white mb-4">Newsletter</h4>
    //                         <p class="mb-3">Dolor amet sit justo amet elitr clita ipsum elitr est.Lorem ipsum dolor sit
    //                             amet, consectetur adipiscing elit consectetur adipiscing elit.</p>
    //                         <div class="position-relative mx-auto rounded-pill">
    //                             <input class="form-control rounded-pill w-100 py-3 ps-4 pe-5" type="text"
    //                                 placeholder="Enter your email">
    //                             <button type="button" class="btn btn-primary rounded-pill position-absolute top-0 end-0 py-2 mt-2 me-2" //
    //                                 onclick="subscribe()" id="subscribeButton">
    //                                  Subscribe
    //                                 </button>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div class="col-md-6 col-lg-6 col-xl-3">
    //                 <div class="footer-item d-flex flex-column">
    //                     <h4 class="text-white mb-4">Explore</h4>
    //                     <a href="#"><i class="fas fa-angle-right me-2"></i> Home</a>
    //                     <a href="#"><i class="fas fa-angle-right me-2"></i> Services</a>
    //                     <a href="#"><i class="fas fa-angle-right me-2"></i> About Us</a>
    //                     <a href="#"><i class="fas fa-angle-right me-2"></i> Latest Projects</a>
    //                     <a href="#"><i class="fas fa-angle-right me-2"></i> testimonial</a>
    //                     <a href="#"><i class="fas fa-angle-right me-2"></i> Our Team</a>
    //                     <a href="#"><i class="fas fa-angle-right me-2"></i> Contact Us</a>
    //                 </div>
    //             </div>
    //             <div class="col-md-6 col-lg-6 col-xl-3">
    //                 <div class="footer-item d-flex flex-column">
    //                     <h4 class="text-white mb-4">Contact Info</h4>
    //                     <a href=""><i class="fa fa-map-marker-alt me-2"></i> Ajloun, jordan</a>
    //                     <a href=""><i class="fas fa-envelope me-2"></i> Naseej.jordan@gmail.com</a>
    //                     <a href=""><i class="fas fa-envelope me-2"></i> Naseej.jordan@gmail.com</a>
    //                     <a href=""><i class="fas fa-phone me-2"></i> +962 7 8683 1111</a>
    //                     <a href="" class="mb-3"><i class="fas fa-print me-2"></i> +962 7 8683 1111</a>
    //                     <div class="d-flex align-items-center">
    //                         <a class="btn btn-light btn-md-square me-2" href=""><i class="fab fa-facebook-f"></i></a>
    //                         <a class="btn btn-light btn-md-square me-2" href=""><i class="fab fa-twitter"></i></a>
    //                         <a class="btn btn-light btn-md-square me-2" href=""><i class="fab fa-instagram"></i></a>
    //                         <a class="btn btn-light btn-md-square me-0" href=""><i class="fab fa-linkedin-in"></i></a>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div class="col-md-6 col-lg-6 col-xl-3">
    //                 <div class="footer-item-post d-flex flex-column">
    //                     <h4 class="text-white mb-4">Popular Post</h4>
    //                     <div class="d-flex flex-column mb-3">
    //                         <p class="text-uppercase text-primary mb-2">Investment</p>
    //                         <a href="#" class="text-body">Revisiting Your Investment & Distribution Goals</a>
    //                     </div>
    //                     <div class="d-flex flex-column mb-3">
    //                         <p class="text-uppercase text-primary mb-2">Business</p>
    //                         <a href="#" class="text-body">Dimensional Fund Advisors Interview with Director</a>
    //                     </div>
    //                     <div class="footer-btn text-start">
    //                         <a href="#" class="btn btn-light rounded-pill px-4">View All Post <i
    //                                 class="fa fa-arrow-right ms-1"></i></a>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    // <!--Footer End-- >


    // < !--Copyright Start-- >
    // <div class="container-fluid copyright py-4">
    //     <div class="container">
    //         <div class="row g-4 align-items-center">
    //             <div class="col-md-6 text-center text-md-start mb-md-0">
    //                 <span class="text-body"><a href="#" class="border-bottom text-primary"><i
    //                             class="fas fa-copyright text-light me-2"></i>Your Site Name</a>, All right
    //                     reserved.</span>
    //             </div>
    //             <div class="col-md-6 text-center text-md-end text-body">
    //                 <!--/*** This template is free as long as you keep the below author’s credit link/attribution link/backlink. ***/-->
    //                 <!--/*** If you'd like to use the template without the below author’s credit link/attribution link/backlink, ***/-->
    //                 <!--/*** you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". ***/-->
    //                 Designed By <a class="border-bottom text-primary" href="https://htmlcodex.com">HTML Codex</a>
    //                 Distributed By <a class="border-bottom text-primary" href="https://themewagon.com">ThemeWagon</a>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    // <!--Copyright End-- >


    // < !--Back to Top-- >
    // <a href="#" class="btn btn-primary btn-lg-square back-to-top"><i class="fa fa-arrow-up"></i></a>









