import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Skillcard from "./Skillcard";
import data from "./data/skilldata";
import data2 from "./data/skilldata2";
import tooldata from "./data/Toolsdata";
import tooldata2 from "./data/Toolsdata2";
import BuildIcon from '@mui/icons-material/Build';
import CodeIcon from '@mui/icons-material/Code';
import framework from "./data/librarydata";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGears } from "@fortawesome/free-solid-svg-icons";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Skills() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{p:{xs:"10% 5%",md:"5% 10%"}}} id="Skills">
      <Typography
        variant="h3"
        sx={{ textAlign: "center", color: "#edede8"}}
      >
        Skills
      </Typography>
      <Box sx={{ borderBottom: 1, borderColor: "divider",}}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          style={{ color: "hsla(41, 100%, 50%, 0.89)" }}
          textColor="inherit"
          TabIndicatorProps={{
            style: { backgroundColor: "hsla(41, 100%, 50%, 0.89)" },
          }}
          centered
          // sx={{p:{xs:"12px 4px", md:"16px"} }}
        >
          <Tab label="Languages" icon={<CodeIcon />} iconPosition="start" {...a11yProps(0)} />
          <Tab label="Framework" icon={<FontAwesomeIcon icon={faGears} />} iconPosition="start" {...a11yProps(1)} />
          <Tab label="Tools" icon={<BuildIcon />} iconPosition="start" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Typography variant="h6" sx={{ color: "#edede8", textAlign: "center" }}>
          Programming Languages that I have learnt over the years
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-evenly",
          }}
        >
          <Box>
            {data.map((data) => (
              <Skillcard label={data.label} icon={data.icon} />
            ))}
          </Box>
          <Box>
            {data2.map((data) => (
              <Skillcard label={data.label} icon={data.icon} />
            ))}
          </Box>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography variant="h6" sx={{ color: "#edede8", textAlign: "center" }}>
          Library and framework I prefer to work with
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-evenly",
          }}
        >
          <Box>
            {framework.slice(0,2).map((data) => (
              <Skillcard label={data.label} icon={data.icon} />
            ))}
          </Box>
          <Box>
            {framework.slice(2,).map((data) => (
              <Skillcard label={data.label} icon={data.icon} />
            ))}
          </Box>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography variant="h6" sx={{ color: "#edede8", textAlign: "center" }}>
          Tools I use everyday
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-evenly",
          }}
        >
          <Box>
            {tooldata.map((data) => (
              <Skillcard label={data.label} icon={data.icon} />
            ))}
          </Box>
          <Box>
            {tooldata2.map((data) => (
              <Skillcard label={data.label} icon={data.icon} />
            ))}
          </Box>
        </Box>
      </TabPanel>
    </Box>
    
  );
}
