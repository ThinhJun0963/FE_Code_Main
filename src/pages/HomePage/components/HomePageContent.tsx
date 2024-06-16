import { SearchIcon } from "@chakra-ui/icons";
import { Box, Button, IconButton, InputBase, Typography } from "@mui/material";
import Carousel from "../../../components/Carousel/Carousel";
import clinics from "../../../utils/mockData";
import Accordion from "./Accordion/Accordion";
import FeaturesAndBenefits from "./FeatureAndBenefits/FeatureAndBenefits";
import React, { SetStateAction, useState } from "react";
import { useNavigate } from 'react-router-dom';

interface clinicService {
  serviceId: string;
  serviceName: string;
}

interface Clinic {
  clinic_id: number;
  logo: '';
  images: [];
  imageToShow: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  open_hour: string;
  close_hour: string;
  description: string;
  services: clinicService[];
}

const HomePageContent = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearchTerm(event.target.value);
  };
  

  const handleSearchSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    navigate(`/clinics?search=${searchTerm}`);
  };

  const handleKeyPress = (event: React.KeyboardEvent) => { 
    if (event.key === 'Enter') {
      navigate(`/clinics?search=${searchTerm}`);
    }
  }

  const transformedClinics = clinics.map(clinic => ({
    id: clinic.clinic_id, 
    image: clinic.imageToShow,
    title: clinic.name,
    description: clinic.address
}));

  return (
    <Box sx={{ marginTop: '1%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
      <Box sx={{ position: 'absolute', right: '125px', top: 0, marginTop: '-150px', width: '50%' }}>
        <Box sx={{ backgroundColor: ' #ffffff', width: '100%', borderRadius: '10px', display: 'flex', alignItems: 'center', padding: '10px' }}>
          <InputBase
            value={searchTerm}
            onChange={handleSearchChange}
            //--------------------------------------
            onKeyPress={handleKeyPress}
            //--------------------------------------
            placeholder="Tìm kiếm phòng khám"
            inputProps={{ 'aria-label': 'search' }}
            sx={{ flex: 1, paddingLeft: '10px' }}
          />
          <IconButton type="submit" aria-label="search" onClick={handleSearchSubmit} sx={{ color: '#000' }}>
            <SearchIcon />
          </IconButton>
        </Box>
      </Box>

      <Box sx={{ width: "70%", marginTop: "1em", textAlign: "right", display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Typography variant="h3" component="div" gutterBottom sx={{}}>
          Các phòng khám nổi bật
        </Typography>
        <Button
          variant="contained"
          href='/clinics'
          sx={{
            backgroundColor: "#1975dc",
            color: "#fff",
            width: "auto",
            borderRadius: "5px",
          }}
        >
          Xem tất cả &gt;&gt;
        </Button>
      </Box>

      <Box sx={{ width: "70%", marginTop: ".25em", marginBottom: "5em" }}>
        <Carousel items={transformedClinics} />
      </Box>

      <Box sx={{ width: "70%", marginTop: "2em", textAlign: "center" }}>
        <Typography variant="h3" component="div" gutterBottom>
          Câu hỏi thường gặp
        </Typography>
      </Box>

      <Box sx={{ width: "70%", marginTop: "2em", marginBottom: "5em" }}>
        <Accordion />
      </Box>

      <Box sx={{ width: "70%", marginTop: "2em", marginBottom: "5em" }}>
        <FeaturesAndBenefits />
      </Box>
    </Box>
  );
};

export default HomePageContent;
