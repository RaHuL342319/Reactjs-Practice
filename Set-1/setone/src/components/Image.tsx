type Props = {
  caption: string;
  imageLink: string;
};

const Image = ({ caption, imageLink }: Props) => {
  return (
    <div style={{ border: "1px solid blue" }}>
      <img
        src={imageLink}
        alt={caption}
        style={{ width: "100%", height: "auto", display: "block" }}
      />
      <p style={{ backgroundColor: "black", color: "white", padding: "0px" }}>
        {caption}
      </p>
    </div>
  );
};

export default Image;
