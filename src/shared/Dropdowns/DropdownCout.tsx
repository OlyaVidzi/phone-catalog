import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const DropdownSort: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState<string>("8");

  const options = ["4", "8", "16", "all"];

  const handleChange = (event: SelectChangeEvent) => {
    const option = event.target.value;

    setValue(option);

    const params = new URLSearchParams(searchParams);

    params.set("perPage", option);
    params.set("page", "1");
    setSearchParams(params);
  };

  useEffect(() => {
    const perPage = searchParams.get("perPage") || "8";

    setValue(perPage);
  }, [searchParams]);

  return (
    <Box sx={{ minWidth: 150 }}>
      <FormControl fullWidth>
        <InputLabel id="perPage-select-label">
          Items on page
        </InputLabel>
        <Select
          labelId="perPage-select-label"
          id="perPage-select"
          value={value}
          label="Items on page"
          onChange={handleChange}>
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default DropdownSort;
