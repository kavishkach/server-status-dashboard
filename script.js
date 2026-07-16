const services = [
    {
        name: "Website API",
        description: "Handles requests from the dashboard application.",
        status: "online",
        responseTime: 82,
        endpoint: "/api/health"
    },
    {
        name: "Database",
        description: "Stores application and service information.",
        status: "online",
        responseTime: 46,
        endpoint: "postgresql"
    },
    {
        name: "Authentication Service",
        description: "Manages user authentication and active sessions.",
        status: "online",
        responseTime: 105,
        endpoint: "/auth/health"
    },
    {
        name: "Backup Service",
        description: "Creates scheduled backups of application data.",
        status: "warning",
        responseTime: 760,
        endpoint: "/backup/status"
    }
];

const serviceGrid = document.getElementById("service-grid");

const totalServicesElement =
    document.getElementById("total-services");

const onlineServicesElement =
    document.getElementById("online-services");

const warningServicesElement =
    document.getElementById("warning-services");

const lastCheckedElement =
    document.getElementById("last-checked");

const refreshButton =
    document.getElementById("refresh-button");

const currentYearElement =
    document.getElementById("current-year");

function createServiceCard(service) {
    return `
        <article class="service-card">

            <div class="service-card-header">
                <div>
                    <h3>${service.name}</h3>

                    <p class="service-description">
                        ${service.description}
                    </p>
                </div>

                <span
                    class="status-badge status-${service.status}"
                >
                    <span class="status-dot"></span>
                    ${service.status}
                </span>
            </div>

            <div class="service-details">

                <div class="detail-item">
                    <span>Response Time</span>
                    <strong>${service.responseTime} ms</strong>git
                </div>

                <div class="detail-item">
                    <span>Endpoint</span>
                    <strong>${service.endpoint}</strong>
                </div>

            </div>

        </article>
    `;
}

function renderServices() {
    serviceGrid.innerHTML = services
        .map(createServiceCard)
        .join("");
}

function updateSummary() {
    const onlineCount = services.filter(
        service => service.status === "online"
    ).length;

    const warningCount = services.filter(
        service => service.status === "warning"
    ).length;

    totalServicesElement.textContent = services.length;
    onlineServicesElement.textContent = onlineCount;
    warningServicesElement.textContent = warningCount;
}

function updateLastCheckedTime() {
    const currentTime = new Date();

    lastCheckedElement.textContent =
        currentTime.toLocaleString();
}

function updateResponseTimes() {
    services.forEach(service => {
        const variation =
            Math.floor(Math.random() * 31) - 15;

        const updatedTime =
            service.responseTime + variation;

        service.responseTime =
            Math.max(updatedTime, 1);
    });
}

function refreshDashboard() {
    refreshButton.disabled = true;
    refreshButton.textContent = "Checking...";

    setTimeout(() => {
        updateResponseTimes();
        renderServices();
        updateSummary();
        updateLastCheckedTime();

        refreshButton.disabled = false;
        refreshButton.textContent = "Refresh Status";
    }, 700);
}

refreshButton.addEventListener(
    "click",
    refreshDashboard
);

currentYearElement.textContent =
    new Date().getFullYear();

renderServices();
updateSummary();
updateLastCheckedTime();