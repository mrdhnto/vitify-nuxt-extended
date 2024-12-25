import NodeCache from 'node-cache';

export default defineNitroPlugin((nitroApp) => {
  if(!Object.keys(nitroApp.h3App).includes('nodeCache')) nitroApp.h3App.nodeCache = new NodeCache({ stdTTL: 60 * 5 });
});