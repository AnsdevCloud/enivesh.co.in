import React, { useEffect } from 'react';
import { PDFViewer, Document, Page, Text, PDFDownloadLink, StyleSheet, View, Image, Font } from '@react-pdf/renderer';
import HomePage from '../../../pages/HomePage';
import { Google } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// Define your HTML content as a string
// Define your HTML styles

var name = "Aman Nishad";
const htmlContent = `
 
`;
Font.register({
    family: 'Poppins',
    fonts: [
        { src: 'poppins/Poppins-Regular.ttf' },
        { src: 'poppins/Poppins-Bold.ttf', fontWeight: 400 },

    ]
});

// Component to render HTML content
const HTMLToPDF = () => {
    const styles = StyleSheet.create({
        page: {
            backgroundColor: '#fff',
            border: "10px solid #ff5c00",
            padding: 10,
            fontFamily: "Poppins",
            fontWeight: 400,

        },
        backgroungText: {
            fontSize: 500,
            position: "absolute",
            top: 50,
            left: 0,
            color: "#888"



        },
        section: {
            margin: 5,
            padding: 5,

        },
        flexSection: {
            margin: 10,
            padding: 10,
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px"
            // flexGrow: 1,
        },
        flexSectionm1: {
            margin: 2,
            padding: 10,
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "5px",
            border: "1px solid #ff5c00",
            borderRadius: 2
        },
        flexSectionmNoneB: {
            margin: 2,
            padding: 10,
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "5px",
            // border: "1px solid #ff5c00",
            borderRadius: 2
        },
        selfLavel: {
            color: "#4d3717",
            fontWeight: 500,
            fontSize: 12,

        },
        heading: {
            fontSize: 30,
            margin: "10px 20px",
            fontWeight: "heavy",
            marginBottom: 10,
            textAlign: "center",
            color: '#1a0f09',
        },
        headingBold: {
            fontSize: 30,
            margin: "10px 20px",
            marginBottom: 10,
            textAlign: "center",
            color: '#ff5c00',
            fontFamily: 'Poppins',
            fontWeight: 600
        },
        subheading: {
            fontSize: 22,
            margin: "10px 20px",
            fontWeight: "heavy",
            marginBottom: 10,
            textAlign: "center",
            color: '#953c08',
        },
        subheading2: {
            fontSize: 16,
            margin: "10px 20px",
            fontWeight: "heavy",
            marginBottom: 10,
            textAlign: "center",
            color: '#953c08',
        },
        titleName: {
            fontSize: 20,
            margin: "10px 20px",
            fontWeight: "black",
            marginBottom: 10,
            textAlign: "center",
            color: '#060301',
        },
        paragraph: {
            fontSize: 12,
            lineHeight: 1.5,
            fontWeight: 600
        },
        button: {
            fontSize: 10,
            lineHeight: 1.5,
            width: "200px",
            margin: "10px 50px",
            border: "1px solid #f00",
            padding: "10px",
            borderRadius: "10px"
        },
        subQuote: {
            fontSize: 12,
            fontWeight: "black",
            marginBottom: 10,
            textAlign: "center",
            color: '#953c08',
        },
        image: {
            width: "50%",

            height: "300px",
            margin: "10px auto",
            marginTop: "20px",
            borderRadius: "10px"
        },
        fullWidthimage: {
            width: "100%",
            // height: "250px",
            margin: "10px auto",
            backgroundColor: "#f7ad83",
            padding: 10,
            borderRadius: "10px"
        },
        box2: {
            width: "90%",
            height: "auto",
            padding: "10px",
            margin: "10px auto",
            border: "1px solid #ff5c00",
            borderRadius: "10px",
            textAlign: "left",
            fontWeight: 400




        },
        caption: {
            fontSize: 10,
            color: "#626060",
            fontWeight: "thin",
            padding: " 2px",
            textAlign: "justify"
        },
        subtitle1: {
            fontSize: 16,
            padding: 1,
            color: "#ff5c00",
            margin: "2px 5px"
        },
        subtitle2: {
            color: "#ff5c00",
            fontWeight: "medium",
            fontSize: 12,
            padding: 1,
            margin: "2px 5px"
        },
        subdis1: {
            fontSize: 14,
            padding: 1,
            color: "#444",
            margin: "2px 5px"
        },
        subdis2: {
            fontSize: 10,
            color: "#444",
            padding: 1,
            margin: "2px 5px"
        },
        list1: {
            fontSize: 12,
            marginLeft: 20,
            padding: 1,
            color: "#444",
            margin: "2px 20px",

        },
        list2: {
            fontSize: 10,
            padding: 1,
            color: "#444",
            margin: "2px 20px",
        },
        colorgray: {
            color: "#666",


        },
        colordarkBroun: {
            color: "#953c08",
            fontWeight: 500
        }
        ,
        colorMain: {
            color: "#ff5c00"
        },
        colorSecondry: {
            color: "#025ce3"
        },
        colorDark: {
            color: "#020000",

        },

        bottomMark: {
            position: "absolute",
            bottom: "10px",
            right: "10px",
            color: "#000",
            fontSize: 10,
            textAlign: "right",
            padding: 5
        },
        cardBox: {
            width: "30%",
            height: "auto",
            padding: 5,
            margin: "10px 5px",
            borderRadius: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 5,
            backgroundColor: "#fff",
            border: "1px solid #ff5c00"
        },
        carImage: {
            width: 100,
        },
        box50: {
            width: "45%",
            display: "flex",
            padding: 2,
            alignContent: "center",
            flexDirection: "row",
            justifyContent: "flex-start",
            gap: 1,



        },
        box50Desgn: {
            width: "45%",
            display: "flex",
            padding: 2,
            border: "1px solid #999",
            alignContent: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 1,



        },
        table: {
            display: 'table',
            margin: "10px 0",
            width: 'auto',
            borderStyle: 'solid',
            borderWidth: 1,
            borderRightWidth: 0,
            borderBottomWidth: 0,
            borderColor: "#ff0c00"
        },
        tableRow: {
            margin: 'auto',
            flexDirection: 'row',
        },
        tableColHeader: {
            width: '33.33%',
            borderStyle: 'solid',
            borderWidth: 1,
            borderLeftWidth: 0,
            borderTopWidth: 0,
            borderColor: "#ff0c00",
            fontSize: 14,

            fontWeight: 'black',
            textAlign: 'center',
            backgroundColor: '#ff5c00',
            color: "#fff",
            padding: 5,
        },
        tableColHeadeFD: {
            width: '60%',
            borderStyle: 'solid',
            borderWidth: 1,
            borderLeftWidth: 0,
            borderTopWidth: 0,
            borderColor: "#ff0c00",
            fontSize: 14,

            fontWeight: 'black',
            textAlign: 'center',
            backgroundColor: '#ff5c00',
            color: "#fff",
            padding: 5,
        },
        tableColHeadeFN: {
            width: '40%',
            borderStyle: 'solid',
            borderWidth: 1,
            borderLeftWidth: 0,
            borderTopWidth: 0,
            borderColor: "#ff0c00",
            fontSize: 14,

            fontWeight: 'black',
            textAlign: 'center',
            backgroundColor: '#ff5c00',
            color: "#fff",
            padding: 5,
        },
        tableCol: {

            width: '33.33%',
            borderStyle: 'solid',
            fontSize: 10,
            borderWidth: 1,
            borderLeftWidth: 0,
            borderColor: "#ff0c00",
            borderTopWidth: 0,
            textAlign: 'center',
            padding: 5,
        },
        tableColFD: {

            width: '60%',
            borderStyle: 'solid',
            fontSize: 10,
            borderWidth: 1,
            borderLeftWidth: 0,
            borderColor: "#ff0c00",
            borderTopWidth: 0,
            textAlign: 'left',
            padding: 5,
        },
        tableColFN: {
            width: '40%',
            borderStyle: 'solid',
            fontSize: 10,
            borderWidth: 1,
            borderLeftWidth: 0,
            borderColor: "#ff0c00",
            borderTopWidth: 0,
            textAlign: 'left',
            padding: 5,
        },
        logo: {
            width: "40%",
            position: "absolute",
            right: "0",
            top: "0",

        },
        box: {
            width: "100%",
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 2,
            margin: "0 auto",
            borderBottom: "1px solid #ff5c00"

        },
        box50Designitem: {
            width: "40%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: 1,

        },
        tableMessege: {
            position: "absolute",
            bottom: "-10px",
            right: 0,
            width: "33.33%",
            fontSize: 6,
            padding: 1,
            borderRadius: 0,
            textAlign: "center",
            backgroundColor: "#ff5c00",
            color: "#fff",
            fontWeight: 500


        }
    });
    const arr = ["nams", "dsfds", "sdfajoi"]
    const insurance_user_form = useSelector((state) => state.user.insuranceForm);
    const globelForm = JSON.parse(localStorage.getItem('insurance_user_form'));
    const globelFeature = JSON.parse(localStorage.getItem('featursPDF'));
    const navigate = useNavigate();
    useEffect(() => {
        if (globelForm && globelFeature) {
            return;

        } else {
            navigate("/insurance/plans")
        }
    }, [])


    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

            <PDFViewer style={{ width: '100%', height: '90vh' }}>
                <Document  >
                    <Page size={"A4"} style={styles.page}>
                        <Image style={styles.logo} src="images/eniveshicon/Enivesh_Insurance_LOGO.png" />

                        <View style={styles.section}>
                            <Image style={styles.image} src="/images/homepage/herosection.png" />
                            <Text style={styles.headingBold}>ENIVESH INSURANCE </Text>
                            <Text style={styles.subheading}>Mediclaim Policy </Text>
                            <Text style={styles.subQuote}>Non-Binding Quote</Text>
                            <Text style={styles.titleName} >{globelForm ? globelForm[0]?.selfname : ""}</Text>
                            <Text style={styles.subheading} >Portability for Mediclaim</Text>
                        </View>
                        <View style={styles.section}>
                            <View style={styles.box2}>
                                <View style={styles.caption}>
                                    <Text style={styles.caption}><Text style={styles.colordarkBroun}>ENIVESH Insurance Marketing Pvt Ltd. </Text>
                                        #1103, Paras business centre,Kasturba road number 1. Near Kasturba police station, Borivali East. Mumbai -400066,</Text>

                                    <Text style={styles.caption}><Text style={styles.colorDark}>IRDAI Registration number : </Text> IMF186245250320160013 ,</Text>
                                    <Text style={styles.caption}>
                                        <Text style={styles.colorDark}>Valid Till : </Text> 22 Mar 2025 ,
                                        <Text style={styles.colorDark}>Financial CIN Number : </Text> U74140MH2014OPC260267
                                    </Text>
                                    <Text style={styles.caption}><Text style={styles.colorDark}>Email: </Text>service@enivesh.com , <Text style={styles.colorDark}>WhatsApp : </Text> +919324374807</Text>

                                </View>
                            </View>
                        </View>
                        <Text style={styles.bottomMark}>www.enivesh.co.in</Text>
                    </Page>

                    <Page size={"A4"} style={styles.page}>
                        <View style={styles.section}>

                            <Text style={styles.subheading} >Self Details</Text>
                            <View style={styles.flexSectionm1}>
                                <View style={styles.box50}>
                                    <Text style={styles.subtitle2} >Name : </Text>
                                    <Text style={styles.selfLavel}>{globelForm ? globelForm[0]?.selfname : ""} </Text>

                                </View>
                                <View style={styles.box50}>
                                    <Text style={styles.subtitle2}>Gender : </Text>
                                    <Text style={styles.selfLavel}>{globelForm && globelForm[0]?.gender}</Text>
                                </View>
                                <View style={styles.box50}>
                                    <Text style={styles.subtitle2}>Age : </Text>
                                    <Text style={styles.selfLavel}>{globelForm && globelForm[0]?.age} </Text>
                                </View>
                                <View style={styles.box50}>
                                    <Text style={styles.subtitle2}>Number : </Text>
                                    <Text style={styles.selfLavel}>{globelForm && globelForm[0]?.phone}</Text>
                                </View>
                                <View style={styles.box50}>
                                    <Text style={styles.subtitle2}>City Name : </Text>
                                    <Text style={styles.selfLavel}>{globelForm && globelForm[0]?.city?.name}</Text>
                                </View>
                                <View style={styles.box50}>
                                    <Text style={styles.subtitle2}>Pincode : </Text>
                                    <Text style={styles.selfLavel}>{globelForm && globelForm[0]?.city?.pincode}</Text>
                                </View>
                                <View style={styles.box50}>
                                    <Text style={styles.subtitle2}>Email : </Text>
                                    <Text style={styles.selfLavel}>{globelForm && globelForm[0]?.email ? globelForm[0]?.email : "NA"}</Text>
                                </View>
                            </View>

                            <View style={styles.flexSectionmNoneB}>
                                <View style={styles.box}>
                                    <Text style={styles.subtitle2} >Self Family</Text>
                                    <Text style={styles.subtitle2} >Total Members : <Text style={styles.subdis2}>{globelForm?.length}</Text></Text>

                                </View>
                                {globelForm && globelForm?.map((item, index) => {
                                    return <View key={index} style={styles.box50Desgn}>

                                        <Text style={styles.subdis2}>{item?.name} </Text>
                                        <View style={styles.box50Designitem}>
                                            <Text style={styles.subtitle2} >Age : </Text>
                                            <Text style={styles.subdis2}>{item?.age} </Text>
                                        </View>
                                    </View>
                                })}



                            </View>
                            <View style={styles.section}>
                                <Image style={styles.fullWidthimage} src={"images/pdfimages/fullfamily.png"} />
                            </View>
                        </View>
                        <Text style={styles.bottomMark}>www.enivesh.co.in</Text>

                    </Page>

                    <Page size={"A4"} style={styles.page} >

                        <View style={styles.section}>
                            <Text style={styles.subtitle2}>Dear {globelForm ? globelForm[0]?.selfname : ""},</Text>
                            <Text style={styles.subdis2}>We are writing to you today to introduce our company as your trusted insurance broker and to present a comprehensive health insurance proposal tailored to your specific needs. With years of experience in the insurance industry, I am committed to providing you with expert guidance and personalized solutions that safeguard your health and financial well-being.</Text>
                        </View>
                        <View style={styles.section}>
                            <Text style={styles.subtitle2}>Understanding Your Needs</Text>
                            <Text style={styles.subdis2}>At the heart of our approach is a deep understanding of your unique circumstances and healthcare requirements. We recognize that each individual and family has distinct needs, and we strive to tailor our recommendations accordingly. By carefully assessing your medical history, lifestyle factors, and budget considerations, we can identify the most suitable health insurance plan that aligns with your priorities.</Text>
                        </View>
                        <View style={styles.section}>
                            <Text style={styles.subtitle2}>Tailored Health Insurance Solutions</Text>
                            <Text style={styles.subdis2}>We offer a wide range of health insurance plans from multiple insurance companies, ensuring that you have access to comprehensive coverage options that meet your specific needs. Whether you seek individual, family, or group health insurance, we will guide you through the intricacies of each plan, highlighting the benefits, coverage limits, and exclusions. Our goal is to empower you with the knowledge and understanding to make informed decisions about your health insurance coverage.</Text>
                        </View>
                        <View style={styles.section}>
                            <Text style={styles.subtitle2}>In addition to helping you choose the right health insurance plan, we can also help you with the following:</Text>
                            <Text style={styles.list2}>1. Enrolling in your plan</Text>
                            <Text style={styles.list2}>2. Filing claims</Text>
                            <Text style={styles.list2}>3. Understanding your benefits</Text>
                            <Text style={styles.list2}>4. Making changes to your plan</Text>
                        </View>
                        <View style={styles.section}>
                            <Text style={styles.subtitle2}>Your Health, Our Priority</Text>
                            <Text style={styles.subdis2}>We believe that everyone deserves access to quality healthcare and financial protection against unforeseen medical expenses. By partnering with us, you can rest assured that your health and well-being are our top priorities. We are committed to providing you with personalized, expert guidance and advocating for your best interests in the complex world of health insurance.</Text>
                            <Text style={styles.subdis2}>Thank you for considering our services. We look forward to the opportunity to serve as your trusted insurance broker and to help you secure the comprehensive health insurance coverage you deserve.</Text>
                            <Text style={styles.subdis2}>Sincerely, </Text>
                        </View>
                        <Image src={"/images/pdfimages/irda.png"} />


                        <Text style={styles.bottomMark}>www.enivesh.co.in</Text>

                    </Page>





                    <Page size={"A4"} style={styles.page}>
                        <View style={styles.section}>
                            <Text style={styles.subheading}>Premium Table for Mediclaim Plan</Text>
                            <View style={styles.table}>
                                <View style={styles.tableRow}>
                                    <Text style={styles.tableColHeader}>COMPANY</Text>
                                    <Text style={styles.tableColHeader}>SUM ASSURED</Text>
                                    <Text style={styles.tableColHeader}>PREMIUM</Text>

                                </View>
                                <View style={styles.tableRow}>
                                    <Text style={styles.tableCol}>{globelFeature?.pdfDataP?.sumAssured?.CompanyName}</Text>
                                    <Text style={styles.tableCol}>{globelFeature?.pdfDataP?.sumAssured?.SumAssured}</Text>
                                    <Text style={styles.tableCol}>{globelFeature?.pdfDataP?.sumAssured?.Premium}</Text>
                                    {globelFeature?.pdfDataS?.sumAssured?.CompanyName ? "" : <Text style={styles.tableMessege}>Premium inclusive of GST *</Text>}


                                </View>
                                {globelFeature?.pdfDataS?.sumAssured?.CompanyName && <View style={styles.tableRow}>
                                    <Text style={styles.tableCol}>{globelFeature?.pdfDataS?.sumAssured?.CompanyName}</Text>
                                    <Text style={styles.tableCol}>{globelFeature?.pdfDataS?.sumAssured?.SumAssured}</Text>
                                    <Text style={styles.tableCol}>{globelFeature?.pdfDataS?.sumAssured?.Premium}</Text>
                                    <Text style={styles.tableMessege}>Premium inclusive of GST *</Text>
                                </View>}
                            </View>
                        </View>
                        {globelFeature?.pdfDataS?.sumAssured?.CompanyName ? "" : <View style={styles.section}>
                            <Text style={styles.subheading2}>{globelFeature?.pdfDataP?.sumAssured?.CompanyName} Health Features</Text>
                            <View style={styles.table}>
                                <View style={styles.tableRow}>
                                    <Text style={styles.tableColHeadeFN}>Features</Text>
                                    <Text style={styles.tableColHeadeFD}>Detail</Text>


                                </View>
                                {
                                    globelFeature?.pdfDataP?.features?.map((item, index) => {
                                        return <View key={index} style={styles.tableRow}>
                                            <Text style={styles.tableColFN}>{item?.name}</Text>
                                            <Text style={styles.tableColFD}>{item?.value}</Text>
                                        </View>
                                    })
                                }

                            </View>

                            {globelFeature?.pdfDataP?.exclusivefeature[0] && <Text style={styles.subheading2}>{globelFeature?.pdfDataP?.sumAssured?.CompanyName} - Exclusive Features  </Text>}


                            {globelFeature?.pdfDataP?.exclusivefeature[0] && <View style={styles.table}>
                                <View style={styles.tableRow}>
                                    <Text style={styles.tableColHeadeFN}>Features</Text>
                                    <Text style={styles.tableColHeadeFD}>Detail</Text>


                                </View>
                                {
                                    globelFeature?.pdfDataP?.exclusivefeature?.map((item, index) => {
                                        return <View key={index} style={styles.tableRow}>
                                            <Text style={styles.tableColFN}>{item?.exclusiveFeatureName}</Text>
                                            <Text style={styles.tableColFD}>{item?.exclusiveFeatureDetail}</Text>
                                        </View>
                                    })
                                }

                            </View>}
                        </View>}
                        {globelFeature?.pdfDataS?.sumAssured?.CompanyName && <View style={styles.section}>
                            <Text style={styles.subheading2}>Comparison Table <Text style={styles.colorSecondry}> {globelFeature?.pdfDataP?.sumAssured?.CompanyName} </Text> Vs <Text style={styles.colorSecondry}> {globelFeature?.pdfDataS?.sumAssured?.CompanyName}</Text> </Text>
                            <View style={styles.table}>
                                <View style={styles.tableRow}>
                                    <Text style={styles.tableColHeader}>Features</Text>
                                    <Text style={styles.tableColHeader}>{globelFeature?.pdfDataP?.sumAssured?.CompanyName}</Text>
                                    <Text style={styles.tableColHeader}>{globelFeature?.pdfDataS?.sumAssured?.CompanyName}</Text>


                                </View>
                                {globelFeature?.pdfDataP?.features?.map((item, index) => (<View key={index} style={styles.tableRow}>
                                    <Text style={styles.tableCol}>{item?.name}</Text>
                                    <Text style={styles.tableCol}>{item?.value ? item?.value : "NA"}</Text>
                                    <Text style={styles.tableCol}>{globelFeature?.pdfDataS?.features[index]?.value ? globelFeature?.pdfDataS?.features[index]?.value : "NA"}</Text>
                                </View>))}


                            </View>
                            {globelFeature?.pdfDataP?.exclusivefeature[0] && <Text style={styles.subheading2}>{globelFeature?.pdfDataP?.sumAssured?.CompanyName} - Exclusive Features  </Text>}

                            {globelFeature?.pdfDataP?.exclusivefeature[0] && <View style={styles.table}>
                                <View style={styles.tableRow}>
                                    <Text style={styles.tableColHeadeFN}>Features</Text>
                                    <Text style={styles.tableColHeadeFD}>Detail</Text>


                                </View>
                                {
                                    globelFeature?.pdfDataP?.exclusivefeature?.map((item, index) => {
                                        return <View key={index} style={styles.tableRow}>
                                            <Text style={styles.tableColFN}>{item?.exclusiveFeatureName}</Text>
                                            <Text style={styles.tableColFD}>{item?.exclusiveFeatureDetail}</Text>
                                        </View>
                                    })
                                }

                            </View>}
                        </View>}

                        <Text style={styles.bottomMark}>www.enivesh.co.in</Text>

                    </Page>
                </Document>
            </PDFViewer>


            <PDFDownloadLink document={
                <Document  >
                    <Page size={"A4"} style={styles.page}>
                        <Image style={styles.logo} src="images/eniveshicon/Enivesh_Insurance_LOGO.png" />

                        <View style={styles.section}>
                            <Image style={styles.image} src="/images/homepage/herosection.png" />
                            <Text style={styles.headingBold}>ENIVESH INSURANCE </Text>
                            <Text style={styles.subheading}>Mediclaim Policy </Text>
                            <Text style={styles.subQuote}>Non-Binding Quote</Text>
                            <Text style={styles.titleName} >{globelForm ? globelForm[0]?.selfname : ""}</Text>
                            <Text style={styles.subheading} >Portability for Mediclaim</Text>
                        </View>
                        <View style={styles.section}>
                            <View style={styles.box2}>
                                <View style={styles.caption}>
                                    <Text style={styles.caption}><Text style={styles.colordarkBroun}>ENIVESH Insurance Marketing Pvt Ltd. </Text>
                                        #1103, Paras business centre,Kasturba road number 1. Near Kasturba police station, Borivali East. Mumbai -400066,</Text>

                                    <Text style={styles.caption}><Text style={styles.colorDark}>IRDAI Registration number : </Text> IMF186245250320160013 ,</Text>
                                    <Text style={styles.caption}>
                                        <Text style={styles.colorDark}>Valid Till : </Text> 22 Mar 2025 ,
                                        <Text style={styles.colorDark}>Financial CIN Number : </Text> U74140MH2014OPC260267
                                    </Text>
                                    <Text style={styles.caption}><Text style={styles.colorDark}>Email: </Text>service@enivesh.com , <Text style={styles.colorDark}>WhatsApp : </Text> +919324374807</Text>

                                </View>
                            </View>
                        </View>
                        <Text style={styles.bottomMark}>www.enivesh.co.in</Text>
                    </Page>

                    <Page size={"A4"} style={styles.page}>
                        <View style={styles.section}>

                            <Text style={styles.subheading} >Self Details</Text>
                            <View style={styles.flexSectionm1}>
                                <View style={styles.box50}>
                                    <Text style={styles.subtitle2} >Name : </Text>
                                    <Text style={styles.selfLavel}>{globelForm ? globelForm[0]?.selfname : ""} </Text>

                                </View>
                                <View style={styles.box50}>
                                    <Text style={styles.subtitle2}>Gender : </Text>
                                    <Text style={styles.selfLavel}>{globelForm && globelForm[0]?.gender}</Text>
                                </View>
                                <View style={styles.box50}>
                                    <Text style={styles.subtitle2}>Age : </Text>
                                    <Text style={styles.selfLavel}>{globelForm && globelForm[0]?.age} </Text>
                                </View>
                                <View style={styles.box50}>
                                    <Text style={styles.subtitle2}>Number : </Text>
                                    <Text style={styles.selfLavel}>{globelForm && globelForm[0]?.phone}</Text>
                                </View>
                                <View style={styles.box50}>
                                    <Text style={styles.subtitle2}>City Name : </Text>
                                    <Text style={styles.selfLavel}>{globelForm && globelForm[0]?.city?.name}</Text>
                                </View>
                                <View style={styles.box50}>
                                    <Text style={styles.subtitle2}>Pincode : </Text>
                                    <Text style={styles.selfLavel}>{globelForm && globelForm[0]?.city?.pincode}</Text>
                                </View>
                                <View style={styles.box50}>
                                    <Text style={styles.subtitle2}>Email : </Text>
                                    <Text style={styles.selfLavel}>{globelForm && globelForm[0]?.email ? globelForm[0]?.email : "NA"}</Text>
                                </View>
                            </View>

                            <View style={styles.flexSectionmNoneB}>
                                <View style={styles.box}>
                                    <Text style={styles.subtitle2} >Self Family</Text>
                                    <Text style={styles.subtitle2} >Total Members : <Text style={styles.subdis2}>{globelForm?.length}</Text></Text>

                                </View>
                                {globelForm && globelForm?.map((item, index) => {
                                    return <View key={index} style={styles.box50Desgn}>

                                        <Text style={styles.subdis2}>{item?.name} </Text>
                                        <View style={styles.box50Designitem}>
                                            <Text style={styles.subtitle2} >Age : </Text>
                                            <Text style={styles.subdis2}>{item?.age} </Text>
                                        </View>
                                    </View>
                                })}



                            </View>
                            <View style={styles.section}>
                                <Image style={styles.fullWidthimage} src={"images/pdfimages/fullfamily.png"} />
                            </View>
                        </View>
                        <Text style={styles.bottomMark}>www.enivesh.co.in</Text>

                    </Page>

                    <Page size={"A4"} style={styles.page} >

                        <View style={styles.section}>
                            <Text style={styles.subtitle2}>Dear {globelForm ? globelForm[0]?.selfname : ""},</Text>
                            <Text style={styles.subdis2}>We are writing to you today to introduce our company as your trusted insurance broker and to present a comprehensive health insurance proposal tailored to your specific needs. With years of experience in the insurance industry, I am committed to providing you with expert guidance and personalized solutions that safeguard your health and financial well-being.</Text>
                        </View>
                        <View style={styles.section}>
                            <Text style={styles.subtitle2}>Understanding Your Needs</Text>
                            <Text style={styles.subdis2}>At the heart of our approach is a deep understanding of your unique circumstances and healthcare requirements. We recognize that each individual and family has distinct needs, and we strive to tailor our recommendations accordingly. By carefully assessing your medical history, lifestyle factors, and budget considerations, we can identify the most suitable health insurance plan that aligns with your priorities.</Text>
                        </View>
                        <View style={styles.section}>
                            <Text style={styles.subtitle2}>Tailored Health Insurance Solutions</Text>
                            <Text style={styles.subdis2}>We offer a wide range of health insurance plans from multiple insurance companies, ensuring that you have access to comprehensive coverage options that meet your specific needs. Whether you seek individual, family, or group health insurance, we will guide you through the intricacies of each plan, highlighting the benefits, coverage limits, and exclusions. Our goal is to empower you with the knowledge and understanding to make informed decisions about your health insurance coverage.</Text>
                        </View>
                        <View style={styles.section}>
                            <Text style={styles.subtitle2}>In addition to helping you choose the right health insurance plan, we can also help you with the following:</Text>
                            <Text style={styles.list2}>1. Enrolling in your plan</Text>
                            <Text style={styles.list2}>2. Filing claims</Text>
                            <Text style={styles.list2}>3. Understanding your benefits</Text>
                            <Text style={styles.list2}>4. Making changes to your plan</Text>
                        </View>
                        <View style={styles.section}>
                            <Text style={styles.subtitle2}>Your Health, Our Priority</Text>
                            <Text style={styles.subdis2}>We believe that everyone deserves access to quality healthcare and financial protection against unforeseen medical expenses. By partnering with us, you can rest assured that your health and well-being are our top priorities. We are committed to providing you with personalized, expert guidance and advocating for your best interests in the complex world of health insurance.</Text>
                            <Text style={styles.subdis2}>Thank you for considering our services. We look forward to the opportunity to serve as your trusted insurance broker and to help you secure the comprehensive health insurance coverage you deserve.</Text>
                            <Text style={styles.subdis2}>Sincerely, </Text>
                        </View>
                        <Image src={"/images/pdfimages/irda.png"} />


                        <Text style={styles.bottomMark}>www.enivesh.co.in</Text>

                    </Page>





                    <Page size={"A4"} style={styles.page}>
                        <View style={styles.section}>
                            <Text style={styles.subheading}>Premium Table for Mediclaim Plan</Text>
                            <View style={styles.table}>
                                <View style={styles.tableRow}>
                                    <Text style={styles.tableColHeader}>COMPANY</Text>
                                    <Text style={styles.tableColHeader}>SUM ASSURED</Text>
                                    <Text style={styles.tableColHeader}>PREMIUM</Text>

                                </View>
                                <View style={styles.tableRow}>
                                    <Text style={styles.tableCol}>{globelFeature?.pdfDataP?.sumAssured?.CompanyName}</Text>
                                    <Text style={styles.tableCol}>{globelFeature?.pdfDataP?.sumAssured?.SumAssured}</Text>
                                    <Text style={styles.tableCol}>{globelFeature?.pdfDataP?.sumAssured?.Premium}</Text>
                                    {globelFeature?.pdfDataS?.sumAssured?.CompanyName ? "" : <Text style={styles.tableMessege}>Premium inclusive of GST *</Text>}


                                </View>
                                {globelFeature?.pdfDataS?.sumAssured?.CompanyName && <View style={styles.tableRow}>
                                    <Text style={styles.tableCol}>{globelFeature?.pdfDataS?.sumAssured?.CompanyName}</Text>
                                    <Text style={styles.tableCol}>{globelFeature?.pdfDataS?.sumAssured?.SumAssured}</Text>
                                    <Text style={styles.tableCol}>{globelFeature?.pdfDataS?.sumAssured?.Premium}</Text>
                                    <Text style={styles.tableMessege}>Premium inclusive of GST *</Text>
                                </View>}
                            </View>
                        </View>
                        {globelFeature?.pdfDataS?.sumAssured?.CompanyName ? "" : <View style={styles.section}>
                            <Text style={styles.subheading2}>{globelFeature?.pdfDataP?.sumAssured?.CompanyName} Health Features</Text>
                            <View style={styles.table}>
                                <View style={styles.tableRow}>
                                    <Text style={styles.tableColHeadeFN}>Features</Text>
                                    <Text style={styles.tableColHeadeFD}>Detail</Text>


                                </View>
                                {
                                    globelFeature?.pdfDataP?.features?.map((item, index) => {
                                        return <View key={index} style={styles.tableRow}>
                                            <Text style={styles.tableColFN}>{item?.name}</Text>
                                            <Text style={styles.tableColFD}>{item?.value}</Text>
                                        </View>
                                    })
                                }

                            </View>

                            {globelFeature?.pdfDataP?.exclusivefeature[0] && <Text style={styles.subheading2}>{globelFeature?.pdfDataP?.sumAssured?.CompanyName} - Exclusive Features  </Text>}


                            {globelFeature?.pdfDataP?.exclusivefeature[0] && <View style={styles.table}>
                                <View style={styles.tableRow}>
                                    <Text style={styles.tableColHeadeFN}>Features</Text>
                                    <Text style={styles.tableColHeadeFD}>Detail</Text>


                                </View>
                                {
                                    globelFeature?.pdfDataP?.exclusivefeature?.map((item, index) => {
                                        return <View key={index} style={styles.tableRow}>
                                            <Text style={styles.tableColFN}>{item?.exclusiveFeatureName}</Text>
                                            <Text style={styles.tableColFD}>{item?.exclusiveFeatureDetail}</Text>
                                        </View>
                                    })
                                }

                            </View>}
                        </View>}
                        {globelFeature?.pdfDataS?.sumAssured?.CompanyName && <View style={styles.section}>
                            <Text style={styles.subheading2}>Comparison Table <Text style={styles.colorSecondry}> {globelFeature?.pdfDataP?.sumAssured?.CompanyName} </Text> Vs <Text style={styles.colorSecondry}> {globelFeature?.pdfDataS?.sumAssured?.CompanyName}</Text> </Text>
                            <View style={styles.table}>
                                <View style={styles.tableRow}>
                                    <Text style={styles.tableColHeader}>Features</Text>
                                    <Text style={styles.tableColHeader}>{globelFeature?.pdfDataP?.sumAssured?.CompanyName}</Text>
                                    <Text style={styles.tableColHeader}>{globelFeature?.pdfDataS?.sumAssured?.CompanyName}</Text>


                                </View>
                                {globelFeature?.pdfDataP?.features?.map((item, index) => (<View key={index} style={styles.tableRow}>
                                    <Text style={styles.tableCol}>{item?.name}</Text>
                                    <Text style={styles.tableCol}>{item?.value ? item?.value : "NA"}</Text>
                                    <Text style={styles.tableCol}>{globelFeature?.pdfDataS?.features[index]?.value ? globelFeature?.pdfDataS?.features[index]?.value : "NA"}</Text>
                                </View>))}


                            </View>
                            {globelFeature?.pdfDataP?.exclusivefeature[0] && <Text style={styles.subheading2}>{globelFeature?.pdfDataP?.sumAssured?.CompanyName} - Exclusive Features  </Text>}

                            {globelFeature?.pdfDataP?.exclusivefeature[0] && <View style={styles.table}>
                                <View style={styles.tableRow}>
                                    <Text style={styles.tableColHeadeFN}>Features</Text>
                                    <Text style={styles.tableColHeadeFD}>Detail</Text>


                                </View>
                                {
                                    globelFeature?.pdfDataP?.exclusivefeature?.map((item, index) => {
                                        return <View key={index} style={styles.tableRow}>
                                            <Text style={styles.tableColFN}>{item?.exclusiveFeatureName}</Text>
                                            <Text style={styles.tableColFD}>{item?.exclusiveFeatureDetail}</Text>
                                        </View>
                                    })
                                }

                            </View>}
                        </View>}

                        <Text style={styles.bottomMark}>www.enivesh.co.in</Text>

                    </Page>
                </Document>
            } fileName={"helth_insurance_www.enivesh.co.in_AN.pdf"}>
                {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download PDF')}
            </PDFDownloadLink>
        </div>
    );
};

export default HTMLToPDF;
