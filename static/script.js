document.addEventListener('DOMContentLoaded', () => {
    const uploadForm = document.getElementById('upload-form');
    const imageUpload = document.getElementById('image-upload');
    const resultDiv = document.getElementById('result');
});

    uploadForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('image', imageUpload.files[0]);

        try {
            const response = await fetch('/process_image', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            // Display the result on the webpage
            resultDiv.innerHTML = `
                <p><strong>Extracted Text:</strong> ${data.extractedText}</p>
                <p><strong>Answer:</strong> ${data.answer}</p>
            `;
        } catch (error) {
            console.error('Error:', error);
        }
});
