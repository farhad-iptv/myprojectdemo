// Menu data with enhanced details
const menuData = {
    starters: [
        {
            id: 1,
            name: "Mediterranean Mezze",
            description: "Hummus, tapenade, dolmas, and fresh pita with olive oil drizzle",
            fullDescription: "A delightful selection of Mediterranean appetizers featuring our house-made hummus with tahini, olive tapenade with Kalamata olives, stuffed grape leaves, and warm pita bread drizzled with premium extra virgin olive oil.",
            price: 18,
            image: "https://images.unsplash.com/photo-1541014741259-de529411b96a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            prepTime: "10-15 minutes",
            serves: "2-3 people",
            dietary: "Vegetarian, Vegan option available",
            category: "starters"
        },
        {
            id: 2,
            name: "Asian Spring Rolls",
            description: "Fresh vegetables and herbs wrapped in rice paper, served with peanut sauce",
            fullDescription: "Light and refreshing Vietnamese-style spring rolls filled with crisp lettuce, cucumber, carrots, fresh mint, and cilantro, served with our signature peanut dipping sauce.",
            price: 14,
            image: "https://www.shutterstock.com/image-photo/fried-chinese-spring-rolls-sweet-600nw-640597267.jpg",
            prepTime: "8-12 minutes",
            serves: "1-2 people",
            dietary: "Vegan, Gluten-free",
            category: "starters"
        },
        {
            id: 3,
            name: "Grilled Halloumi",
            description: "Cyprus cheese with honey, sesame seeds, and fresh herbs",
            fullDescription: "Traditional Cypriot halloumi cheese grilled to perfection, drizzled with local wildflower honey, toasted sesame seeds, and garnished with fresh oregano and thyme.",
            price: 16,
            image: "https://media.istockphoto.com/id/1325892125/photo/grilled-halloumi-cheese-with-herbs.jpg?s=612x612&w=0&k=20&c=dGA6FZK4mkIheO_wzM6wJQw_MDp2vgeIG_3bsUTQ8JQ=",
            prepTime: "12-15 minutes",
            serves: "1-2 people",
            dietary: "Vegetarian, Contains dairy",
            category: "starters"
        },
        {
            id: 4,
            name: "Thai Beef Satay",
            description: "Marinated beef skewers with coconut curry dipping sauce",
            fullDescription: "Tender beef strips marinated in lemongrass, galangal, and Thai spices, grilled on bamboo skewers and served with a rich coconut curry dipping sauce.",
            price: 19,
            image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            prepTime: "15-20 minutes",
            serves: "1-2 people",
            dietary: "Contains dairy, Gluten-free",
            category: "starters"
        }
    ],
    mains: [
        {
            id: 5,
            name: "Mediterranean Sea Bass",
            description: "Pan-seared sea bass with lemon herb crust, roasted vegetables, and olive tapenade",
            fullDescription: "Fresh Atlantic sea bass pan-seared to perfection with a Mediterranean herb crust, served alongside roasted seasonal vegetables and our signature olive tapenade made with Kalamata olives.",
            price: 32,
            image: "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            prepTime: "20-25 minutes",
            serves: "1 person",
            dietary: "Gluten-free, Contains fish",
            category: "mains"
        },
        {
            id: 6,
            name: "Thai Green Curry",
            description: "Coconut curry with jasmine rice, fresh basil, and your choice of protein",
            fullDescription: "Authentic Thai green curry made with fresh green chilies, coconut milk, Thai basil, and your choice of chicken, beef, or tofu, served with fragrant jasmine rice.",
            price: 26,
            image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            prepTime: "18-22 minutes",
            serves: "1 person",
            dietary: "Gluten-free, Dairy-free, Vegan option",
            category: "mains"
        },
        {
            id: 7,
            name: "Lamb Moussaka",
            description: "Traditional Greek layered dish with eggplant, lamb, and béchamel sauce",
            fullDescription: "Classic Greek comfort food featuring layers of roasted eggplant, seasoned ground lamb, and creamy béchamel sauce, baked until golden and bubbling.",
            price: 28,
            image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            prepTime: "25-30 minutes",
            serves: "1 person",
            dietary: "Contains dairy, gluten",
            category: "mains"
        },
        {
            id: 8,
            name: "Pad Thai Fusion",
            description: "Traditional pad thai with Mediterranean olives and feta cheese",
            fullDescription: "Our unique fusion take on classic pad thai, featuring rice noodles, tamarind sauce, crushed peanuts, with the addition of Kalamata olives and crumbled feta cheese.",
            price: 24,
            image: "https://thumbs.dreamstime.com/b/chicken-pad-thai-dish-stir-fried-rice-noodles-contemporary-presentation-39980897.jpg",
            prepTime: "15-20 minutes",
            serves: "1 person",
            dietary: "Contains dairy, nuts, gluten-free noodles",
            category: "mains"
        },
        {
            id: 9,
            name: "Grilled Octopus",
            description: "Chargrilled octopus with Asian slaw and Mediterranean herbs",
            fullDescription: "Tender Mediterranean octopus chargrilled and served with a refreshing Asian-inspired slaw and garnished with fresh Mediterranean herbs and lemon.",
            price: 30,
            image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            prepTime: "22-28 minutes",
            serves: "1 person",
            dietary: "Gluten-free, Contains seafood",
            category: "mains"
        }
    ],
    desserts: [
        {
            id: 10,
            name: "Baklava Cheesecake",
            description: "Fusion dessert combining Greek baklava with New York cheesecake",
            fullDescription: "A decadent fusion dessert that marries the flaky, honey-sweetened layers of traditional Greek baklava with the rich, creamy texture of New York-style cheesecake, topped with crushed pistachios.",
            price: 12,
            image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            prepTime: "5-8 minutes",
            serves: "1 person",
            dietary: "Contains dairy, gluten, nuts",
            category: "desserts"
        },
        {
            id: 11,
            name: "Mango Sticky Rice",
            description: "Traditional Thai dessert with coconut milk and toasted sesame",
            fullDescription: "Authentic Thai dessert featuring sweet sticky rice cooked in coconut milk, served with fresh ripe mango slices and topped with toasted sesame seeds and coconut flakes.",
            price: 10,
            image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            prepTime: "8-10 minutes",
            serves: "1 person",
            dietary: "Vegan, Gluten-free",
            category: "desserts"
        },
        {
            id: 12,
            name: "Chocolate Hummus",
            description: "Sweet chickpea-based dessert with fresh berries and mint",
            fullDescription: "An innovative dessert featuring silky smooth chocolate hummus made from chickpeas, cocoa, and maple syrup, served with fresh seasonal berries and mint leaves.",
            price: 9,
            image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            prepTime: "5-7 minutes",
            serves: "1 person",
            dietary: "Vegan, Gluten-free",
            category: "desserts"
        },
        {
            id: 13,
            name: "Galaktoboureko",
            description: "Greek custard pastry with honey syrup and pistachios",
            fullDescription: "Traditional Greek pastry featuring layers of crispy phyllo dough filled with creamy semolina custard, baked until golden and drizzled with honey syrup and crushed pistachios.",
            price: 11,
            image: "https://media.istockphoto.com/id/1418478821/photo/custard-of-galaktoboureko-or-bougatsa-greek-traditional-dessert-baked-in-a-pan-with-syrup-its.jpg?s=612x612&w=0&k=20&c=oiXu8vie8nUKijO5couFiV3EYYNZ3BSkeZxGiWYwBAo=",
            prepTime: "10-12 minutes",
            serves: "1 person",
            dietary: "Contains dairy, gluten, nuts",
            category: "desserts"
        }
    ],
    drinks: [
        {
            id: 14,
            name: "Ouzo Mojito",
            description: "Greek ouzo mixed with fresh mint, lime, and soda water",
            fullDescription: "A refreshing Mediterranean twist on the classic mojito, featuring premium Greek ouzo, muddled fresh mint, lime juice, and sparkling soda water over ice.",
            price: 14,
            image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            prepTime: "3-5 minutes",
            serves: "1 person",
            dietary: "Contains alcohol, Vegan",
            category: "drinks"
        },
        {
            id: 15,
            name: "Thai Basil Lemonade",
            description: "Fresh lemonade infused with Thai basil and ginger",
            fullDescription: "Refreshing house-made lemonade infused with aromatic Thai basil leaves and a hint of fresh ginger, served over ice with a basil sprig garnish.",
            price: 8,
            image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            prepTime: "3-5 minutes",
            serves: "1 person",
            dietary: "Vegan, Gluten-free",
            category: "drinks"
        },
        {
            id: 16,
            name: "Mediterranean Sangria",
            description: "Red wine with Mediterranean fruits and herbs",
            fullDescription: "House-made sangria featuring Spanish red wine infused with Mediterranean fruits including oranges, figs, and grapes, with fresh rosemary and thyme.",
            price: 12,
            image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            prepTime: "2-3 minutes",
            serves: "1 person",
            dietary: "Contains alcohol, Vegan",
            category: "drinks"
        },
        {
            id: 17,
            name: "Coconut Thai Coffee",
            description: "Iced coffee with coconut milk and palm sugar",
            fullDescription: "Rich Thai-style iced coffee made with dark roast coffee, sweetened with palm sugar, and topped with creamy coconut milk for a perfect balance of flavors.",
            price: 6,
            image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            prepTime: "3-5 minutes",
            serves: "1 person",
            dietary: "Vegan, Gluten-free",
            category: "drinks"
        }
    ]
};

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const tabButtons = document.querySelectorAll('.tab-button');
const menuCategories = document.querySelectorAll('.menu-category');
const reservationForm = document.getElementById('reservationForm');
const successMessage = document.getElementById('successMessage');
const modal = document.getElementById('foodModal');
const closeModal = document.querySelector('.close-modal');

