type Props = {
  imageLink: string;
  height: string;
  width: string;
};

const Image = ({ imageLink, height, width }: Props) => {
  return (
    <>
      <img src={imageLink} alt="image" height={height} width={width} />
    </>
  );
};

export default Image;
