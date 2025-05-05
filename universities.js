// Sample University Data (Can be replaced with API call)
const universities = [
    {
        id: 1,
        name: "University of Karachi",
        location: "Karachi",
        program: "Engineering, Business, Medicine",
        rating: 4.5,
        image: "un of k.jpg",
        fees: "PKR 50,000/semester"
    },
    {
        id: 2,
        name: "Lahore University of Management Sciences",
        location: "Lahore",
        program: "Business, Computer Science",
        rating: 4.8,
        image: "lums.jpg",
        fees: "PKR 300,000/semester"
    },
    {
        id: 3,
        name: "Quaid-i-Azam University",
        location: "Islamabad",
        program: "Medicine, Social Sciences",
        rating: 4.3,
        image: "qui uni.jpg",
        fees: "PKR 40,000/semester"
    }
];

// Display Universities
function displayUniversities(data) {
    const container = document.getElementById('universities-container');
    container.innerHTML = '';

    data.forEach(university => {
        container.innerHTML += `
            <div class="university-card">
                <div class="university-img">
                    <img src="${university.image}" alt="${university.name}">
                </div>
                <div class="university-info">
                    <h3>${university.name}</h3>
                    <div class="university-meta">
                        <span><i class="fas fa-map-marker-alt"></i> ${university.location}</span>
                        <span><i class="fas fa-star"></i> ${university.rating}</span>
                    </div>
                    <p><strong>Programs:</strong> ${university.program}</p>
                    <p><strong>Fees:</strong> ${university.fees}</p>
                    <a href="#" class="view-details">View Details →</a>
                </div>
            </div>
        `;
    });
}

// Filter Functionality
document.querySelector('.apply-filters').addEventListener('click', () => {
    const programFilter = document.getElementById('program-filter').value.toLowerCase();
    const locationFilter = document.getElementById('location-filter').value.toLowerCase();
    
    const filtered = universities.filter(uni => {
        return (programFilter === '' || uni.program.toLowerCase().includes(programFilter)) &&
               (locationFilter === '' || uni.location.toLowerCase() === locationFilter);
    });
    
    displayUniversities(filtered);
});

// Initial Load
displayUniversities(universities);