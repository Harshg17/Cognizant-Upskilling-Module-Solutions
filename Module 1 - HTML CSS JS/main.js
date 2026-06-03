





console.log("Welcome to the Community Portal");
console.log("CivicHub Portal Loaded at:", new Date().toLocaleString());






const events = [
    {
        id: 1,
        name: "Summer Music Festival",
        category: "music",
        date: "2025-07-15",
        venue: "City Amphitheatre",
        location: "Central Park",
        fee: "₹500",
        feeNum: 500,
        seats: 200,
        seatsLeft: 43,
        description: "A grand outdoor music festival featuring local and national artists across multiple stages. Food stalls, art installations and evening fireworks included.",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=220&fit=crop"
    },
    {
        id: 2,
        name: "Community Baking Workshop",
        category: "workshop",
        date: "2025-06-20",
        venue: "Community Center",
        location: "East Wing, Hall B",
        fee: "₹200",
        feeNum: 200,
        seats: 30,
        seatsLeft: 8,
        description: "Learn the art of artisan bread and pastry baking from professional chefs. Ingredients provided. Take home what you bake!",
        image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=400&h=220&fit=crop"
    },
    {
        id: 3,
        name: "City Sports Day",
        category: "sports",
        date: "2025-07-01",
        venue: "Stadium Ground",
        location: "Sports Complex, Gate 3",
        fee: "Free",
        feeNum: 0,
        seats: 500,
        seatsLeft: 287,
        description: "Annual city sports competition featuring football, cricket, athletics and badminton. Open to all age groups. Prizes for winners.",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=220&fit=crop"
    },
    {
        id: 4,
        name: "Contemporary Art Exhibition",
        category: "art",
        date: "2025-06-25",
        venue: "City Art Gallery",
        location: "Gallery Road",
        fee: "₹150",
        feeNum: 150,
        seats: 100,
        seatsLeft: 60,
        description: "Showcase of contemporary artworks by local and regional artists spanning paintings, sculpture, digital art and installations.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=220&fit=crop"
    },
    {
        id: 5,
        name: "Food & Cultures Festival",
        category: "food",
        date: "2025-07-20",
        venue: "Town Square",
        location: "Main Bazaar Area",
        fee: "₹350",
        feeNum: 350,
        seats: 300,
        seatsLeft: 120,
        description: "A culinary journey through 20+ cuisines from around the world. Live cooking demos, food stalls, chef talks and cultural performances.",
        image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=400&h=220&fit=crop"
    },
    {
        id: 6,
        name: "Community Clean Drive",
        category: "community",
        date: "2025-06-22",
        venue: "City Park",
        location: "Main Entrance",
        fee: "Free",
        feeNum: 0,
        seats: 150,
        seatsLeft: 95,
        description: "Join the city in making our parks cleaner and greener. Gloves and bags provided. Breakfast and certificates for all volunteers.",
        image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=220&fit=crop"
    },
    {
        id: 7,
        name: "Digital Skills for Seniors",
        category: "workshop",
        date: "2025-07-05",
        venue: "Library Auditorium",
        location: "City Library, 2nd Floor",
        fee: "Free",
        feeNum: 0,
        seats: 40,
        seatsLeft: 18,
        description: "Monthly digital skills workshop for senior citizens. Topics: smartphone basics, online banking safety, and social media literacy. Refreshments provided.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=220&fit=crop"
    },
    {
        id: 8,
        name: "Jazz in the Garden",
        category: "music",
        date: "2025-07-12",
        venue: "Botanical Garden",
        location: "Rose Garden Pavilion",
        fee: "₹250",
        feeNum: 250,
        seats: 120,
        seatsLeft: 0,
        description: "An intimate evening of jazz music in the beautiful botanical garden setting. BYO picnic blanket. Wine and snacks available for purchase.",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=220&fit=crop"
    },
    {
        id: 9,
        name: "Youth Street Art Contest",
        category: "art",
        date: "2025-07-08",
        venue: "Underpass Gallery",
        location: "Central Bus Stand Underpass",
        fee: "Free",
        feeNum: 0,
        seats: 50,
        seatsLeft: 22,
        description: "Open to youth aged 15–25. Contestants will paint on designated panels. Prizes of ₹10,000 for best artwork. Registration required.",
        image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=400&h=220&fit=crop"
    }
];


