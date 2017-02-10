/**
 * Gets a remote vendor script.
 */

module.exports = function getVendorScript(vendor) {
  const script = {
    'DoubleClick Studio': 'https://s0.2mdn.net/ads/studio/Enabler.js',
    Sizmek: 'https://secure-ds.serving-sys.com/BurstingScript/EBLoader.js'
  };

  return script[vendor];
};
