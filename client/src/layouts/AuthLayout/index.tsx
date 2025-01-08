import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Logo from '~/assets/images/lenz.png';
import { Outlet } from 'react-router-dom';
import AuthThumb from '~/assets/images/auth.png';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const AuthLayout = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  return (
    <div className="flex w-screen h-screen bg-white">
      <div className="w-2/5 h-full">
        <img
          src={AuthThumb}
          alt="auth"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-3/5 px-6 mt-6">
        <div className="flex justify-end">
          <Select
            className="w-40"
            value={age}
            onChange={handleChange}
            IconComponent={ExpandMoreIcon}
            displayEmpty
          >
            <MenuItem value="">Tiếng Việt</MenuItem>
            <MenuItem value={20}>English</MenuItem>
          </Select>
        </div>
        <div className="flex flex-col items-center gap-6 mt-5 mb-20">
          <img src={Logo} alt="logo" />
          <h1 className="text-4xl font-bold text-primary-600">
            Hệ Thống Quản Lý Chiếu Sáng Thông Minh
          </h1>
        </div>
        <div className="flex flex-col items-center">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
