const generateNotification = (error, successContent, errorContent) => {
  if (error) {
    return {
      type: "error",
      content: errorContent,
      time: new Date().toLocaleTimeString(),
    };
  }
  return {
    type: "success",
    content: successContent,
    time: new Date().toLocaleTimeString(),
  };
};

export default generateNotification;
