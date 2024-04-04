import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import { Alert, Container, Paper, Snackbar, Stack } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
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
import AutoExcel from '../test/AutoExcel';
import { child, get, getDatabase, ref } from 'firebase/database';

const steps = ["Category", "Company ", "Features", "Plans", "Features", "Previews"];



const sumassuredPortal = () => {
    const navigate = useNavigate();
    const [xlxsDataFloat, setXlxsDataFloat] = useState([]);
    const [xlxsDataInd, setXlxsDataInd] = useState([]);
    const [postMsg, setPostMsg] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [sheetNumberInd, setSheetNubmerInd] = useState(null)
    const [sheetNumberFloat, setSheetNubmerFloat] = useState(null)
    const [sheetNumberf, setSheetNubmerf] = useState(null)
    const [xlxsFeatures, setXlxsFeatures] = useState([]);
    const [newXlsxData, setNewXlsxData] = useState([]);
    const userData = localStorage.getItem("loginUser")
    const useUser = JSON.parse(userData);
    const [user, setUserData] = useState(useUser);
    useEffect(() => {
        if (user?.role === "Admin") {
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
    const [isPlan, setIsPlans] = useState("");
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
    const [categories, setCategories] = useState();
    const [comp, setComp] = useState();
    const [planVal, setPlansVal] = useState();
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
        let catVal = categories.find(x => x.name === personName[0])
        let compVal = comp.find(x => x.id === companyName[0])
        let preTypeVal = preType.find(x => x.id === premTypeVal[0])



    }


    const handleChangeCat = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
        let catVal = categories?.find(x => x?.name === value)
        setComp(catVal);
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
                setActiveStep(5);
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
        const data = [];
        const dbRef = ref(getDatabase());
        get(child(dbRef, `categories`)).then((snapshot) => {
            if (snapshot.exists()) {
                snapshot.forEach((doc) => {
                    data.push(doc.val());
                })

                localStorage.setItem("categories", JSON.stringify(data))

            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });


    }

    const handdleCompany = async () => {



    }
    const handdleAddCompany = async () => {



    }

    const handdlePretype = async () => {

    }

    const handdleAddPretype = async () => {
        // let exist = planVal?.find(x => x.name.toUpperCase() === newInputPremTypeVal.name.toUpperCase())
        // if (!exist) {
        //     const q = query(collection(db, "sumassured", personName[0], "companys", companyName[0], "plans"));

        //     const querySnapshot = await addDoc(q, newInputPremTypeVal);
        //     setNewInputPremTypeVal("")
        //     setState({ ...state, open: true, msg: "Added...!", type: "success" });
        //     setBooleanPt(!booleanPt)

        // } else {
        //     setNewInputPremTypeVal("")
        //     setBooleanPt(!booleanPt)
        //     setState({ ...state, open: true, msg: "Already exist", type: "error" });

        // }



    }


    const handdleAddAgeVal = async () => {

        // if () {
        //     setState({ ...state, open: true, msg: "Coverage & Premium Added Successfuly..!", type: "success" });

        // } else {
        //     setState({ ...state, open: true, msg: "Server Not Responced..!", type: "error" });
        // }



    }





    useEffect(() => {
        const catData = localStorage.getItem("categories");
        const catlocal = JSON.parse(catData)
        if (!catlocal) {
            handdleCategory();
        } else {
            setCategories(catlocal)
        }


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

    const handleFileUploadFloat = async (e) => {

        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const sheetName = workbook.SheetNames[sheetNumberFloat];
            const sheet = workbook.Sheets[sheetName];
            const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
            const headers = jsonData[0];
            const formattedData = jsonData.slice(1).map((row, index) => {
                const obj = {
                    sid: index + 1,
                    company: row[0],
                    planName: row[1],
                    person: row[2], // Assuming person is in the second column
                    age: row[3], // Assuming age is in the first column
                    coverage: headers.slice(4).map((header, index) => ({
                        coverage: header,
                        premium: row[index + 4]
                    }))
                };
                return obj;
            });
            const newFormat = FirejsonFormat(formattedData)
            console.log(newFormat);
            setState({ ...state, open: true, msg: `File Selected Neme :  ${file.name} Sheet No. : ${sheetNumberFloat} No. of Item ${formattedData?.length}`, type: "success" });

        };
        reader.readAsArrayBuffer(file);


    };

    const FirejsonFormat = (data) => {

        const sdw = data.map((item, index) => {

            const [minAge, maxAge] = item.age.match(/\d+/g).map(Number);

            if (item) {
                return {
                    sid: index + 1,
                    companyNam: item.company,
                    planNam: item.planName,
                    minAge: minAge ? minAge : 1,
                    maxAge: maxAge ? maxAge : "above",
                    member: item.person,
                    coverages: item.coverage

                }
            }

        })
        return sdw;

    }



    const handlCheckData = (item) => {
        // console.log(item);
        // if (item.minAge === undefined, item.maxAge === undefined || item.member === undefined) {

        //     setState({ ...state, open: true, msg: `Excel File Not Supported`, type: "error" });

        // } else {
        //     setState({ ...state, open: true, msg: `Excel File Supported`, type: "success" });

        //     setActiveStep(3)


        // }

    }

    const handlCheckDataFeature = (item) => {
        if (item.featureName === undefined || item.featureValue === undefined) {

            setState({ ...state, open: true, msg: `Excel File Not Supported`, type: "error" });

        } else {
            setState({ ...state, open: true, msg: `Excel File Supported`, type: "success" });

            setActiveStep(5)


        }

    }

    useEffect(() => {
        if (xlxsDataFloat && xlxsDataFloat.length > 0 || xlxsFeatures && xlxsFeatures.length > 0) {

            if (xlxsDataFloat.length > 0) {

                xlxsDataFloat.forEach((item) => handlCheckData(item));
            } else {
                if (xlxsFeatures.length > 0) {
                    xlxsFeatures.forEach((item) => handlCheckDataFeature(item));

                }
            }




        } else {
            if (sheetNumberFloat) {
                setState({ ...state, open: true, msg: `Sheet Number ${sheetNumberFloat} Not Exists`, type: "error" });
            }
            if (sheetNumberf) {
                setState({ ...state, open: true, msg: `Sheet Number ${sheetNumberf} Not Exists`, type: "error" });
            }

        }
    }, [xlxsDataFloat])

    ////excel Feature Data
    const handleFeatureFileUpload = async (e) => {

        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const sheetName = workbook.SheetNames[sheetNumberf];
            const sheet = workbook.Sheets[sheetName];
            const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
            // const headers = jsonData[0];
            const formattedData = jsonData.slice(1).map((row, index) => {
                const obj = {
                    sid: index + 1,
                    companyNam: row[0],
                    planNam: row[1],
                    feautueNam: row[2], // Assuming person is in the second column
                    FeatureDetails: row[3], // Assuming age is in the first column

                };
                return obj;
            });
            setXlxsFeatures(formattedData)
            setState({ ...state, open: true, msg: `File Selected Neme :  ${file.name} Sheet No. : ${sheetNumberFloat} No. of Item ${formattedData?.length}`, type: "success" });
        };
        reader.readAsArrayBuffer(file);













    };


    const onSheetValInd = (e) => {
        let value = e.target.value;
        setSheetNubmerInd(value)
    }
    const onSheetValFloat = (e) => {
        let value = e.target.value;
        setSheetNubmerFloat(value)
    }
    const onSheetValf = (e) => {
        let value = e.target.value;
        setSheetNubmerf(value)
    }

    const parseIntData = (data) => {
        const sdw = data.map((item, index) => {

            if (index >= 1) {
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
            } else {
                return {
                    sid: item.sn,
                    age: item.ageBand,
                    member: item.members,
                    covrage50: parseInt(item.covrage50),
                    covrage25: parseInt(item.covrage25),
                    covrage1cr: parseInt(item.covrage1cr)
                }
            }

        })
        console.log(data);
        return sdw;
    }

    const uploadEachItemFloat = async (item) => {
        // const featureRef = (collection(db, "sumassured", personName[0], "companys", companyName[0], "plans", isPlan, "floater"));
        // try {
        //     const featureSnapshot = await addDoc(featureRef, item);
        //     setState({ ...state, open: true, msg: `Added Successfuly Docs Id ${featureSnapshot.id}`, type: "success" });
        //     setPostMsg(true);
        //     if (featureSnapshot.id) {
        //         setActiveStep(0);
        //     }

        // } catch (error) {
        //     console.error('Error adding document: ', error);
        // }

    };
    const uploadEachItemFeature = async (item) => {
        // const featureRef = (collection(db, "sumassured", personName[0], "companys", companyName[0], "features"));
        // try {

        //     const featureSnapshot = await addDoc(featureRef, item);
        //     setState({ ...state, open: true, msg: `Added Successfuly Docs Id ${featureSnapshot.id}`, type: "success" });
        //     setPostMsg(true);
        //     if (featureSnapshot.id) {
        //         setActiveStep(0);
        //     }
        // } catch (error) {
        //     console.error('Error adding document: ', error);
        // }
    };

    const handleExcelUpload = async () => {

        if (xlxsDataFloat) {
            xlxsDataFloat.forEach((item) => uploadEachItemFloat(item));
        } else {
            setState({ ...state, open: true, msg: `Feature Excel File Not Select...!`, type: "error" });

        }
        if (xlxsFeatures) {
            xlxsFeatures.forEach((item) => uploadEachItemFeature(item));
        } else {
            setState({ ...state, open: true, msg: `Feature Excel File Not Select...!`, type: "error" });

        }


    }


    // Features funcition ----------------------------------
    const handdleFeaturePost = async () => {



    }

    const handdleFeatureChange = (e) => {
        const {
            target: { value, name },
        } = e;
        setFeature({ ...feature, [name]: value });


    }

    const FeachFeatureData = async () => {

    }



    const handdleEdit = async (id) => {



    }

    const handleUpdate = async () => {


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
                <Stack flexDirection={"row"} flexWrap={"wrap"}>

                    <Box sx={{ width: "100%" }}>

                        {activeStep === 0 && <Category data={categories} onChange={handleChangeCat} value={personName} />}
                        {activeStep === 0 && <Company onActive={() => setBooleanCom(!booleanCom)} boolean={booleanCom} onAdd={handdleAddCompany} data={comp} onChange={handleChangeComp} value={companyName} />}
                    </Box>
                    <Box sx={{ width: "100%" }}>

                        {activeStep === 0 && <Features SheetVal={sheetNumberf} onFile={handleFeatureFileUpload} onSheetVal={onSheetValf} data={featureData} onChange={(e) => handdleFeatureChange(e)} onPost={handdleFeaturePost} value={feature} onStateUpdate={featureId} onEdit={handdleEdit} onUpdate={handleUpdate} updateItem={updateFeature} />}
                        {activeStep === 0 && <PremiumType SelectedOption={planVal} IsSelectedVal={isPlan} onSelected={(e) => setIsPlans(e.target.value)} SheetValInd={sheetNumberInd} SheetValFloat={sheetNumberFloat} onFileFloat={handleFileUploadFloat} onExcelUpload={handleExcelUpload} isLoading={isLoading} onSheetValFloat={onSheetValFloat} onSheetValInd={onSheetValInd} value={premTypeVal} onActive={() => setBooleanPt(!booleanPt)} boolean={booleanPt} onAdd={handdleAddPretype} addFieldVal={newInputPremTypeVal[0]} onChange={handleChangePretype} />}
                    </Box>
                    <Button disabled variant='contained' sx={{ m: "0 auto", width: "50%" }} >Submit</Button>





                </Stack>



            </Container>

        </Wrapper>
    )
}

export default sumassuredPortal
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