// Current selected food item
let currentFood = null;
let currentQuantity = 1;

// Mobile Navigation Toggle
const mobileNav = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileNav.classList.toggle('active');
    document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : 'auto';
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !mobileNav.contains(e.target)) {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Smooth scroll to menu section
function scrollToMenu() {
    document.getElementById('menu').scrollIntoView({
        behavior: 'smooth'
    });
}

// Menu Tab Functionality
function createDishCard(dish) {
    const badges = {
        'starters': 'Appetizer',
        'mains': 'Main Course',
        'desserts': 'Sweet',
        'drinks': 'Beverage'
    };

    return `
        <div class="dish-card" onclick="openFoodModal(${dish.id})">
            <div class="dish-card-image">
                <img src="${dish.image}" alt="${dish.name}">
                <div class="dish-card-overlay"></div>
                <div class="dish-card-badge">${badges[dish.category]}</div>
            </div>
            <div class="dish-card-content">
                <h3>${dish.name}</h3>
                <p>${dish.description}</p>
                <div class="dish-card-footer">
                    <span class="price">$${dish.price}</span>
                    <button class="view-details-btn">View Details</button>
                </div>
            </div>
        </div>
    `;
}

function showMenuCategory(category) {
    const allCategories = document.querySelectorAll('.menu-category');
    const targetCategory = document.getElementById(category);

    // First, fade out current category
    allCategories.forEach(cat => {
        if (cat.classList.contains('active')) {
            cat.classList.add('fade-out');
        }
    });

    // Remove active class from all buttons
    const allTabButtons = document.querySelectorAll('.tab-button');
    allTabButtons.forEach(btn => btn.classList.remove('active'));

    // Add active class to clicked button
    const activeButton = document.querySelector(`[data-category="${category}"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }

    // After fade out animation, switch categories
    setTimeout(() => {
        // Hide all categories and remove fade-out class
        allCategories.forEach(cat => {
            cat.classList.remove('active', 'fade-out');
        });

        // Show selected category
        if (targetCategory) {
            targetCategory.classList.add('active');

            // Ensure the category has content (fallback)
            if (menuData[category]) {
                const dishGrid = targetCategory.querySelector('.dish-grid');
                if (dishGrid && dishGrid.children.length === 0) {
                    dishGrid.innerHTML = menuData[category].map(dish => createDishCard(dish)).join('');
                }
            }

            // Animate in the food items
            animateMenuItems(targetCategory, false);
        }
    }, 300);
}

// Function to animate menu items
function animateMenuItems(categoryElement, isInitial = false) {
    const dishCards = categoryElement.querySelectorAll('.dish-card');

    // Reset all cards to loading state
    dishCards.forEach(card => {
        card.classList.remove('animate-in');
        card.classList.add('loading');
    });

    // Trigger animation with staggered delays
    const baseDelay = isInitial ? 200 : 50; // Longer delay for initial load
    const staggerDelay = isInitial ? 150 : 100; // More dramatic stagger for initial load

    setTimeout(() => {
        dishCards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.remove('loading');
                card.classList.add('animate-in');

                // Add a subtle bounce effect for initial load
                if (isInitial) {
                    card.style.animation = 'bounceIn 0.6s ease-out';
                    setTimeout(() => {
                        card.style.animation = '';
                    }, 600);
                }
            }, index * staggerDelay);
        });
    }, baseDelay);
}

// Add bounce animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes bounceIn {
        0% {
            opacity: 0;
            transform: translateY(30px) scale(0.3);
        }
        50% {
            opacity: 1;
            transform: translateY(-10px) scale(1.05);
        }
        70% {
            transform: translateY(5px) scale(0.98);
        }
        100% {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }
`;
document.head.appendChild(style);

// Initialize menu categories
function initializeMenu() {
    const menuContent = document.querySelector('.menu-content');

    // Clear existing content
    menuContent.innerHTML = '';

    // Create all menu categories
    Object.keys(menuData).forEach(category => {
        // Create category element
        const categoryElement = document.createElement('div');
        categoryElement.className = 'menu-category';
        categoryElement.id = category;

        // Create dish grid
        const dishGrid = document.createElement('div');
        dishGrid.className = 'dish-grid';
        dishGrid.innerHTML = menuData[category].map(dish => createDishCard(dish)).join('');

        categoryElement.appendChild(dishGrid);
        menuContent.appendChild(categoryElement);
    });

    // Show starters by default with initial animation
    setTimeout(() => {
        const startersCategory = document.getElementById('starters');
        if (startersCategory) {
            startersCategory.classList.add('active');

            // Set first tab as active
            const firstTab = document.querySelector('[data-category="starters"]');
            if (firstTab) {
                firstTab.classList.add('active');
            }

            // Animate in with special initial animation
            animateMenuItems(startersCategory, true);
        }
    }, 300);
}

// Tab button event listeners
function initMenuTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            showMenuCategory(category);
        });
    });
}

