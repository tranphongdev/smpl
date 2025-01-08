export type ColumnsType = {
  key: string;
  title: string;
  width?: number;
  canSort?: boolean;
  render?: (row: any, index: number) => React.ReactNode;
};
