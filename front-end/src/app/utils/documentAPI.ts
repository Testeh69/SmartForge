


const UploadFileCSV =  async (file:File) => {
    try{

        const fileFormData = new FormData();
        fileFormData.append("csv", file)
        const response = await fetch('http://localhost:8080/files/post_csv', {
            method: 'POST',
            body: fileFormData,
        });
        if (response.ok) {
            const data = await response.json();
            console.log('Success:', data);
            return data; 
        } else {
            console.error('Upload failed:', response.status);
            return null;
        }
    }catch (error) {
        console.error('Error:', error);
        return null;
      }


    return 1
}
export default UploadFileCSV;