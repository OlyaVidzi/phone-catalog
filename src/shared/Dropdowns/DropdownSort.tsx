import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const DropdownSort: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState<string>("Newest");
  const options = ["Newest", "Alphabetically", "Cheapest"];

  const handleChange = (event: SelectChangeEvent) => {
    const option = event.target.value;

    setValue(option);

    const params = new URLSearchParams(searchParams);

    params.set("sort", option);
    setSearchParams(params);
  };

  useEffect(() => {
    const sort = searchParams.get("sort");

    if (sort && sort !== value) {
      setValue(sort);
    }
  }, [searchParams, value]);

  return (
    <div role="region" aria-label="Sort products">
      <Box sx={{ minWidth: 150 }}>
        <FormControl fullWidth>
          <InputLabel id="sort-select-label">Sort by</InputLabel>
          <Select
            labelId="sort-select-label"
            id="sort-select"
            value={value}
            label="Sort by"
            onChange={handleChange}
            aria-label="Select sorting option"
          >
            {options.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default DropdownSort;
