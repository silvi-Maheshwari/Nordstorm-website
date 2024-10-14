import React from 'react'
import { Grid, GridItem, List, ListItem, Text, Box, Button } from '@chakra-ui/react'
import { FaDownload } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg={"#f0f3f5"} marginTop={"3%"}>
      {/* Responsive grid layout */}
      <Grid
        templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(6, 1fr)" }} // 2 columns for mobile, 6 for desktop
        margin={"auto"}
        width={"90%"}
        padding={"40px"}
        gap={"10px"}
      >
        {/* First Column */}
        <GridItem>
          <Text fontWeight="bold" mb={2}>Download</Text>
          <List spacing={1}>
            <ListItem>Order Status</ListItem>
            <ListItem>Guest Returns</ListItem>
            <ListItem>Shipping & Return Policy</ListItem>
            <ListItem>Gift Cards</ListItem>
            <ListItem>Product Recalls</ListItem>
            <ListItem>FAQ</ListItem>
            <ListItem>Contact Us</ListItem>
          </List>
        </GridItem>

        {/* Second Column */}
        <GridItem>
          <Text fontWeight="bold" mb={2}>Company</Text>
          <List spacing={1}>
            <ListItem>About Us</ListItem>
            <ListItem>About Our Brand</ListItem>
            <ListItem>The Nordy Club</ListItem>
            <ListItem>Store Locator</ListItem>
            <ListItem>All Brands</ListItem>
            <ListItem>Careers</ListItem>
            <ListItem>Get Email Updates</ListItem>
            <ListItem>Nordstrom Blog</ListItem>
            <ListItem>Nordy Podcast</ListItem>
            <ListItem>Store Openings</ListItem>
          </List>
        </GridItem>

        {/* Third Column */}
        <GridItem>
          <Text fontWeight="bold" mb={2}>Nordstrom Rack & the Community</Text>
          <List spacing={1}>
            <ListItem>Corporate Social Responsibility</ListItem>
            <ListItem>Diversity</ListItem>
            <ListItem>Big Brothers Big Sisters</ListItem>
            <ListItem>Donate Clothes</ListItem>
          </List>
        </GridItem>

        {/* Fourth Column */}
        <GridItem>
          <Text fontWeight="bold" mb={2}>Nordstrom Card</Text>
          <List spacing={1}>
            <ListItem>Nordstrom Card</ListItem>
            <ListItem>Pay My Bill</ListItem>
            <ListItem>Big Brothers</ListItem>
            <ListItem>Nordstrom Card</ListItem>
          </List>
        </GridItem>

        {/* Fifth Column */}
        <GridItem>
          <Text fontWeight="bold" mb={2}>More Info</Text>
          <List spacing={1}>
            <ListItem>Nordstrom</ListItem>
            <ListItem>HauteLook</ListItem>
            <ListItem>Investor Relations</ListItem>
            <ListItem>Nordstrom Media Network</ListItem>
          </List>
        </GridItem>

        {/* Sixth Column */}
        <GridItem>
          <Text fontWeight="bold" mb={2}>Apps</Text>
          <List spacing={1}>
            <ListItem display="flex" alignItems="center">
              <FaDownload style={{ marginRight: "8px" }} />
              Download Our Apps
            </ListItem>
            <ListItem>HauteLook</ListItem>
            <ListItem>Investor Relations</ListItem>
            <ListItem>Nordstrom Media Network</ListItem>
          </List>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Footer;
