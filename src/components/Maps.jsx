// eslint-disable-next-line react/prop-types
const Maps = ({width, height}) => {
  return (
    <div className="">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1202.9660262266893!2d78.08232049155984!3d9.882919533068762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cfc3bfdfebd7%3A0xedc5e8ad458361cf!2sDepartment%20of%20Computer%20Science%20and%20Engineering!5e0!3m2!1sen!2sin!4v1719869656923!5m2!1sen!2sin"
        width={width}
        height={height}
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Maps;
