


const GetFileNameCSV =  async () => {
    const name_file: string[] = [];



    try{
        const response = await fetch('http://localhost:8080/"files/get_name_csv', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();
        console.log(data);
        
        if (data){
            name_file.push(data.name_csv)
        }
    }catch (error) {
        console.error('Error:', error);
        return null;
      }


    return name_file
}
export default GetFileNameCSV;