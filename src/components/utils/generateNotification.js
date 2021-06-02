const generateNotification = (
  responseWithoutError,
  successContent,
  errorContent
) => {
  if (!responseWithoutError) {
    return {
      type: "error",
      content: errorContent,
    };
  }

  return {
    type: "success",
    content: successContent,
  };
};

export default generateNotification;