// Form Validation and Submission
reservationForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(reservationForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const date = formData.get('date');
    const time = formData.get('time');
    const guests = formData.get('guests');
    const occasion = formData.get('occasion');
    const requests = formData.get('requests');

    // Basic validation
    if (!name || !email || !date || !time || !guests) {
        showFormError('Please fill in all required fields');
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showFormError('Please enter a valid email address');
        return;
    }

    // Date validation (must be today or future)
    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
        showFormError('Please select a date from today onwards');
        return;
    }

    // Time validation (restaurant hours)
    const selectedTime = time.split(':');
    const hour = parseInt(selectedTime[0]);
    const dayOfWeek = selectedDate.getDay(); // 0 = Sunday, 6 = Saturday

    let validTime = false;
    if (dayOfWeek === 0) { // Sunday
        validTime = hour >= 16 && hour < 21; // 4 PM - 9 PM
    } else if (dayOfWeek >= 1 && dayOfWeek <= 4) { // Monday - Thursday
        validTime = hour >= 17 && hour < 22; // 5 PM - 10 PM
    } else { // Friday - Saturday
        validTime = hour >= 17 && hour < 23; // 5 PM - 11 PM
    }

    if (!validTime) {
        showFormError('Please select a time during our operating hours. Check our schedule in the footer.');
        return;
    }

    // Format date for display
    const formattedDate = selectedDate.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // Format time for display
    const formattedTime = new Date(`2000-01-01T${time}`).toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    });

    // Show success message with details
    const successDetails = document.getElementById('successDetails');
    successDetails.innerHTML = `
        <h4>Reservation Details:</h4>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Date:</strong> ${formattedDate}</p>
        <p><strong>Time:</strong> ${formattedTime}</p>
        <p><strong>Guests:</strong> ${guests}</p>
        ${occasion ? `<p><strong>Occasion:</strong> ${occasion}</p>` : ''}
        ${requests ? `<p><strong>Special Requests:</strong> ${requests}</p>` : ''}
    `;

    reservationForm.style.display = 'none';
    successMessage.classList.add('show');

    // Reset form after 8 seconds
    setTimeout(() => {
        reservationForm.style.display = 'block';
        successMessage.classList.remove('show');
        reservationForm.reset();
    }, 8000);
});