const portalName = "CivicHub Community Portal";
let totalRegistrations = 0;
let currentRating = 0;
let filteredEvents = [...events]; 


console.log(`Portal: ${portalName} | Events loaded: ${events.length}`);




function saveEventPreference(value) {
    
    localStorage.setItem("preferredEventType", value);
    sessionStorage.setItem("currentSession_event", value);
    console.log(`Saved preference: ${value}`);
}

function loadSavedPreferences() {
    
    const saved = localStorage.getItem("preferredEventType");
    if (saved) {
        const select = document.getElementById("eventType");
        if (select) {
            select.value = saved;
            showEventFee(saved);
            console.log(`Loaded preference: ${saved}`);
        }
    }
}

function clearPreferences() {
    
    localStorage.clear();
    sessionStorage.clear();
    showToast("✅ Preferences cleared successfully!", "success");
    const select = document.getElementById("eventType");
    if (select) select.value = "";
    const feeDiv = document.getElementById("regFeeDisplay");
    if (feeDiv) feeDiv.style.display = "none";
    console.log("All preferences cleared.");
}




function Event(data) {
    this.id = data.id;
    this.name = data.name;
    this.category = data.category;
    this.date = data.date;
    this.venue = data.venue;
    this.location = data.location;
    this.fee = data.fee;
    this.feeNum = data.feeNum;
    this.seats = data.seats;
    this.seatsLeft = data.seatsLeft;
    this.description = data.description;
    this.image = data.image;
}


Event.prototype.checkAvailability = function () {
    if (this.seatsLeft === 0) return "full";
    if (this.seatsLeft <= 15) return "few";
    return "open";
};

Event.prototype.getFormattedDate = function () {
    const d = new Date(this.date);
    return d.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
};


const sampleEvent = new Event(events[0]);
console.log("Event properties:", Object.entries(sampleEvent));






function createCategoryTracker() {
    const counts = {};
    return {
        register: function (category) {
            counts[category] = (counts[category] || 0) + 1;
            return counts[category];
        },
        getCount: function (category) {
            return counts[category] || 0;
        },
        getAll: function () {
            return { ...counts };
        }
    };
}

const categoryTracker = createCategoryTracker();


function addEvent(eventData) {
    events.push(eventData);
    console.log(`Event added: ${eventData.name}`);
}


function registerUser(name, email, eventName) {
    try {
        if (!name || !email || !eventName) {
            throw new Error("All fields are required for registration.");
        }
        totalRegistrations++;
        console.log(`Registered: ${name} (${email}) for ${eventName}`);
        return { success: true, message: `Successfully registered ${name} for ${eventName}!` };
    } catch (error) {
        
        console.error("Registration error:", error.message);
        return { success: false, message: error.message };
    }
}


function filterEventsByCategory(category, callback) {
    if (category === "all" || !category) {
        filteredEvents = [...events];
    } else {
        
        filteredEvents = events.filter(e => e.category === category);
    }

    if (typeof callback === "function") {
        callback(filteredEvents);
    }

    renderEvents(filteredEvents);

    
    const fees = {
        music: "₹250 – ₹500", workshop: "₹200 or Free",
        sports: "Free", art: "₹150 – Free",
        food: "₹350", community: "Free"
    };

    const feeDisplay = document.getElementById("feeDisplay");
    const feeAmount = document.getElementById("feeAmount");
    if (category !== "all" && fees[category]) {
        feeDisplay.classList.remove("d-none");
        feeAmount.textContent = fees[category];
    } else {
        feeDisplay.classList.add("d-none");
    }
}




