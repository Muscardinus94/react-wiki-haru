type Props = {
  height: number;
};

export const Spacing = ({ height }: Props) => {
  return <div style={{ height, width: '100%' }}></div>;
};
