

console.log("Welcome to the Community Portal"); 
window.addEventListener('load', () => {
    alert("Welcome to the Community Portal! All resources have loaded."); 
    fetchMockEvents(); 
});



class Event { 
    constructor(id, name, date, category, seats) {
        
        this.id = id;
        this.name = name;
        this.date = date;
        this.category = category;
        this.seats = seats;
    }

    
    checkAvailability() { 
        return this.seats > 0;
    }
}



let communityEvents = [];


const addEvent = (eventObj) => { 
    communityEvents.push(eventObj); 
};



const createRegistrationTracker = () => { 
    let totalRegistrations = 0;
    return () => {
        totalRegistrations++;
        console.log(`Total Portal Registrations: ${totalRegistrations}`);
    };
};
const trackRegistration = createRegistrationTracker();



const eventsContainer = document.querySelector('.row.g-4'); 

const renderEvents = (eventsToRender = communityEvents) => {
    eventsContainer.innerHTML = ''; 

    
    eventsToRender.forEach(event => { 
        
        if (!event.checkAvailability()) { 
            console.log(`Event hidden/full: ${event.name}`);
        } else {
            
            const cardCol = document.createElement('div'); 
            cardCol.className = 'col-md-4';
            
            
            
            cardCol.innerHTML = `
                <div class="card eventCard shadow-sm h-100">
                    <div class="card-body">
                        <h5 class="card-title">${event.name}</h5>
                        <p class="card-text text-muted">Category: ${event.category}</p>
                        <p class="card-text text-primary fw-bold">Seats Available: ${event.seats}</p>
                    </div>
                </div>
            `; 
            eventsContainer.appendChild(cardCol); 
    }});

    
    if(eventsToRender.length > 0) {
        console.log("First event properties:", Object.entries(eventsToRender[0])); 
    }
};



const filterEventsByCategory = (category) => { 
    
    const clonedEvents = [...communityEvents]; 
    
    if (category === 'all') {
        renderEvents(clonedEvents);
    } else {
        
        const filtered = clonedEvents.filter(e => e.category === category); 
        renderEvents(filtered);
    }
};


document.addEventListener('keydown', (e) => { 
    
    if(e.key === 'Enter') {
        console.log("Search triggered via keyboard");
    }
});



const fetchMockEvents = async () => { 
    console.log("Loading events..."); 
    
    try {
        
        const mockData = await new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    new Event(1, "Spring Cleanup", "2026-04-12", "volunteer", 15),
                    new Event(2, "Baking Workshop", "2026-04-18", "workshop", 5),
                    new Event(3, "Local Concert", "2026-05-05", "music", 100)
                ]);
            }, 1000);
        });

        communityEvents = mockData;
        renderEvents();
    } catch (error) { 
        console.error("Failed to fetch events:", error);
    }
};


const registerUser = async (e) => { 
    
    e.preventDefault(); 
    const confirmationOutput = document.getElementById('confirmation');
    
    try { 
        
        const { name, email, eventType } = e.target.elements; 
        
        if (!name.value || !email.value) { 
            throw new Error("Validation Error: Name and Email are required.");
        }

        confirmationOutput.innerText = "Submitting registration...";
        confirmationOutput.className = "d-block mt-3 text-warning fw-bold text-center";

        
        await new Promise(resolve => setTimeout(resolve, 1500)); 

        
        confirmationOutput.className = "d-block mt-3 text-success fw-bold text-center"; 
        confirmationOutput.innerText = `Success! Registered ${name.value} for ${eventType.value} event.`; 
        
        
        trackRegistration();
        
        
        if(communityEvents.length > 0) {
            communityEvents[0].seats--; 
            renderEvents(); 
        }

    } catch (error) { 
        
        confirmationOutput.className = "d-block mt-3 text-danger fw-bold text-center"; 
        confirmationOutput.innerText = error.message; 
        console.error("Registration failed:", error);
    }
};


document.getElementById('registrationForm').addEventListener('submit', registerUser);
