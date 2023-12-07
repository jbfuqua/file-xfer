document.getElementById('uploadForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append('file', file);

    fetch('vhttps://filexferfunction.azurewebsites.net/api/http_trigger?code=wp4NMqPf57kBtD7PLyQCE0yVKnQUj2tBF09PcZnMBjQeAzFuknRJtQ==', { // Replace with your Azure Function URL
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => alert(data))
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while uploading the file.');
    });
});
