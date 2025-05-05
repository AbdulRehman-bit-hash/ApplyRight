// Admission Resources Data
const resources = {
    'test-prep': {
        title: 'Test Preparation Resources',
        items: [
            {
                title: 'SAT Complete Guide',
                description: 'Everything you need to know about SAT exam structure, scoring, and preparation strategies.',
                type: 'Guide',
                duration: '2h read',
                link: '#'
            },
            {
                title: 'GMAT Quantitative Practice',
                description: '500+ practice questions for GMAT quantitative section with detailed solutions.',
                type: 'Practice',
                duration: '50 questions',
                link: '#'
            },
            {
                title: 'University Entry Test Syllabus',
                description: 'Complete syllabus for all major university admission tests in Pakistan.',
                type: 'Syllabus',
                duration: 'PDF',
                link: '#'
            }
        ]
    },
    'application-guides': {
        title: 'Application Guides',
        items: [
            {
                title: 'Personal Statement Writing',
                description: 'Step-by-step guide to writing a compelling personal statement with examples.',
                type: 'Guide',
                duration: '45m read',
                link: '#'
            },
            {
                title: 'Letter of Recommendation',
                description: 'How to request and what makes an outstanding recommendation letter.',
                type: 'Template',
                duration: '30m read',
                link: '#'
            }
        ]
    },
    'sample-papers': {
        title: 'Sample Papers',
        items: [
            {
                title: 'LUMS SSE Sample Paper 2023',
                description: 'Actual admission test paper from last year with answer key.',
                type: 'Test Paper',
                duration: '3h',
                link: '#'
            },
            {
                title: 'FAST NUCES Entry Test',
                description: '5 years of collected test papers for computer science program.',
                type: 'Test Series',
                duration: 'PDF',
                link: '#'
            }
        ]
    },
    'interview-tips': {
        title: 'Interview Preparation',
        items: [
            {
                title: 'Common Interview Questions',
                description: '50 most frequently asked university interview questions with model answers.',
                type: 'Q&A',
                duration: '1h read',
                link: '#'
            },
            {
                title: 'Virtual Interview Tips',
                description: 'How to prepare for online admission interviews - technical setup and presentation.',
                type: 'Guide',
                duration: '30m read',
                link: '#'
            }
        ]
    }
};

// Show Resources Function
function showResources(category) {
    const container = document.getElementById('resources-container');
    const resourceData = resources[category];
    
    if (!resourceData) return;
    
    let html = `
        <div class="resource-item active">
            <h2>${resourceData.title}</h2>
    `;
    
    resourceData.items.forEach(item => {
        html += `
            <div class="resource-card">
                <h3>${item.title}</h3>
                <div class="resource-meta">
                    <span><i class="fas fa-tag"></i> ${item.type}</span>
                    <span><i class="fas fa-clock"></i> ${item.duration}</span>
                </div>
                <p>${item.description}</p>
                <a href="${item.link}" class="btn-resource">Access Resource</a>
            </div>
        `;
    });
    
    html += `</div>`;
    container.innerHTML = html;
}

// Initialize upcoming tests countdown
function initTestCountdowns() {
    // This can be enhanced with actual countdown logic
    console.log("Countdowns initialized");
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    initTestCountdowns();
});