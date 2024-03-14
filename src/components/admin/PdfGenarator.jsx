import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import styled from 'styled-components';
import Pagef from '../pdf/Pagef';

class PDFGenerator extends React.Component {
    generatePDF = () => {
        const input = document.getElementById('pdf-content');

        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('p', 'mm', 'a4');
                const imgWidth = pdf.internal.pageSize.getWidth();
                const imgHeight = canvas.height * imgWidth / canvas.width;

                pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
                pdf.save('download.pdf');
            });
    };

    render() {
        return (
            <Wrapper>
                <div id="pdf-content">
                    <Pagef />
                </div>
                <button onClick={this.generatePDF}>Generate PDF</button>
            </Wrapper>
        );
    }
}

export default PDFGenerator;
const Wrapper = styled.div`
#pdf-content{
    width: 100%;
    height: 100%;
    padding: 40px;
}
  
`;