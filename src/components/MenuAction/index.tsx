import MoreIcon from '~/assets/svgs/more.svg?react';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PenIcon from '~/assets/svgs/pen.svg?react';
import LockIcon from '~/assets/svgs/lock.svg?react';
import CloseIcon from '~/assets/svgs/close.svg?react';

interface MenuActionProps {
  data?: any[];
  index?: number;
}

export const MenuAction: React.FC<MenuActionProps> = ({ index = 0, data }) => {
  console.log('🚀 ~ index:', index);
  const [anchorEls, setAnchorEls] = useState<Array<null | HTMLElement>>(
    Array(data?.length).fill(null)
  );

  const openMenu = (index: number) => Boolean(anchorEls[index]);

  const handleClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
    const newAnchorEls = [...anchorEls];
    newAnchorEls[index] = event.currentTarget;
    setAnchorEls(newAnchorEls);
  };

  const handleClose = (index: number) => {
    const newAnchorEls = [...anchorEls];
    newAnchorEls[index] = null;
    setAnchorEls(newAnchorEls);
  };

  const handleItemAction =
    (action: string, index: number) => (event: React.MouseEvent) => {
      // Handle the specific actions
      switch (action) {
        case 'edit':
          console.log('Edit item', index);
          break;
        case 'disable':
          console.log('Disable item', index);
          break;
        case 'change-password':
          console.log('Change password for item', index);
          break;
        default:
          break;
      }
      handleClose(index);
    };

  const items = [
    {
      key: 1,
      title: 'Sửa',
      icon: <PenIcon />,
      onClick: handleItemAction('edit', index),
    },
    {
      key: 2,
      title: 'Vô Hiệu Hoá',
      icon: <CloseIcon />,
      onClick: handleItemAction('disable', index),
    },
    {
      key: 3,
      title: 'Đổi Mật Khẩu',
      icon: <LockIcon />,
      onClick: handleItemAction('change-password', index),
    },
  ];

  return (
    <div>
      <IconButton
        aria-label="more"
        id={`basic-button-${index}`}
        aria-controls={openMenu(index) ? `basic-menu-${index}` : undefined}
        aria-expanded={openMenu(index) ? 'true' : undefined}
        aria-haspopup="true"
        onClick={(event) => handleClick(event, index)}
      >
        <MoreIcon />
      </IconButton>
      <Menu
        id={`basic-menu-${index}`}
        anchorEl={anchorEls[index]}
        open={openMenu(index)}
        onClose={() => handleClose(index)}
        MenuListProps={{
          'aria-labelledby': 'actions-button',
        }}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              padding: '0 8px',
              borderRadius: '14px',
              mt: 0.5,
              paddingX: '5px',
              boxShadow:
                '0px 1px 2px 0px rgba(0, 0, 0, 0.30), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
            },
          },
        }}
        sx={{
          '& .MuiList-root.MuiMenu-list': {
            paddingY: '5px',
          },
        }}
        transformOrigin={{
          horizontal: 'right',
          vertical: 'top',
        }}
        anchorOrigin={{
          horizontal: 'right',
          vertical: 'bottom',
        }}
      >
        {items.map((item) => (
          <MenuItem
            key={item.key}
            className="flex items-center gap-3"
            onClick={item.onClick}
          >
            {item.icon} {item.title}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};