function renderEvents(eventsToRender) {
    
    const grid = document.querySelector("#eventsGrid");
    const emptyState = document.getElementById("emptyState");

    if (!grid) return;

    if (eventsToRender.length === 0) {
        grid.innerHTML = "";
        emptyState.classList.remove("d-none");
        return;
    }

    emptyState.classList.add("d-none");

    
    const cardHTML = eventsToRender.map(eventData => {
        const ev = new Event(eventData);
        const availability = ev.checkAvailability();
        const formattedDate = ev.getFormattedDate();

        
        const seatsClass = availability === "few" ? "low" : availability === "full" ? "low" : "";
        const seatsText = ev.seatsLeft === 0 ? "Sold Out" :
            ev.seatsLeft <= 15 ? `Only ${ev.seatsLeft} left!` :
                `${ev.seatsLeft} seats available`;

        const statusBadge = availability === "full" ?
            '<span class="status-badge status-full">Sold Out</span>' :
            availability === "few" ?
                '<span class="status-badge status-few">Limited</span>' :
                '<span class="status-badge status-open">Open</span>';

        const isPast = new Date(ev.date) < new Date();
        
        if (isPast) return "";

        return `
            <div class="col-md-6 col-lg-4 event-item" data-category="${ev.category}">
                <div class="event-card eventCard" onclick="showEventDetail(${ev.id})">
                    <img src="${ev.image}" alt="${ev.name}" class="event-card-img" loading="lazy">
                    <div class="event-card-body">
                        <span class="event-category-badge cat-${ev.category}">${getCategoryLabel(ev.category)}</span>
                        <h3 class="event-card-title">${ev.name}</h3>
                        <div class="event-meta">
                            <span><i class="bi bi-calendar3"></i>${formattedDate}</span>
                            <span><i class="bi bi-geo-alt"></i>${ev.location}</span>
                            <span><i class="bi bi-building"></i>${ev.venue}</span>
                        </div>
                    </div>
                    <div class="event-card-footer">
                        <span class="event-seats ${seatsClass}"><i class="bi bi-people me-1"></i>${seatsText}</span>
                        <span class="event-fee">${ev.fee}</span>
                    </div>
                </div>
            </div>
        `;
    }).filter(Boolean).join("");

    
    grid.innerHTML = cardHTML;

    
    if (typeof $ !== "undefined") {
        $("#eventsGrid .col-md-6").hide().each(function (i) {
            $(this).delay(i * 80).fadeIn(400);
        });
    }
}

function getCategoryLabel(cat) {
    const labels = {
        music: "🎵 Music", workshop: "🔧 Workshop", sports: "⚽ Sports",
        art: "🎨 Art", food: "🍕 Food", community: "🏘️ Community"
    };
    return labels[cat] || cat;
}


function showEventDetail(id) {
    const eventData = events.find(e => e.id === id);
    if (!eventData) return;
    const ev = new Event(eventData);

    document.getElementById("eventModalTitle").textContent = ev.name;
    document.getElementById("eventModalBody").innerHTML = `
        <img src="${ev.image}" alt="${ev.name}" class="img-fluid rounded mb-3 w-100" style="height:200px;object-fit:cover">
        <div class="d-flex flex-wrap gap-2 mb-3">
            <span class="event-category-badge cat-${ev.category}">${getCategoryLabel(ev.category)}</span>
            ${ev.checkAvailability() === "open" ?
            '<span class="status-badge status-open">Open for Registration</span>' :
            ev.checkAvailability() === "few" ?
                '<span class="status-badge status-few">Limited Seats</span>' :
                '<span class="status-badge status-full">Sold Out</span>'}
        </div>
        <p class="text-muted">${ev.description}</p>
        <div class="row g-2 mt-2">
            <div class="col-6">
                <small class="text-muted d-block">Date</small>
                <strong><i class="bi bi-calendar3 me-1 text-accent"></i>${ev.getFormattedDate()}</strong>
            </div>
            <div class="col-6">
                <small class="text-muted d-block">Venue</small>
                <strong><i class="bi bi-building me-1 text-accent"></i>${ev.venue}</strong>
            </div>
            <div class="col-6">
                <small class="text-muted d-block">Location</small>
                <strong><i class="bi bi-geo-alt me-1 text-accent"></i>${ev.location}</strong>
            </div>
            <div class="col-6">
                <small class="text-muted d-block">Entry Fee</small>
                <strong class="text-accent">${ev.fee}</strong>
            </div>
        </div>
    `;

    const modal = new bootstrap.Modal(document.getElementById("eventModal"));
    modal.show();
}


