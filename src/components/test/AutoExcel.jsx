// import React, { useState } from 'react';
// import * as XLSX from 'xlsx';

// function AutoExcel() {
//     const [jsonData, setJsonData] = useState(null);

//     const handleFileUpload = (e) => {
//         const file = e.target.files[0];
//         const reader = new FileReader();
//         reader.onload = (e) => {
//             const data = new Uint8Array(e.target.result);
//             const workbook = XLSX.read(data, { type: 'array' });
//             const sheetName = workbook.SheetNames[0];
//             const sheet = workbook.Sheets[sheetName];
//             const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
//             const headers = jsonData[0];
//             const formattedData = jsonData.slice(1).map((row) => {
//                 const obj = {};
//                 headers.forEach((header, index) => {
//                     obj[header] = row[index];
//                 });
//                 return obj;
//             });
//             setJsonData(formattedData);
//             console.log(formattedData);
//         };
//         reader.readAsArrayBuffer(file);
//     };

//     return (
//         <div>
//             <input type="file" onChange={handleFileUpload} />
//             <div>
//                 <pre>{JSON.stringify(jsonData, null, 2)}</pre>
//             </div>
//         </div>
//     );
// }

// export default AutoExcel;





import React, { useState } from 'react';
import * as XLSX from 'xlsx';

function AutoExcel() {
    const [jsonData, setJsonData] = useState(null);

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
            const headers = jsonData[0];
            const formattedData = jsonData.slice(1).map((row) => {
                const obj = {
                    person: row[0], // Assuming person is in the second column
                    age: row[1], // Assuming age is in the first column
                    coverage: headers.slice(2).map((header, index) => ({
                        coverage: header,
                        premium: row[index + 2]
                    }))
                };
                return obj;
            });
            setJsonData(formattedData);
            console.log(formattedData);
        };
        reader.readAsArrayBuffer(file);
    };

    return (
        <div>
            <input type="file" onChange={handleFileUpload} />
            <div>
                <pre>{JSON.stringify(jsonData, null, 2)}</pre>
            </div>
        </div>
    );
}

export default AutoExcel;

