import React, { useState } from 'react';
import * as XLSX from 'xlsx';

function XlsxFileUpload() {
    const [data, setData] = useState([]);

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            const result = event.target.result;
            let dataArray = [];
            if (file.name.endsWith('.xlsx') || file.name.endsWith('.xls')) {
                const workbook = XLSX.read(result, { type: 'binary' });
                const sheetName = workbook.SheetNames[4];
                const sheet = workbook.Sheets[sheetName];
                const rows = XLSX.utils.sheet_to_json(sheet, { header: 1, raw: true });
                dataArray = rows.slice(1).map((row, index) => {
                    return {
                        id: index + 1,
                        members: row[0],
                        ageBand: row[1],
                        covrage25: row[2],
                        covrage50: row[3],
                        covrage1cr: row[4],

                        // Add more fields as needed
                    };
                });
            } else if (file.name.endsWith('.json')) {
                try {
                    const jsonData = JSON.parse(result);
                    if (Array.isArray(jsonData)) {
                        dataArray = jsonData.map((item, index) => ({
                            id: index + 1,
                            ...item,
                        }));
                    } else {
                        throw new Error('Invalid JSON format');
                    }
                } catch (error) {
                    console.error('Error parsing JSON file:', error);
                }
            } else {
                console.error('Unsupported file format');
            }
            setData(dataArray);
        };
        reader.readAsBinaryString(file);

    };
    console.log(data);

    return (
        <div>
            <input type="file" onChange={handleFileUpload} />
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Members</th>
                        <th>Age Band</th>
                        <th>25,00,000</th>
                        <th>50,00,000</th>
                        <th>1,0,00,00,000</th>

                        {/* Add more table headers as needed */}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row) => (
                        <tr key={row.id}>
                            <td>{row.id}</td>
                            <td>{row.members}</td>
                            <td>{row.ageBand}</td>
                            <td>{row.covrage25}</td>
                            <td>{row.covrage50}</td>
                            <td>{row.covrage1cr}</td>

                            {/* Add more table cells as needed */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default XlsxFileUpload;