function renderAdminTable() {
    const tbody = document.getElementById("adminTableBody");
    if (!tbody) return;

    const rows = events.map((e, i) => {
        const ev = new Event(e);
        const avail = ev.checkAvailability();
        const statusClass = avail === "open" ? "status-open" : avail === "few" ? "status-few" : "status-full";
        const statusText = avail === "open" ? "Open" : avail === "few" ? "Few Seats" : "Full";
        return `
            <tr>
                <td>${i + 1}</td>
                <td style="text-align:left;font-weight:600">${e.name}</td>
                <td>${getCategoryLabel(e.category)}</td>
                <td>${new Date(e.date).toLocaleDateString("en-IN")}</td>
                <td>${e.venue}</td>
                <td class="text-accent fw-bold">${e.fee}</td>
                <td>${e.seatsLeft === 0 ? '—' : e.seatsLeft + '/' + e.seats}</td>
                <td><span class="status-badge ${statusClass}">${statusText}</span></td>
            </tr>
        `;
    }).join("");

    tbody.innerHTML = rows;
}






function handleSearchKeydown(event) {
    if (event.key === "Enter") {
        const query = event.target.value.toLowerCase().trim();
        const results = events.filter(e =>
            e.name.toLowerCase().includes(query) ||
            e.venue.toLowerCase().includes(query) ||
            e.category.toLowerCase().includes(query)
        );
        filteredEvents = results;
        renderEvents(results);
        console.log(`Search: "${query}" — ${results.length} results`);
    }
}


function resetFilters() {
    document.getElementById("searchInput").value = "";
    document.getElementById("categoryFilter").value = "all";
    filteredEvents = [...events];
    renderEvents(events);
    document.getElementById("feeDisplay").classList.add("d-none");
}






function validatePhone(input) {
    const phone = input.value.trim();
    const phoneRegex = /^[6-9]\d{9}$/;
    const errorEl = document.getElementById("phoneError");

    if (phone && !phoneRegex.test(phone)) {
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
        if (errorEl) errorEl.textContent = "Enter a valid 10-digit Indian mobile number (starts with 6-9).";
        console.warn("Invalid phone:", phone);
    } else if (phone) {
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
        console.log("Phone valid:", phone);
    }
}


function showEventFee(value) {
    const fees = {
        music: "₹500 per person",
        workshop: "₹200 per person",
        sports: "Free Entry",
        art: "₹150 per person",
        food: "₹350 per person",
        community: "Free Entry"
    };

    const feeDiv = document.getElementById("regFeeDisplay");
    const feeText = document.getElementById("regFeeText");

    if (fees[value]) {
        feeDiv.style.display = "block";
        feeText.textContent = fees[value];
    } else {
        feeDiv.style.display = "none";
    }
}


function handleSubmit(e) {
    e.preventDefault();

    const form = document.getElementById("registrationForm");
    const name = document.getElementById("regName").value.trim();
    const email = document.getElementById("regEmail").value.trim();
    const date = document.getElementById("regDate").value;
    const eventType = document.getElementById("eventType").value;
    const terms = document.getElementById("termsCheck").checked;
    const output = document.getElementById("formOutput");

    
    if (!name || !email || !date || !eventType || !terms) {
        form.classList.add("was-validated");
        output.className = "form-output error d-block";
        output.textContent = "⚠️ Please fill in all required fields and accept the terms.";
        return;
    }

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        output.className = "form-output error d-block";
        output.textContent = "⚠️ Please enter a valid email address.";
        return;
    }

    
    const result = registerUser(name, email, eventType);

    
    simulateApiSubmit({ name, email, date, eventType });

    if (result.success) {
        const categoryCount = categoryTracker.register(eventType);
        output.className = "form-output success d-block";
        output.innerHTML = `
            ✅ <strong>Registration Confirmed!</strong><br>
            Welcome, <strong>${name}</strong>! You're registered for <strong>${getCategoryLabel(eventType)}</strong> events.<br>
            Confirmation will be sent to <em>${email}</em>.<br>
            <small class="text-muted">You're registration #${categoryCount} in this category.</small>
        `;

        totalRegistrations++;
        animateCounter("memberCount", totalRegistrations);
        showToast(`🎉 Registration successful for ${name}!`, "success");
        form.reset();
        form.classList.remove("was-validated");
        console.log("Form submitted:", { name, email, eventType });
    }
}