function showFormError(message) {
    // Create or update error message
    let errorDiv = document.querySelector('.form-error');
    if (!errorDiv) {
        errorDiv = document.createElement('div');
        errorDiv.className = 'form-error';
        reservationForm.insertBefore(errorDiv, reservationForm.firstChild);
    }

    errorDiv.innerHTML = `
        <div class="error-content">
            <span class="error-icon">⚠️</span>
            <span class="error-text">${message}</span>
        </div>
    `;
    errorDiv.style.display = 'block';

    // Remove error after 5 seconds
    setTimeout(() => {
        if (errorDiv) {
            errorDiv.style.display = 'none';
        }
    }, 5000);

    // Scroll to error
    errorDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Enhanced navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Gallery filter functionality
function initGalleryFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            galleryItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';

                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 100);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Lightbox functionality
function openLightbox(button) {
    const galleryItem = button.closest('.gallery-item');
    const img = galleryItem.querySelector('img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Close lightbox on background click
document.getElementById('lightbox').addEventListener('click', (e) => {
    if (e.target.id === 'lightbox') {
        closeLightbox();
    }
});

// Close lightbox on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});

// Active navigation link highlighting
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// Smooth parallax effect for hero
function initParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const rate = scrolled * -0.5;

        if (hero) {
            hero.style.transform = `translateY(${rate}px)`;
        }
    });
}

