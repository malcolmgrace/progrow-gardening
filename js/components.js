// ProGrow Gardening - Site-wide Components
// Edit contact info, social links, and service areas in ONE place below

// ============================================
// EDIT YOUR SITE DATA HERE
// ============================================
const siteData = {
    // Contact Information
    phone: '(249) 878 9140',
    email: 'admin@progrowgardening.ca',
    address: '367 Bankside Way, Nepean, ON K2J 6K4',
    
    // Social Media Links
    facebook: 'https://www.facebook.com/profile.php?id=61574774193213',
    instagram: 'https://www.instagram.com/progrowgardening?igsh=cHZjYXo3bm1qeWFk&utm_source=qr',
    
    // Service Areas
    serviceAreas: [
        'Nepean',
        'Barrhaven',
        'Manotick',
        'Kanata',
        'Riverside South'
    ]
};

// ============================================
// DON'T EDIT BELOW (unless you know what you're doing)
// ============================================

// Topbar Component
function renderTopbar() {
    return `
    <div class="topbar container-fluid bg-dark text-light px-0 py-2">
        <div class="row gx-0 d-none d-lg-flex">
            <div class="col-lg-7 px-5 text-start">
                <div class="h-100 d-inline-flex align-items-center me-4">
                    <span class="fa fa-phone-alt me-2"></span>
                    <span>${siteData.phone}</span>
                </div>
                <div class="h-100 d-inline-flex align-items-center">
                    <span class="far fa-envelope me-2"></span>
                    <span>${siteData.email}</span>
                </div>
            </div>
            <div class="col-lg-5 px-5 text-end">
                <div class="h-100 d-inline-flex align-items-center mx-n2">
                    <a class="btn btn-square btn-link rounded-0 border-0 border-end border-secondary text-white" href="${siteData.facebook}" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-f"></i></a>
                    <a class="btn btn-square btn-link rounded-0 border-0 border-end border-secondary text-white" href="${siteData.instagram}" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    </div>
    `;
}

// Navbar Component
function renderNavbar(currentPage) {
    const isActive = (page) => currentPage === page ? 'active' : '';
    
    return `
    <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
        <a href="index.html" class="navbar-brand"></a>
        <a href="index.html">
            <img src="img/ProGrow_Logo_White.png" alt="ProGrow Gardening Co." class="img-fluid" style="width: 270px; object-fit: cover; object-position: center; height: auto; max-height: 150px;">
        </a>
        <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto p-4 p-lg-0">
                <a href="index.html" class="nav-item nav-link ${isActive('index.html')}">Home</a>
                <a href="about.html" class="nav-item nav-link ${isActive('about.html')}">About Us</a>
                <a href="gallery.html" class="nav-item nav-link ${isActive('gallery.html')}">Gallery</a>
                <a href="services.html" class="nav-item nav-link ${isActive('services.html')}">Our Services</a>
                <a href="contact.html" class="nav-item nav-link ${isActive('contact.html')}">Contact Us</a>
            </div>
            <a href="quote.html" class="btn btn-primary py-4 px-lg-4 rounded-0 d-none d-lg-block">Get A Quote<i class="fa fa-arrow-right ms-3"></i></a>
        </div>
    </nav>
    `;
}

// Footer Component
function renderFooter() {
    const serviceAreasList = siteData.serviceAreas.map(area => 
        `<p class="mb-1">• ${area}</p>`
    ).join('');
    
    const currentYear = new Date().getFullYear();
    
    return `
    <div class="container-fluid bg-dark text-light footer mt-0 py-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-lg-4 col-md-6">
                    <h4 class="text-white mb-4">Our Office</h4>
                    <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>${siteData.address}</p>
                    <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>${siteData.phone}</p>
                    <p class="mb-2"><i class="fa fa-envelope me-3"></i>${siteData.email}</p>
                    <div class="d-flex pt-2">
                        <a class="btn btn-square btn-outline-light rounded-circle me-2" href="${siteData.facebook}" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-square btn-outline-light rounded-circle me-2" href="${siteData.instagram}" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h4 class="text-white mb-4">Quick Links</h4>
                    <a class="btn btn-link" href="index.html">Home</a>
                    <a class="btn btn-link" href="about.html">About Us</a>
                    <a class="btn btn-link" href="gallery.html">Gallery</a>
                    <a class="btn btn-link" href="services.html">Our Services</a>
                    <a class="btn btn-link" href="contact.html">Contact Us</a>
                    <a class="btn btn-link" href="quote.html">Request Quote</a>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h4 class="text-white mb-4">Service Areas</h4>
                    <p>We proudly serve the following Ottawa neighborhoods:</p>
                    ${serviceAreasList}
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid copyright py-4">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <p>&copy; ${currentYear} ProGrow Gardening, All rights reserved.</p>
                </div>
            </div>
        </div>
    </div>

    <a href="#" class="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i class="bi bi-arrow-up"></i></a>
    `;
}

// Initialize components when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Get current page filename
    const path = window.location.pathname;
    const currentPage = path.split('/').pop() || 'index.html';
    
    // Insert topbar
    const topbarPlaceholder = document.getElementById('topbar-placeholder');
    if (topbarPlaceholder) {
        topbarPlaceholder.outerHTML = renderTopbar();
    }
    
    // Insert navbar
    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    if (navbarPlaceholder) {
        navbarPlaceholder.outerHTML = renderNavbar(currentPage);
    }
    
    // Insert footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.outerHTML = renderFooter();
    }
});
