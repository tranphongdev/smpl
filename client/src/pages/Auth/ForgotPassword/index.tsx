import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ArrowBackIcon from '~/assets/svgs/arrow-back.svg?react';
import { Link } from 'react-router-dom';
import { webRoutes } from '~/routes/web';

const ForgotPassword = () => {
  return (
    <div className="w-4/6 text-center">
      <form action="" autoComplete="off" noValidate className="space-y-6 mb-16">
        <div className="w-8/12 flex items-center justify-between">
          <Link to={webRoutes.login}>
            <ArrowBackIcon />
          </Link>
          <h3 className="font-bold text-3xl text-primary-600">Quên Mật Khẩu</h3>
        </div>
        <TextField
          fullWidth
          label="Vui lòng nhập tên tài khoản để xác thực"
          variant="outlined"
        />
      </form>
      <Button variant="contained" className="w-32">
        Gửi
      </Button>
    </div>
  );
};

export default ForgotPassword;
