const sendPayload = (callback, context, payload) => {
  if (context && "isLoading" in context) {
    context.isLoading = true;
    try {
      callback(payload);
      context.isLoading = false;

      return true;
    } catch (error) {
      // console.log(error);
      context.isLoading = false;

      return false;
    }
  }
};

export default sendPayload;
