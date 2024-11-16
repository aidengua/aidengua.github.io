hexo.on("ready", () => {
  const { version } = require("../../package.json");
  hexo.log.info(`
  ===================================================================
                                                                     
                BOOTING AIDEN_JK'S WEBSITE SERVER!
                            
                            ${version}
  ===================================================================`);
});