async function simulateApiSubmit(data) {
    
    const btn = document.getElementById("submitBtn");
    if (btn) {
        btn.disabled = true;
        btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Processing...';
    }

    try {
        
        
        const response = await fetch("https://httpbin.org/post", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        console.log("API Response:", result);

        
        await new Promise(resolve => setTimeout(resolve, 500));

    } catch (error) {
        
        console.error("API Error:", error.message);
    } finally {
        if (btn) {
            btn.disabled = false;
            btn.innerHTML = '<i class="bi bi-check-circle me-2"></i>Register Now';
        }
    }
}


async function fetchEventsFromAPI() {
    try {
        console.log("Fetching events...");
        
        const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=3");
        const data = await response.json();
        console.log("Mock API data fetched:", data.length, "items");
        return data;
    } catch (error) {
        console.error("Fetch error:", error);
        return [];
    }
}


fetchEventsFromAPI()
    .then(data => {
        console.log("Events fetched via .then():", data.length);
    })
    .catch(err => console.error("Fetch failed:", err));




function enlargeImage(img) {
    const modal = document.getElementById("imageModal");
    if (!modal) return;
    document.getElementById("enlargedImage").src = img.src.replace("w=280&h=180", "w=900&h=600");
    document.getElementById("imageModalTitle").textContent = img.title;
    const bsModal = new bootstrap.Modal(modal);
    bsModal.show();
    console.log("Image enlarged:", img.title);
}




function videoReady() {
    const badge = document.getElementById("videoStatus");
    if (badge) {
        badge.classList.remove("d-none");
        console.log("Video ready to play!");
    }
}




function updateCharCount(textarea) {
    const count = textarea.value.length;
    const counter = document.getElementById("charCount");
    if (counter) {
        counter.textContent = `${count} / 300 characters`;
        counter.style.color = count > 250 ? "#ef4444" : count > 200 ? "#f59e0b" : "";
    }
}


function trackKeyEvents(event) {
    const specialKeys = ["Enter", "Backspace", "Delete", "Tab"];
    if (specialKeys.includes(event.key)) {
        console.log(`Key pressed in feedback: ${event.key}`);
    }
}




function setRating(value) {
    currentRating = value;
    const stars = document.querySelectorAll("#starRating i");
    stars.forEach((star, i) => {
        if (i < value) {
            star.className = "bi bi-star-fill active";
        } else {
            star.className = "bi bi-star";
        }
    });
    console.log("Rating set:", value);
}




function showSelectedFee(value) {
    const select = document.getElementById("feedbackEvent");
    const display = document.getElementById("selectedFeeDisplay");
    const feeText = document.getElementById("selectedFeeText");

    const opt = select.options[select.selectedIndex];
    const fee = opt.getAttribute("data-fee");

    if (fee) {
        display.classList.remove("d-none");
        feeText.textContent = fee;
    } else {
        display.classList.add("d-none");
    }
    console.log("Selected event fee:", fee);
}

function submitFeedback() {
    const event = document.getElementById("feedbackEvent").value;
    const text = document.getElementById("feedbackText").value.trim();
    const result = document.getElementById("feedbackResult");

    if (!event || !text || currentRating === 0) {
        result.innerHTML = '<div class="alert alert-warning py-2 mt-2">Please select an event, rate it, and write your feedback.</div>';
        return;
    }

    result.innerHTML = `
        <div class="alert alert-success py-2 mt-2">
            <i class="bi bi-check-circle-fill me-2"></i>
            <strong>Thank you!</strong> Your feedback has been submitted for ${getCategoryLabel(event)}.
            Rating: ${"⭐".repeat(currentRating)}
        </div>`;

    
    if (typeof $ !== "undefined") {
        $("#feedbackResult").hide().fadeIn(400);
    }

    document.getElementById("feedbackText").value = "";
    document.getElementById("charCount").textContent = "0 / 300 characters";
    setRating(0);
    document.getElementById("feedbackEvent").value = "";
    document.getElementById("selectedFeeDisplay").classList.add("d-none");
    console.log("Feedback submitted.");
}




function findNearbyEvents() {
    const btn = document.getElementById("geoBtn");
    const result = document.getElementById("geoResult");
    const nearbyDiv = document.getElementById("nearbyEvents");

    btn.disabled = true;
    btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Detecting location...';
    result.className = "geo-result";
    result.textContent = "";

    if (!navigator.geolocation) {
        result.className = "geo-result error";
        result.textContent = "⚠️ Geolocation is not supported by your browser.";
        btn.disabled = false;
        btn.innerHTML = '<i class="bi bi-compass me-2"></i>Find Nearby Events';
        return;
    }

    
    navigator.geolocation.getCurrentPosition(
        function (position) {
            
            const { latitude, longitude, accuracy } = position.coords;
            result.className = "geo-result success";
            result.innerHTML = `
                <i class="bi bi-geo-alt-fill me-2"></i>
                <strong>Location found!</strong><br>
                Latitude: <code>${latitude.toFixed(5)}</code> |
                Longitude: <code>${longitude.toFixed(5)}</code><br>
                Accuracy: ~${Math.round(accuracy)}m
            `;

            
            nearbyDiv.innerHTML = `
                <h6 class="fw-bold mt-2 mb-3">📍 Events Near You</h6>
                ${events.slice(0, 3).map(e => `
                    <div class="d-flex align-items-center gap-3 p-2 bg-white rounded mb-2 border">
                        <img src="${e.image}" width="50" height="50" style="object-fit:cover;border-radius:8px">
                        <div>
                            <strong class="d-block">${e.name}</strong>
                            <small class="text-muted">~${(Math.random() * 5 + 0.5).toFixed(1)} km away · ${e.fee}</small>
                        </div>
                    </div>
                `).join("")}
            `;
            console.log(`Location: ${latitude}, ${longitude}`);
            btn.disabled = false;
            btn.innerHTML = '<i class="bi bi-compass me-2"></i>Update Location';
        },
        function (error) {
            
            let msg = "";
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    msg = "⛔ Location permission denied. Please allow location access in browser settings.";
                    break;
                case error.POSITION_UNAVAILABLE:
                    msg = "📡 Location unavailable. Please check your device settings.";
                    break;
                case error.TIMEOUT:
                    msg = "⏱️ Location request timed out. Please try again.";
                    break;
                default:
                    msg = "❌ An unknown error occurred.";
            }
            result.className = "geo-result error";
            result.textContent = msg;
            console.error("Geolocation error:", error.message);
            btn.disabled = false;
            btn.innerHTML = '<i class="bi bi-compass me-2"></i>Try Again';
        },
        
        {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        }
    );
}