// Advanced scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');

                // Stagger animations for child elements
                const children = entry.target.querySelectorAll('.dish-card, .gallery-item, .feature-item, .stat-item');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('animate-in');
                    }, index * 100);
                });
            }
        });
    }, observerOptions);

    // Observe all sections and cards
    const elementsToAnimate = document.querySelectorAll('section, .dish-card, .gallery-item, .feature-item, .stat-item');
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
}

// Micro-interactions
function initMicroInteractions() {
    // Button ripple effect
    const buttons = document.querySelectorAll('button, .cta-button, .tab-button');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Magnetic effect for cards
    const cards = document.querySelectorAll('.dish-card, .gallery-item');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const deltaX = (x - centerX) / centerX;
            const deltaY = (y - centerY) / centerY;

            card.style.transform = `perspective(1000px) rotateX(${deltaY * 5}deg) rotateY(${deltaX * 5}deg) translateZ(10px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
    });
}

// Modal Functions
function getAllFoodItems() {
    const allItems = [];
    Object.values(menuData).forEach(category => {
        allItems.push(...category);
    });
    return allItems;
}

function findFoodById(id) {
    const allItems = getAllFoodItems();
    return allItems.find(item => item.id === id);
}

function openFoodModal(foodId) {
    currentFood = findFoodById(foodId);
    if (!currentFood) return;

    currentQuantity = 1;

    // Populate modal content
    document.getElementById('modalImage').src = currentFood.image;
    document.getElementById('modalImage').alt = currentFood.name;
    document.getElementById('modalTitle').textContent = currentFood.name;
    document.getElementById('modalDescription').textContent = currentFood.fullDescription;
    document.getElementById('modalPrice').textContent = `$${currentFood.price}`;
    document.getElementById('modalPrepTime').textContent = currentFood.prepTime;
    document.getElementById('modalServes').textContent = currentFood.serves;
    document.getElementById('modalDietary').textContent = currentFood.dietary;
    document.getElementById('quantity').value = currentQuantity;

    updateTotalPrice();
    generateRecommendations(currentFood);

    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeFoodModal() {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
    currentFood = null;
    currentQuantity = 1;
}

function changeQuantity(change) {
    const quantityInput = document.getElementById('quantity');
    const newQuantity = parseInt(quantityInput.value) + change;

    if (newQuantity >= 1 && newQuantity <= 10) {
        currentQuantity = newQuantity;
        quantityInput.value = currentQuantity;
        updateTotalPrice();
    }
}

function updateTotalPrice() {
    if (currentFood) {
        const total = currentFood.price * currentQuantity;
        document.getElementById('totalPrice').textContent = `$${total}`;
    }
}

function generateRecommendations(currentFood) {
    const allItems = getAllFoodItems();
    const sameCategory = allItems.filter(item =>
        item.category === currentFood.category && item.id !== currentFood.id
    );
    const otherCategories = allItems.filter(item =>
        item.category !== currentFood.category
    );

    // Get 2 from same category and 2 from other categories
    const recommendations = [
        ...sameCategory.slice(0, 2),
        ...otherCategories.slice(0, 2)
    ].slice(0, 4);

    const recommendationGrid = document.getElementById('recommendationGrid');
    recommendationGrid.innerHTML = recommendations.map(item => `
        <div class="recommendation-item" onclick="openFoodModal(${item.id})">
            <img src="${item.image}" alt="${item.name}">
            <div class="recommendation-info">
                <h4>${item.name}</h4>
                <span class="price">$${item.price}</span>
            </div>
        </div>
    `).join('');
}

function orderNow() {
    if (!currentFood) return;

    const orderDetails = {
        item: currentFood.name,
        quantity: currentQuantity,
        price: currentFood.price,
        total: currentFood.price * currentQuantity
    };

    // Simulate order processing
    alert(`Order placed successfully!\n\nItem: ${orderDetails.item}\nQuantity: ${orderDetails.quantity}\nTotal: $${orderDetails.total}\n\nThank you for your order!`);

    closeFoodModal();
}

function subscribeNewsletter() {
    const email = document.getElementById('newsletterEmail').value;
    if (!email) {
        alert('Please enter your email address');
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }

    alert('Thank you for subscribing to our newsletter!');
    document.getElementById('newsletterEmail').value = '';
}

// Event Listeners
closeModal.addEventListener('click', closeFoodModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeFoodModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
        closeFoodModal();
    }
});

// Quantity input event listener
document.addEventListener('DOMContentLoaded', () => {
    const quantityInput = document.getElementById('quantity');
    if (quantityInput) {
        quantityInput.addEventListener('input', (e) => {
            const value = parseInt(e.target.value);
            if (value >= 1 && value <= 10) {
                currentQuantity = value;
                updateTotalPrice();
            }
        });
    }
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    initializeMenu();
    initMenuTabs();
    initGalleryFilter();
    initScrollAnimations();
    initMicroInteractions();
    initParallax();
    updateActiveNavLink();

    // Set minimum date for reservation to today
    const dateInput = document.getElementById('date');
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);

    // Add loading animation to images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', () => {
            img.classList.remove('loading');
        });
        if (!img.complete) {
            img.classList.add('loading');
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});
