import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Logo from '~/assets/images/lenz.png';
import { Outlet } from 'react-router-dom';
import AuthThumb from '~/assets/images/auth.png';

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
      <div className="w-3/5 px-6 mt-16">
        <div className="flex justify-end">
          <Select
            value={age}
            onChange={handleChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </div>
        <div className="flex flex-col items-center gap-6 mt-5 mb-20">
          <img src={Logo} alt="logo" />
          <h1>Hệ Thống Quản Lý Chiếu Sáng Thông Minh</h1>
        </div>
        <div className="flex flex-col items-center">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
