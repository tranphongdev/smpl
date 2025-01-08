import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import LoginIcon from '~/assets/svgs/login.svg?react';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import IconButton from '@mui/material/IconButton';
import { InputAdornment } from '@mui/material';
import { webRoutes } from '~/routes/web';

const Login = () => {
  const [isPasswordShown, setIsPasswordShown] = React.useState(false);
  return (
    <div className="w-4/6 text-center">
      <form action="" autoComplete="off" noValidate className="space-y-6 mb-16">
        <h3 className="text-center font-bold text-3xl text-primary-600">
          Đăng Nhập
        </h3>
        <TextField fullWidth label="Tên Tài Khoản" variant="outlined" />
        <TextField
          type={`${isPasswordShown ? 'text' : 'password'}`}
          fullWidth
          label="Mật Khẩu"
          variant="outlined"
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setIsPasswordShown(!isPasswordShown)}
                  >
                    {isPasswordShown ? (
                      <VisibilityOutlinedIcon />
                    ) : (
                      <VisibilityOffOutlinedIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
        <div className="text-right text-primary-600 cursor-pointer">
          <Link to={webRoutes.forgotPassword}>Quên Mật Khẩu ?</Link>
        </div>
      </form>
      <Button variant="contained" startIcon={<LoginIcon />} className="w-40">
        Đăng Nhập
      </Button>
    </div>
  );
};

export default Login;
