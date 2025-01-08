import { DataTable, MenuAction } from '~/components';
import { ColumnsType } from '~/types';
import { IUser } from '~/types/users';

const ListAccount = () => {
  const data = [
    {
      id: '1',
      fullName: 'Alice',
      userName: 'alice123',
      phone: '1234567890',
      email: 'alice@example.com',
      role: 'Admin',
      status: 'Active',
    },
    {
      id: '2',
      fullName: 'Bob',
      userName: 'bob456',
      phone: '0987654321',
      email: 'bob@example.com',
      role: 'User',
      status: 'Inactive',
    },
  ];

  const columns: ColumnsType[] = [
    {
      title: 'STT',
      key: 'stt',
      width: 78,
      render: (row: IUser) => <a>{row.id}</a>,
    },
    {
      title: 'Tên Người Dùng',
      key: 'fullName',
      width: 146,
      render: (row: IUser) => <a>{row.fullName}</a>,
    },
    {
      title: 'Tên Tài Khoản',
      key: 'userName',
      width: 133,
      render: (row: IUser) => <a>{row.userName}</a>,
    },
    {
      title: 'Số Điện Thoại',
      key: 'phone',
      width: 133,
      render: (row: IUser) => <a>{row.phone}</a>,
    },
    {
      title: 'Email',
      key: 'email',
      width: 210,
      render: (row: IUser) => <a>{row.email}</a>,
    },
    {
      title: 'Vai Trò',
      key: 'role',
      width: 78,
      render: (row: IUser) => <a>{row.role}</a>,
    },
    {
      title: 'Trạng Thái',
      key: 'status',
      width: 78,
      render: (row: IUser) => <a>{row.status}</a>,
    },
    {
      title: 'Thao Tác',
      key: 'action',
      width: 78,
      render: (row: IUser, index: number) => (
        <MenuAction data={data} index={index} />
      ),
    },
  ].filter(Boolean) as ColumnsType[];

  const status = {
    [Status.ACTIVE]: 'text-primary-600',
    [Status.INACTIVE]: 'text-gray-500',
    [Status.DISABLED]: 'Disabled',
  };

  return (
    <div>
      <DataTable<IUser> data={data} columns={columns} />
    </div>
  );
};

export default ListAccount;
