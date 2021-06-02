const sendPayload = (callback, context, payload) => {
  if (context && "isLoading" in context) {
    context.isLoading = true;
    try {
      callback(payload);
      //TODO: Notifications logic
    } catch (error) {
      console.log(error);
    } finally {
      context.isLoading = false;
    }
  }
};

export default sendPayload;
