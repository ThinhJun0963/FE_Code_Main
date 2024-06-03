import { SearchIcon } from "@chakra-ui/icons";
import { Box, Button, IconButton, InputBase, Typography } from "@mui/material";
import Carousel from "../../../components/Carousel/Carousel";
import clinics from "./data";
import Accordion from "./Accordion/Accordion";
import FeaturesAndBenefits from "./FeatureAndBenefits/FeatureAndBenefits";
import { SetStateAction, useState } from "react";
import { useNavigate } from 'react-router-dom';

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

  return (
    <Box
      sx={{
        marginTop: "5%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box>
        <Typography variant="h2" component="div" gutterBottom>
          Ứng dụng đặt khám
        </Typography>
        <Typography variant="h5" component="div" gutterBottom>
          Đặt khám với hơn 100 phòng khám trên SmileCare để có số thứ tự và
          khung giờ khám trước.
        </Typography>
        <form onSubmit={handleSearchSubmit}>
          <Box
            sx={{
              backgroundColor: " #ffffff",
              width: "100%",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <InputBase
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Tìm kiếm theo tên, địa chỉ phòng khám"
              inputProps={{ "aria-label": "search" }}
              sx={{ flex: 1, paddingLeft: "10px" }}
            />
            <IconButton
              type="submit"
              aria-label="search"
              sx={{ color: "#000" }}
            >
              <SearchIcon />
            </IconButton>
          </Box>
        </form>
      </Box>

      <Box sx={{ width: "80%", marginTop: "2em", textAlign: "right" }}>
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

      <Box sx={{ width: "80%", marginTop: "1em", marginBottom: "5em" }}>
        <Carousel items={clinics} />
      </Box>

      <Box sx={{ width: "80%", marginTop: "2em", textAlign: "center" }}>
        <Typography variant="h3" component="div" gutterBottom>
          Câu hỏi thường gặp
        </Typography>
      </Box>

      <Box sx={{ width: "50%", marginTop: "2em", marginBottom: "5em" }}>
        <Accordion />
      </Box>

      <Box sx={{ width: "80%", marginTop: "2em", marginBottom: "5em" }}>
        <FeaturesAndBenefits />
      </Box>
    </Box>
  );
};

export default HomePageContent;
