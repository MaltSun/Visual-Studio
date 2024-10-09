import React, { useState } from "react";
import {
  Avatar,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Radio,
  Switch,
  ToggleButton,
  TextField,
} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import CheckIcon from "@mui/icons-material/Check";
import "./Profile.css";
export default function Profile() {
  const [age, setAge] = useState("");
  const [value, setValue] = useState("male");
  const [selected, setSelected] = useState(false);
  const [photoUrl, setPhotoUrl] = useState(
    "data:image/jpeg;base64,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"
  ); // Дефолтное фото профиля

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };

  const handleDelete = () => {
    console.log("Photo deleted");
    setPhotoUrl("https://via.placeholder.com/150");
  };

  const label = { inputProps: { "aria-label": "Switch demo" } };

  return (
    <div className="profileSection">
      <div className="photoSection">
        <Avatar
          alt="photo"
          src={photoUrl}
          style={{ width: 150, height: 150 }}
        />
        <Chip
          label="Удалить фото"
          onClick={handleDelete}
          deleteIcon={<DoneIcon />}
        />
        <FormControl className="Age" fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
            defaultValue="19"
          >
            <MenuItem value={10}>20</MenuItem>
            <MenuItem value={20}>21</MenuItem>
            <MenuItem value={30}>22</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
        </FormControl>
        <div className="save">
          <p>Нажмите, чтобы сохранить</p>
          <ToggleButton
            value="check"
            selected={selected}
            onChange={() => {
              alert("Сохранено!");
            }}
          >
            <CheckIcon />
          </ToggleButton>
        </div>
      </div>
      <div className="textSection">
        <div className="InputName">
          <label className="label">Surname</label>
          <TextField defaultValue="Savoskin" />
          <label>Name</label>
          <TextField defaultValue="Roman" className="label" />
          <label>Email</label>
          <TextField defaultValue="ffffddd@gmail.com" className="label" />
        </div>
        <div className="switch">
          <p>Получать уведомления</p>
          <Switch {...label} />
        </div>
      </div>
    </div>
  );
}
