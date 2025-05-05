// Sample University Database with Admission Criteria
const universities = [
    {
        id: 1,
        name: "LUMS (Lahore University of Management Sciences)",
        minGrade: 80,
        programs: ["business", "computer science"],
        fees: 300000,
        location: "Lahore",
        matchScore: 0,
        image: "https://via.placeholder.com/400x200?text=LUMS"
    },
    {
        id: 2,
        name: "University of Karachi",
        minGrade: 60,
        programs: ["engineering", "medicine", "arts"],
        fees: 50000,
        location: "Karachi",
        matchScore: 0,
        image: "https://via.placeholder.com/400x200?text=KU"
    },
    {
        id: 3,
        name: "NUST (National University of Sciences & Technology)",
        minGrade: 75,
        programs: ["engineering", "medicine"],
        fees: 80000,
        location: "Islamabad",
        matchScore: 0,
        image: "https://via.placeholder.com/400x200?text=NUST"
    },
    {
        id: 4,
        name: "FAST University",
        minGrade: 70,
        programs: ["computer science", "engineering"],
        fees: 120000,
        location: "Multiple Cities",
        matchScore: 0,
        image: "https://via.placeholder.com/400x200?text=FAST"
    }
];

// DOM Elements
const resultsSection = document.getElementById('results');
const fallbackSection = document.getElementById('fallback');
const recommendationsContainer = document.getElementById('recommendations-container');
const recommendationBtn = document.getElementById('get-recommendations');

// Generate Recommendations
recommendationBtn.addEventListener('click', () => {
    const grades = parseFloat(document.getElementById('grades').value);
    const program = document.getElementById('program').value;
    const budget = document.getElementById('budget').value;

    if (!grades || isNaN(grades)) {
        alert("Please enter valid grades to get recommendations");
        return;
    }

    // Calculate matches
    const matchedUniversities = universities.map(uni => {
        let score = 0;
        
        // Grade match (40% weight)
        if (grades >= uni.minGrade) {
            score += 40 + ((grades - uni.minGrade) * 0.5);
        }
        
        // Program match (30% weight)
        if (!program || uni.programs.includes(program)) {
            score += 30;
        }
        
        // Budget match (30% weight)
        if (!budget || (budget && uni.fees <= parseInt(budget))) {
            score += 30;
        }
        
        return {...uni, matchScore: Math.min(100, score)};
    }).filter(uni => uni.matchScore >= 50)
      .sort((a, b) => b.matchScore - a.matchScore);

    displayRecommendations(matchedUniversities);
});

// Display Results
function displayRecommendations(universities) {
    if (!universities || universities.length === 0) {
        fallbackSection.innerHTML = `
            <div class="fallback-content">
                <i class="fas fa-exclamation-circle fa-3x"></i>
                <h3>No perfect matches found</h3>
                <p>Try adjusting your filters or check these alternatives:</p>
                <div class="alternative-recommendations">
                    ${universities.slice(0, 3).map(uni => `
                        <div class="alt-uni">
                            <h4>${uni.name}</h4>
                            <p>${uni.location} | PKR ${uni.fees.toLocaleString()}/semester</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        resultsSection.style.display = 'none';
        fallbackSection.style.display = 'block';
        return;
    }

    recommendationsContainer.innerHTML = '';
    
    universities.forEach(uni => {
        const matchPercentage = Math.round(uni.matchScore);
        const matchLevel = matchPercentage >= 80 ? 'Excellent' : 
                          matchPercentage >= 60 ? 'Good' : 'Fair';
        
        recommendationsContainer.innerHTML += `
            <div class="recommendation-card">
                <div class="rec-header">
                    <h3>${uni.name}</h3>
                    <span class="match-badge">${matchPercentage}% Match</span>
                </div>
                <div class="rec-body">
                    <p><strong>Location:</strong> ${uni.location}</p>
                    <p><strong>Programs:</strong> ${uni.programs.join(', ')}</p>
                    <p><strong>Fees:</strong> PKR ${uni.fees.toLocaleString()}/semester</p>
                    <p><strong>Minimum Grades:</strong> ${uni.minGrade}%</p>
                    <p class="match-level" style="color: ${
                        matchPercentage >= 80 ? '#27ae60' : 
                        matchPercentage >= 60 ? '#f39c12' : '#e74c3c'
                    }">
                        <i class="fas fa-${matchPercentage >= 80 ? 'check' : 'info'}"></i> 
                        ${matchLevel} match for your profile
                    </p>
                    <a href="university-details.html?id=${uni.id}" class="view-details">View Details →</a>
                </div>
            </div>
        `;
    });

    resultsSection.style.display = 'block';
    fallbackSection.style.display = 'none';
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    fallbackSection.style.display = 'block';
    resultsSection.style.display = 'none';
    
    // Optional: Load recommendations if URL has parameters
    const urlParams = new URLSearchParams(window.location.search);
    const gradesParam = urlParams.get('grades');
    const programParam = urlParams.get('program');
    
    if (gradesParam) {
        document.getElementById('grades').value = gradesParam;
        if (programParam) {
            document.getElementById('program').value = programParam;
        }
        recommendationBtn.click();
    }
});