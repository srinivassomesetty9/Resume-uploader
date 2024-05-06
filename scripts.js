function uploadResumes() {
    const files = document.getElementById('resumeUpload').files;
    if (files.length === 0) {
        return; // Don't proceed if no files are selected
    }
    const resumeUpload = document.getElementById('resumeUpload');
    const resumesTable = document.getElementById('resumesTable');

    for (let i = 0; i < resumeUpload.files.length; i++) {
        const row = resumesTable.insertRow(-1);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);

        cell1.innerHTML = `<input type="checkbox">`;
        cell2.innerText = resumeUpload.files[i].name;
    }
// Dummy code to show snackbar message
showSnackbar("Resumes uploaded successfully.");
    // Dummy API call for uploading resumes
    // This could be an AJAX request to your backend
    console.log('Resumes uploaded:', resumeUpload.files);
}

function validateResumes() {
    const resumesTable = document.getElementById('resumesTable');
    const validatedTable = document.getElementById('validatedTable');
    const selectedResumes = [];
    const selectedRows = document.querySelectorAll("#resumesTable input[type='checkbox']:checked");
    if (selectedRows.length === 0) {
        return; // Don't proceed if no resumes are selected
    }
    // Find selected resumes
    for (let i = 1; i < resumesTable.rows.length; i++) {
        const checkbox = resumesTable.rows[i].cells[0].querySelector('input[type="checkbox"]');
        if (checkbox.checked) {
            selectedResumes.push(resumesTable.rows[i]);
        }
    }

    // Move selected resumes to validated table
    selectedResumes.forEach(row => {
        validatedTable.appendChild(row);
    });
    showSnackbar("Resumes validated successfully.");
    // Dummy API call for validating resumes
    // This could be an AJAX request to your backend
    console.log('Resumes validated:', selectedResumes);
}

function communicate() {
    const validatedTable = document.getElementById('validatedTable');
    const selectedResumes = [];
    const selectedRows = document.querySelectorAll("#validatedTable input[type='checkbox']:checked");
    if (selectedRows.length === 0) {
        return; // Don't proceed if no resumes are selected
    }
    // Find selected resumes
    for (let i = 1; i < validatedTable.rows.length; i++) {
        const checkbox = validatedTable.rows[i].cells[0].querySelector('input[type="checkbox"]');
        if (checkbox.checked) {
            selectedResumes.push(validatedTable.rows[i]);
        }
    }

    // Remove selected resumes from table
    selectedResumes.forEach(row => {
        row.remove();
    });
    showSnackbar("Communication with resumes successful.");
    // Dummy API call for communication
    // This could be an AJAX request to your backend
    console.log('Communication with resumes successful:', selectedResumes);
}
// Function to show snackbar message
function showSnackbar(message) {
    var snackbar = document.getElementById("snackbar");
    snackbar.textContent = message;
    snackbar.className = "show";
    setTimeout(function(){ snackbar.className = snackbar.className.replace("show", ""); }, 3000);
}