import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import { Alert, Container, Paper, Snackbar } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { query } from 'firebase/database';
import { db } from '../../Firebase/Firebase';
import { addDoc, collection, doc, getDocs, setDoc, updateDoc } from 'firebase/firestore';
import Category from './PortalElements/Category';
import Company from './PortalElements/Company';
import PremiumType from './PortalElements/PremiumType';
import CoveragePremium from './PortalElements/CoveragePremium';
import Features from './PortalElements/Features';
import PortalSummary from './PortalElements/PortalSummary';
import * as XLSX from 'xlsx';
import ChechUser from './ChechUser';
import FilterTable from './PortalElements/FilterTable';
import PDFGenerator from './PdfGenarator';

const steps = ["Category", "Company ", " Premium Type", "Coverage & Premium", "Features", "Previews"];



const SumAssuredPortal = () => {
    const navigate = useNavigate();
    const [xlxsData, setXlxsData] = useState([]);
    const [postMsg, setPostMsg] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [sheetNumber, setSheetNubmer] = useState(null)
    const [sheetNumberf, setSheetNubmerf] = useState(null)
    const [xlxsFeatures, setXlxsFeatures] = useState();
    const [newXlsxData, setNewXlsxData] = useState([]);
    const userData = localStorage.getItem("loginUser")
    const useUser = JSON.parse(userData);
    const [user, setUserData] = useState(useUser);
    useEffect(() => {
        if ((user?.email === "amannishad1443@gmail.com") || (user?.email === "babasaheb.kadam@gmail.com") || (user?.email === "baba@enivesh.com") || (user?.email === "office@enivesh.com") || (user?.email === "service@enivesh.com")) {
            return;
        } else {

            navigate('/')
        }
    }, [])
    const [state, setState] = useState({
        open: false,
        vertical: 'bottom',
        horizontal: 'center',
        msg: "",
        type: "error"
    });


    const { vertical, horizontal, open, msg, type } = state;
    const [disabled, setDisabled] = useState(true);

    const [personName, setPersonName] = useState([]);
    const [companyName, setCompanyName] = React.useState([]);
    const [premTypeVal, setPremTypeVal] = React.useState();
    const [ageVal, setAgeVal] = React.useState({});
    const [booleanCom, setBooleanCom] = React.useState();
    const [booleanPt, setBooleanPt] = React.useState();
    const [postIndex, setIndex] = useState();
    const [featureId, setFeatureId] = useState();
    // const [maxAgeVal, setMaxAgeVal] = React.useState();

    const [cat, setCat] = useState();
    const [comp, setComp] = useState();
    const [preType, setPreType] = useState();
    const [covePre, setCovePre] = useState();
    const [feature, setFeature] = useState({});
    const [updateFeature, setUpdateFeature] = useState();
    const [preview, setPreview] = useState();


    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set());

    const [featureData, setFeaturesData] = useState();


    //new field added state ===================

    const [newInputPremTypeVal, setNewInputPremTypeVal] = useState("")
    const [newCompanyNameVal, setNewCompanyNameVal] = useState()
    const [formData, setFormData] = useState([]);



    const handlePreview = () => {
        let catVal = cat.find(x => x.id === personName[0])
        let compVal = comp.find(x => x.id === companyName[0])
        let preTypeVal = preType.find(x => x.id === premTypeVal[0])

        var data = {
            Category: catVal?.category.toUpperCase(),
            Company: compVal?.name.toUpperCase(),
            PremiumType: preTypeVal?.name.toUpperCase(),
            MinAge: ageVal?.minAge,
            MaxAge: ageVal?.maxAge,
            sumAssured: formData,
            // sumAssured: xlxsData,
            feature: featureData,
            // feature: xlxsFeatures,



        }
        setPreview(data)

    }


    const handleChangeCat = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
        setDisabled(false)
    };

    const handleChangeComp = (event) => {
        const {
            target: { value, name },
        } = event;
        setCompanyName(
            typeof value === 'string' ? value.split(',') : value,
        );
        if (name === "newitem") {
            setNewCompanyNameVal({ name: value })
        }
        if (companyName === "") {
            setDisabled(true)

        } else {
            setDisabled(false)

        }

    };
    const handleChangePretype = (event) => {
        const {
            target: { value, name },
        } = event;
        setPremTypeVal(
            typeof value === 'string' ? value.split(',') : value,
        );
        if (name === "newitem") {
            setNewInputPremTypeVal({ name: value })
        }
        if (premTypeVal === "") {
            setDisabled(true)

        } else {
            setDisabled(false)

        }

    };


    const handleChangeAge = (event) => {
        const {
            target: { value, name },
        } = event;

        if (value.length <= 2) {
            setAgeVal({ ...ageVal, [name]: value });
            setState({ ...state, open: true, msg: `Age  ${value}  years Accepted ...!`, type: "success" });

        } else {
            setState({ ...state, open: true, msg: `Age ${value}years is Not Accept`, type: "error" });

        }


    }

    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };


    const handleNext = (e) => {
        let newSkipped = skipped;

        switch (activeStep) {
            case 0: {
                if (!companyName) {
                    setDisabled(true)
                } else {
                    setDisabled(true)
                }
                handdleCompany()

            }

                break;
            case 1: {

                setDisabled(false)
                handdlePretype()
            }
            case 2: {

                if (ageVal && formData) {
                    setDisabled(true)
                }
            }

                break;
            case 3: {
                FeachFeatureData();

                if (featureData) {
                    setDisabled(false)
                }
            }

                break;
            case 4: {
                handlePreview();
            }
                break;
            default:

                break;
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);

    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        if ((ageVal && formData) || preType || companyName || featureData) {
            setDisabled(false)
        }


    };


    const handdleCategory = async () => {
        const q = query(collection(db, "sumassured"));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({
            ...doc.data(), id: doc.id

        }))
        setCat(data);


    }

    const handdleCompany = async () => {
        const q = query(collection(db, "sumassured", personName[0], "companys"));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({
            ...doc.data(), id: doc.id

        }))
        setComp(data);



    }
    const handdleAddCompany = async () => {
        const q = query(collection(db, "sumassured", personName[0], "companys"));

        let exist = comp.find(x => x.name.toUpperCase() === newCompanyNameVal.name.toUpperCase())
        if (!exist) {
            const querySnapshot = await addDoc(q, newCompanyNameVal);
            setState({ ...state, open: true, msg: "Added...!", type: "success" });
            setBooleanCom(false)
        } else {
            setBooleanCom(false)
            setState({ ...state, open: true, msg: "Already exist", type: "error" });

        }


    }

    const handdlePretype = async () => {
        const q = query(collection(db, "sumassured", personName[0], "companys", companyName[0], "premiumtype"));

        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({
            ...doc.data(), id: doc.id

        }))
        setPreType(data);

    }

    const handdleAddPretype = async () => {
        let exist = preType?.find(x => x.name.toUpperCase() === newInputPremTypeVal.name.toUpperCase())
        if (!exist) {
            const q = query(collection(db, "sumassured", personName[0], "companys", companyName[0], "premiumtype"));

            const querySnapshot = await addDoc(q, newInputPremTypeVal);
            setNewInputPremTypeVal("")
            setState({ ...state, open: true, msg: "Added...!", type: "success" });
            setBooleanPt(!booleanPt)

        } else {
            setNewInputPremTypeVal("")
            setBooleanPt(!booleanPt)
            setState({ ...state, open: true, msg: "Already exist", type: "error" });

        }



    }


    const handdleAddAgeVal = async () => {
        const ageRef = (collection(db, "sumassured", personName[0], "companys", companyName[0], "premiumtype", premTypeVal[0], "data"));
        const ageValSnapshot = await addDoc(ageRef, {
            minAge: ageVal.minAge,
            maxAge: ageVal.maxAge,
            sumassured: await formData
        });

        let vdi = (ageValSnapshot.id);
        if (vdi) {
            setState({ ...state, open: true, msg: "Coverage & Premium Added Successfuly..!", type: "success" });

        } else {
            setState({ ...state, open: true, msg: "Server Not Responced..!", type: "error" });
        }



    }

    const handleAddCovandPre = async () => {
        let id = postIndex - 1;


    }



    useEffect(() => {
        handdleCategory();
    }, [])


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setState({ ...state, open: false, msg: "" });
    };




    const handleAddInput = () => {
        setFormData([...formData, { premium: '', coverage: '' }]);
    };

    const handleChangeCavPre = (e, index) => {
        const { name, value } = e.target;
        const newFormData = [...formData];
        newFormData[index] = { ...newFormData[index], [name]: value };
        setFormData(newFormData);
        setIndex(index)


        if (formData[0].premium === "" || formData[0].coverage === "" || formData.length <= 0) {
            setDisabled(true)
        } else {
            setDisabled(false)
        }
    };

    const handleRemoveInput = (index) => {
        const newFormData = [...formData];
        newFormData.splice(index, 1);
        setFormData(newFormData);
    };

    //upload excel file -----------------------------


    ////excel Coverage and Premium 
    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            const result = event.target.result;
            let dataArray = [];
            if (file.name.endsWith('.xlsx') || file.name.endsWith('.xls')) {
                const workbook = XLSX.read(result, { type: 'binary' });
                const sheetName = workbook.SheetNames[sheetNumber];
                const sheet = workbook.Sheets[sheetName];
                const rows = XLSX.utils.sheet_to_json(sheet, { header: 1, raw: true });
                dataArray = rows.slice(1).map((row, index) => {
                    return {
                        sn: index + 1,
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
            setXlxsData(dataArray);
            setState({ ...state, open: true, msg: `File Selected Neme :  ${file.name} Sheet No. : ${sheetNumber}`, type: "success" });
        };
        reader.readAsBinaryString(file);
        setActiveStep(4)

    };
    ////excel Feature Data
    const handleFeatureFileUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            const result = event.target.result;
            let dataArray = [];
            if (file.name.endsWith('.xlsx') || file.name.endsWith('.xls')) {
                const workbook = XLSX.read(result, { type: 'binary' });
                const sheetName = workbook.SheetNames[sheetNumberf];
                const sheet = workbook.Sheets[sheetName];
                const rows = XLSX.utils.sheet_to_json(sheet, { header: 1, raw: true });
                dataArray = rows.slice(1).map((row, index) => {
                    return {
                        sn: index + 1,
                        featureName: row[0],
                        featureValue: row[1],


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
            setXlxsFeatures(dataArray);
            parseIntData();
            setState({ ...state, open: true, msg: `File Selected Name :${file.name} Sheet No. : ${sheetNumberf}`, type: "success" });


        };
        reader.readAsBinaryString(file);


        setActiveStep(5)

    };


    const onSheetVal = (e) => {
        let value = e.target.value;
        setSheetNubmer(value)
    }
    const onSheetValf = (e) => {
        let value = e.target.value;
        setSheetNubmerf(value)
    }

    const parseIntData = () => {
        const sdw = xlxsData.map((item) => {
            const [minAge, maxAge] = item.ageBand.match(/\d+/g).map(Number);
            return {
                sid: item.sn,
                minAge: minAge ? minAge : 1,
                maxAge: maxAge ? maxAge : "above",
                member: item.members,
                covrage50: parseInt(item.covrage50),
                covrage25: parseInt(item.covrage25),
                covrage1cr: parseInt(item.covrage1cr)
            }
        })
        setNewXlsxData(sdw)
    }

    const uploadEachItem = async (item) => {
        const featureRef = (collection(db, "sumassured", personName[0], "companys", companyName[0], "coveragePremium"));
        try {

            const featureSnapshot = await addDoc(featureRef, item);
            setState({ ...state, open: true, msg: `Added Successfuly Docs Id ${featureSnapshot.id}`, type: "success" });
            setPostMsg(true);
            if (featureSnapshot.id) {
                setActiveStep(0);
            }

        } catch (error) {
            console.error('Error adding document: ', error);
        }
    };
    const uploadEachItemFeature = async (item) => {
        const featureRef = (collection(db, "sumassured", personName[0], "companys", companyName[0], "features"));
        try {

            const featureSnapshot = await addDoc(featureRef, item);
            setState({ ...state, open: true, msg: `Added Successfuly Docs Id ${featureSnapshot.id}`, type: "success" });
            setPostMsg(true);
            if (featureSnapshot.id) {
                setActiveStep(0);
            }
        } catch (error) {
            console.error('Error adding document: ', error);
        }
    };

    const handleExcelUpload = async () => {
        // Add each item from the local array to Firestore
        if (newXlsxData) {
            newXlsxData.forEach((item) => uploadEachItem(item));

        } else {
            setState({ ...state, open: true, msg: `SumAssued Excel File Not Select...!`, type: "error" });

        }
        if (xlxsFeatures) {
            xlxsFeatures.forEach((item) => uploadEachItemFeature(item));
        } else {
            setState({ ...state, open: true, msg: `Feature Excel File Not Select...!`, type: "error" });

        }


    }


    // Features funcition ----------------------------------
    const handdleFeaturePost = async () => {
        const featureRef = (collection(db, "sumassured", personName[0], "companys", companyName[0], "features"));
        const featureSnapshot = await addDoc(featureRef, {
            name: feature.featureName,
            value: feature.featureValue
        });
        let id = featureSnapshot.id;
        setFeatureId(id)
        setFeature({})


    }

    const handdleFeatureChange = (e) => {
        const {
            target: { value, name },
        } = e;
        setFeature({ ...feature, [name]: value });


    }

    const FeachFeatureData = async () => {
        const q = query(collection(db, "sumassured", personName[0], "companys", companyName[0], "features"));

        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({
            ...doc.data(), id: doc.id

        }))
        setFeaturesData(data)
    }



    const handdleEdit = async (id) => {

        let ds = featureData.find(x => x.id === id)

        if (ds) {
            setDisabled(true)
            setUpdateFeature(ds);
            setFeature({
                featureName: ds.name,
                featureValue: ds.value,
                id: ds.id
            })
        }

    }

    const handleUpdate = async () => {
        const washingtonRef = doc(db, "sumassured", personName[0], "companys", companyName[0], "features", `${updateFeature.id}`);
        await updateDoc(washingtonRef, {
            name: feature.featureName,
            value: feature.featureValue
        });
        FeachFeatureData()
        setFeature({
            featureName: "",
            featureValue: ""
        })
        setUpdateFeature("");
        setDisabled(false)

    }






    // UseEffect funcition ----------------------------------


    useEffect(() => {
        if (booleanCom === false) {
            handdleCompany();
        }
        return;

    }, [booleanCom])
    useEffect(() => {
        if (comp) {
            handdlePretype();
        }
    }, [booleanPt])
    useEffect(() => {
        if (featureId) {
            FeachFeatureData()
            setDisabled(false)


        }

    }, [featureId])


    return (
        <Wrapper>
            <Container>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert
                        onClose={handleClose}
                        severity={type}
                        variant="filled"
                        sx={{ width: '100%' }}
                    >
                        {msg}
                    </Alert>
                </Snackbar>
                <Paper elevation={1}>
                    <Box sx={{ width: '100%', p: 1 }}>
                        <Mob>
                            <Stepper sx={{ p: 2, }} activeStep={activeStep}>
                                {steps.map((label, index) => {
                                    const stepProps = {};
                                    const labelProps = {};
                                    if (isStepOptional(index)) {
                                        labelProps.optional = (
                                            <Typography variant="caption"></Typography>
                                        );
                                    }
                                    if (isStepSkipped(index)) {
                                        stepProps.completed = false;
                                    }
                                    return (
                                        <Step key={label} {...stepProps}>
                                            <StepLabel {...labelProps}>{label}</StepLabel>
                                        </Step>
                                    );
                                })}
                            </Stepper>
                        </Mob>
                        {/* <Button onClick={handleExcelUpload}>Preview</Button> */}
                        {activeStep === 0 && <Category data={cat} onChange={handleChangeCat} value={personName} />}
                        {activeStep === 1 && <Company onActive={() => setBooleanCom(!booleanCom)} boolean={booleanCom} onAdd={handdleAddCompany} data={comp} onChange={handleChangeComp} value={companyName} />}
                        {activeStep === 2 && <PremiumType SheetVal={sheetNumber} onFile={handleFileUpload} onExcelUpload={handleExcelUpload} isLoading={isLoading} onSheetVal={onSheetVal} value={premTypeVal} onActive={() => setBooleanPt(!booleanPt)} boolean={booleanPt} onAdd={handdleAddPretype} addFieldVal={newInputPremTypeVal[0]} data={preType} onChange={handleChangePretype} />}
                        {activeStep === 3 && <CoveragePremium value={ageVal} onDelete={handleRemoveInput} data={formData} onChange={handleChangeAge} onGet={handleChangeCavPre} onPost={handleAddCovandPre} onAdd={handleAddInput} />}
                        {activeStep === 4 && <Features SheetVal={sheetNumberf} onFile={handleFeatureFileUpload} onSheetVal={onSheetValf} data={featureData} onChange={(e) => handdleFeatureChange(e)} onPost={handdleFeaturePost} value={feature} onStateUpdate={featureId} onEdit={handdleEdit} onUpdate={handleUpdate} updateItem={updateFeature} />}
                        {activeStep === 5 && <PortalSummary postMsg={postMsg} featureData={xlxsFeatures} xlxsData={newXlsxData} onPost={handleExcelUpload} data={preview} />}


                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            {activeStep === 5 && <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={() => setActiveStep(4)}
                                sx={{ mr: 1 }}
                            >
                                Back
                            </Button>}
                            {activeStep === 4 && <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={() => setActiveStep(2)}
                                sx={{ mr: 1 }}
                            >
                                Back
                            </Button>}
                            {activeStep <= 2 && <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                Back
                            </Button>}
                            <Box sx={{ flex: '1 1 auto' }} />

                            {(activeStep) <= (steps.length - 2) ? <Button disabled={disabled} onClick={(e) => handleNext()}>
                                Next
                            </Button> : ""}
                        </Box>

                    </Box>
                </Paper>
                <ChechUser />
                <PDFGenerator />



            </Container>

        </Wrapper>
    )
}

export default SumAssuredPortal
const Wrapper = styled.div`
width: 100%;
min-height: 100vh;
max-height: fit-content;
display: flex;
/* align-items: center; */
justify-content: center;
padding: 20px 0;

  
`;
const Mob = styled.div`
    display: none;

  @media (min-width: 1024px) {
    display: block;
    
  }
`;