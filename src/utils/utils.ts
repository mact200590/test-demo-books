export const titleConvert = (title: string) => {
    // return s.charAt(0).toUpperCase() + s.slice(1)
  const result = title.charAt(0).toUpperCase() + title.toLowerCase().slice(1);
  console.log("result", result, "result");
  return result
};
