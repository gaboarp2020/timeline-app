const sendPayload = async (callback, context, payload = null) => {
  let error = false;
  if (context && "isLoading" in context) {
    context.isLoading = true;
    try {
      await callback(payload);
    } catch (e) {
      console.log(e);
      error = true;
    } finally {
      context.isLoading = false;
    }
    return { error };
  }
};

export default sendPayload;
