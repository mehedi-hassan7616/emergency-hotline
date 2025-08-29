const historyData = [];

function handleCallAttempt(counterId, serviceName, serviceNumber) {
  const coinCount = parseInt(document.getElementById(counterId).innerText);
  if (coinCount < 20) {
    alert("You have not sufficient coin, you need at least 20 coin to call");
    return false;
  } else {
    alert(`calling ${serviceName} ${serviceNumber}`);
    const totalCoinCount = parseInt(coinCount - 20);
    document.getElementById(counterId).innerText = totalCoinCount;
    return true;
  }
}

// history helpers
function addHistoryEntry(serviceName, serviceNumber) {
  const data = {
    name: serviceName,
    number: serviceNumber,
    date: new Date().toLocaleString(),
  };
  historyData.push(data);
}



function renderHistory() {
  const historyContainer = document.getElementById("history-Container");
  historyContainer.innerText = "";

  

  for (const data of historyData) {
    const div = document.createElement("div");
    div.innerHTML = `<div class="lg:flex justify-between items-center bg-[#fafafa] p-2 rounded-2 mb-2 mt-2">
          <div class="lg:flex lg:justify-between">
<div>

            <h3 class="font-bold text-gray-800 mb-1">${data.name}</h3> 
            <p class="text-gray-600">${data.number}</p>
</div>
            <div class="text-gray-500 font-medium"> ${data.date}</div>
          </div>
        </div>`;
    historyContainer.appendChild(div);
  }
}

function initEmergencyService(className, serviceName, serviceNumber) {
  const callButtons = document.getElementsByClassName(className);
  for (const callBtn of callButtons) {
    callBtn.addEventListener("click", function (e) {
      e.preventDefault();

      const callSuccessful = handleCallAttempt(
        "coin-count",
        serviceName,
        serviceNumber
      );

      if (callSuccessful) {
        addHistoryEntry(serviceName, serviceNumber);
        renderHistory();
      }
    });
  }
}

// Copy function for all copy buttons
function copyToClipboard(serviceName, serviceNumber) {
  const textToCopy = `${serviceName}: ${serviceNumber}`;
  navigator.clipboard
    .writeText(textToCopy)
    .then(function () {
      alert("Copied to clipboard: " + textToCopy);
      const copyCount = parseInt(
        document.getElementById("copy-count").innerText
      );
      document.getElementById("copy-count").innerText = copyCount + 1;
    })
    .catch(function (err) {
      console.error("Could not copy text: ", err);
      alert("Failed to copy text");
    });
}

// heart-count and love increase with toggle functionality
const hearts = document.getElementsByClassName("heart");
for (const heart of hearts) {
  heart.addEventListener("click", function (e) {
    e.preventDefault();

    if (e.target.classList.contains("fa-regular")) {
      e.target.classList.remove("fa-regular");
      e.target.classList.add("fa-solid");
      e.target.style.color = "#ff0000";

      const loveCount = parseInt(
        document.getElementById("love-count").innerText
      );
      const totalLoveCount = parseInt(loveCount + 1);
      document.getElementById("love-count").innerText = totalLoveCount;
    } else {
      e.target.classList.remove("fa-solid");
      e.target.classList.add("fa-regular");
      e.target.style.color = "#5c5c5c";

      const loveCount = parseInt(
        document.getElementById("love-count").innerText
      );
      const totalLoveCount = parseInt(loveCount - 1);
      document.getElementById("love-count").innerText = totalLoveCount;
    }
  });
}

// Initialize all emergency services
initEmergencyService("call-1", "National Emergency Number", "999");
initEmergencyService("call-2", "Police Helpline Number", "999");
initEmergencyService("call-3", "Fire Service Number", "999");
initEmergencyService("call-4", "Ambulance Service", "999");
initEmergencyService("call-5", "Women & Child Helpline", "109");
initEmergencyService("call-6", "Anti-Corruption Helpline", "106");
initEmergencyService("call-7", "Electricity Helpline", "16216");
initEmergencyService("call-8", "Brac Helpliner", "16445");
initEmergencyService("call-9", "Bangladesh Railway Helpline", "163");

// Clear history button
const clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", function (e) {
  e.preventDefault();
  historyData.length = 0;
  renderHistory();
});

// Render initial empty state
renderHistory();