function sendContactMessage() {
    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const msg = document.getElementById("contactMsg").value.trim();

    if (!name || !email || !msg) {
        showToast("⚠️ Please fill in all fields.", "warning");
        return;
    }

    showToast(`✅ Message sent! We'll get back to you at ${email}.`, "success");
    document.getElementById("contactName").value = "";
    document.getElementById("contactEmail").value = "";
    document.getElementById("contactMsg").value = "";
    console.log("Contact message sent from:", name);
}






function showToast(message, type = "info") {
    const toastEl = document.getElementById("mainToast");
    const msgEl = document.getElementById("toastMessage");

    if (!toastEl || !msgEl) return;

    const colors = { success: "#10b981", error: "#ef4444", warning: "#f59e0b", info: "#3b82f6" };
    toastEl.style.borderLeft = `4px solid ${colors[type] || colors.info}`;
    msgEl.textContent = message;

    const toast = new bootstrap.Toast(toastEl, { delay: 4000 });
    toast.show();
}


function animateCounter(elementId, target) {
    const el = document.getElementById(elementId);
    if (!el) return;
    let start = 0;
    const step = Math.ceil(target / 40);
    const timer = setInterval(() => {
        start = Math.min(start + step, target);
        el.textContent = start;
        if (start >= target) clearInterval(timer);
    }, 30);
}


