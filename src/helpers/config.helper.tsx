const config = () => {
  const config: any = (window as any).Config;
  if (config == undefined) {
    return {
      ...process.env
    };
  }
  return {
    ...config
  };
};

export default config;
