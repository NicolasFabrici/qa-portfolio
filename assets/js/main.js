document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    });

    elements.forEach(el => observer.observe(el));

    const backToTop = document.getElementById("backToTop");

    if (backToTop) {

        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                backToTop.style.display = "block";
            } else {
                backToTop.style.display = "none";
            }
        });

        backToTop.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });

    }

    const defectCtx = document.getElementById("defectChart");

    if (defectCtx) {
        new Chart(defectCtx, {
            type: "bar",
            data: {
                labels: ["Critical", "High", "Medium", "Low"],
                datasets: [{
                    label: "Number of Defects",
                    data: [4, 8, 12, 8],
                    backgroundColor: "#1F3C88"
                }]
            },
            options: {
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    // Coverage Chart
    const coverageCtx = document.getElementById("coverageChart");

    if (coverageCtx) {
        new Chart(coverageCtx, {
            type: "doughnut",
            data: {
                labels: ["Covered", "Not Covered"],
                datasets: [{
                    data: [92, 8],
                    backgroundColor: ["#1F3C88", "#e5e5e5"]
                }]
            },
            options: {
                plugins: {
                    legend: {
                        position: "bottom"
                    }
                }
            }
        });
    }

    const sprintCtx = document.getElementById("sprintChart");

    if (sprintCtx) {
        new Chart(sprintCtx, {
            type: "line",
            data: {
                labels: ["Sprint 1", "Sprint 2", "Sprint 3", "Sprint 4", "Sprint 5"],
                datasets: [{
                    label: "Defects",
                    data: [15, 12, 9, 7, 5],
                    borderColor: "#1F3C88",
                    backgroundColor: "rgba(31,60,136,0.1)",
                    tension: 0.3,
                    fill: true
                }]
            },
            options: {
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    // Automation Coverage by Module (Horizontal Bar)
    const automationCtx = document.getElementById("automationChart");

    if (automationCtx) {
        new Chart(automationCtx, {
            type: "bar",
            data: {
                labels: ["Checkout", "Login", "Cart", "Search", "Payment"],
                datasets: [{
                    label: "Coverage %",
                    data: [95, 98, 90, 85, 92],
                    backgroundColor: "#1F3C88"
                }]
            },
            options: {
                indexAxis: "y",
                scales: {
                    x: {
                        beginAtZero: true,
                        max: 100
                    }
                },
                plugins: {
                    legend: { display: false }
                }
            }
        });
    }

    const transactionCtx = document.getElementById("transactionChart");

    if (transactionCtx) {
        new Chart(transactionCtx, {
            type: "bar",
            data: {
                labels: ["Valid Transactions", "Failed Transactions"],
                datasets: [{
                    data: [98, 2],
                    backgroundColor: ["#1F3C88", "#e5e5e5"]
                }]
            },
            options: {
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100
                    }
                }
            }
        });
    }

    // Banking - Security Coverage
    const securityCtx = document.getElementById("securityChart");

    if (securityCtx) {
        new Chart(securityCtx, {
            type: "doughnut",
            data: {
                labels: ["Covered", "Not Covered"],
                datasets: [{
                    data: [94, 6],
                    backgroundColor: ["#1F3C88", "#e5e5e5"]
                }]
            }
        });
    }

    const performanceCanvas = document.getElementById("performanceChart");

    if (performanceCanvas && typeof Chart !== "undefined") {

        const ctx = performanceCanvas.getContext("2d");

        new Chart(ctx, {
            type: "line",
            data: {
                labels: ["100", "300", "500", "700", "1000"],
                datasets: [{
                    label: "Response Time (ms)",
                    data: [180, 240, 320, 390, 480],
                    borderColor: "#1F3C88",
                    backgroundColor: "rgba(31,60,136,0.1)",
                    tension: 0.3,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }
});


