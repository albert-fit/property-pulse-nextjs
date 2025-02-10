const InfoBox = ({
  children,
  heading,
  backgroundColor = "bg-gray-100",
  textColor = "text-gray-800",
  buttonInfo,
}) => {
  return (
    <div className={`p-6 rounded-lg shadow-md ${backgroundColor}`}>
      <h2 className={`text-2xl font-bold ${textColor}`}>{heading}</h2>
      <p className="mt-2 mb-4">{children}</p>
      <a
        href={buttonInfo.link}
        className={`inline-block ${buttonInfo.backgroundColor} text-white rounded-lg px-4 py-2 hover:bg-gray-700`}
      >
        {buttonInfo.text}
      </a>
    </div>
  );
};

export default InfoBox;
