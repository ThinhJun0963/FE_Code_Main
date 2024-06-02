import React from 'react'
import UserLayout from '../../components/UserLayout'
import PaginatedClinicList from './components/PaginatedClinicList'

const ClinicList = () => {
  return (
    <UserLayout>
      <PaginatedClinicList />
    </UserLayout>
  )
}

export default ClinicList


// import React, { useState, useEffect } from 'react';
// import { Container, List, ListItem, ListItemText, Button, Box, Typography } from '@mui/material';

// const itemsPerPage = 5; // Number of items per page

// const ListWithPagination = () => {
//     const [items, setItems] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [totalPages, setTotalPages] = useState(1);

//     // Sample data fetching simulation
//     useEffect(() => {
//         // Simulate fetching data from an API
//         const fetchData = () => {
//             const sampleItems = Array.from({ length: 30 }, (_, index) => `Item ${index + 1}`);
//             setItems(sampleItems);
//             setTotalPages(Math.ceil(sampleItems.length / itemsPerPage));
//         };

//         fetchData();
//     }, []);

//     const handlePreviousPage = () => {
//         setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
//     };

//     const handleNextPage = () => {
//         setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
//     };

//     const getPaginatedItems = () => {
//         const startIndex = (currentPage - 1) * itemsPerPage;
//         const endIndex = startIndex + itemsPerPage;
//         return items.slice(startIndex, endIndex);
//     };

//     return (
//         <Container>
//             <Typography variant="h4" gutterBottom>Paginated List</Typography>
//             <List>
//                 {getPaginatedItems().map((item, index) => (
//                     <ListItem key={index}>
//                         <ListItemText primary={item} />
//                     </ListItem>
//                 ))}
//             </List>
//             <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
//                 <Button variant="contained" onClick={handlePreviousPage} disabled={currentPage === 1}>
//                     Previous
//                 </Button>
//                 <Typography>Page {currentPage} of {totalPages}</Typography>
//                 <Button variant="contained" onClick={handleNextPage} disabled={currentPage === totalPages}>
//                     Next
//                 </Button>
//             </Box>
//         </Container>
//     );
// };

// export default ListWithPagination;
