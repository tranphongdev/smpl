import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import Logo from '~/assets/images/main-logo.png';

interface HeaderProps {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({
  sidebarOpen,
  setSidebarOpen,
}) => {
  return (
    <header className="sticky top-0 z-999 flex w-full bg-white border-b border-gray-500">
      <div className="flex flex-grow items-center lg:justify-end justify-between px-4 h-16">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          {/* <!-- Hamburger Toggle BTN --> */}
          <IconButton
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              setSidebarOpen(!sidebarOpen);
            }}
          >
            <MenuOutlinedIcon />
          </IconButton>
          {/* <!-- Hamburger Toggle BTN --> */}

          <Link className="block flex-shrink-0 lg:hidden" to="/">
            <img src={Logo} alt="logo" width={120} />
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-base font-medium">English</span>
            <IconButton>
              <LanguageOutlinedIcon />
            </IconButton>
          </div>
          <IconButton>
            <NotificationsNoneIcon />
          </IconButton>
          <IconButton>
            <PersonOutlineOutlinedIcon />
          </IconButton>
          <IconButton>
            <LoginOutlinedIcon />
          </IconButton>
        </div>
      </div>
    </header>
  );
};