function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}




function getEventSummary(eventData) {
    
    const { name, date, venue, fee, seatsLeft } = eventData;
    const dateObj = new Date(date);
    return `${name} at ${venue} on ${dateObj.toLocaleDateString("en-IN")} — Fee: ${fee}, Seats: ${seatsLeft}`;
}


function createEventCard(title = "Untitled Event", category = "community", fee = "Free") {
    return `${getCategoryLabel(category)}: ${title} (${fee})`;
}


const upcomingEvents = [...events].filter(e => new Date(e.date) > new Date());
console.log(`Upcoming events (spread + filter): ${upcomingEvents.length}`);
console.log("Sample event summary:", getEventSummary(events[0]));




let formStarted = false;
document.addEventListener("input", function (e) {
    if (e.target.closest("#registrationForm")) {
        formStarted = true;
    }
});

document.getElementById("registrationForm") && document.getElementById("registrationForm").addEventListener("submit", function () {
    formStarted = false;
});

window.onbeforeunload = function () {
    if (formStarted) {
        return "You have unsaved registration data. Are you sure you want to leave?";
    }
};




window.addEventListener("scroll", function () {
    const nav = document.getElementById("mainNav");
    const backToTop = document.getElementById("backToTop");

    if (window.scrollY > 50) {
        nav.style.padding = "0.5rem 0";
        if (backToTop) backToTop.classList.add("visible");
    } else {
        nav.style.padding = "1rem 0";
        if (backToTop) backToTop.classList.remove("visible");
    }
});


const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", function () {
    const scrollPos = window.scrollY + 100;
    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");
        const link = document.querySelector(`nav a[href="#${id}"]`);
        if (link) {
            if (scrollPos >= top && scrollPos < top + height) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        }
    });
});




$(document).ready(function () {
    console.log("jQuery loaded — CivicHub Portal ready");

    
    $(document).on("click", ".event-card .btn-sm", function (e) {
        e.stopPropagation();
        const eventName = $(this).closest(".event-card").find(".event-card-title").text();
        showToast(`📋 Viewing: ${eventName}`, "info");
    });

    
    $("#searchInput").on("focus", function () {
        $(".filter-bar").addClass("shadow");
    }).on("blur", function () {
        $(".filter-bar").removeClass("shadow");
    });

    
    $(document).on("mouseenter", ".event-card", function () {
        $(this).find(".event-card-title").addClass("text-accent");
    }).on("mouseleave", ".event-card", function () {
        $(this).find(".event-card-title").removeClass("text-accent");
    });
});




window.addEventListener("load", function () {
    
    console.log("Page fully loaded!");

    
    renderEvents(events);
    renderAdminTable();
    loadSavedPreferences();

    
    setTimeout(() => {
        animateCounter("eventCount", upcomingEvents.length);
        animateCounter("memberCount", 1247);
    }, 600);

    
    console.group("Portal Debug Info");
    console.log("Total events:", events.length);
    console.log("Upcoming events:", upcomingEvents.length);
    console.log("localStorage preference:", localStorage.getItem("preferredEventType") || "None");
    console.log("Events by category:", events.reduce((acc, e) => {
        acc[e.category] = (acc[e.category] || 0) + 1;
        return acc;
    }, {}));
    console.groupEnd();
});
