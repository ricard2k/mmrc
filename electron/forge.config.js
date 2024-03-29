module.exports = {
  packagerConfig: {
    name: "mmrc",
    executableName: "mmrc",
    appCopyright: "This application is open source. Help us in https://github.com/ricard2k/modern-model-railways-controler",
    overwrite: "yes",
    appCategoryType: "public.app-category.entertainment",
    icon: "./electron/icons/mmrc",
    osxSign: {
      identity: "Developer ID Application: Ricardo Peironcely (92G3X5LFNN)",
      "hardened-runtime": true,
      entitlements: "./electron/entitlements.plist",
      "entitlements-inherit": "./electron/entitlements.plist",
      "signature-flags": "library",
    },
    osxNotarize: {
      tool: "notarytool",
      appleApiKey: process.env.APPLE_NOTARIZE_KEY,
      appleApiKeyId: process.env.APPLE_NOTARIZE_KEY_ID,
      appleApiIssuer: process.env.APPLE_NOTARIZE_KEY_ISSUER,
    },
  },
  makers: [
    {
      name: "@electron-forge/maker-deb",
      config: {
        options: {
          icon: "./electron/icons/mmrc.png",
        },
      },
    },
    {
      name: "@electron-forge/maker-dmg",
      config: {
        format: "ULFO",
        overwrite: true
      },
    },
    {
      name: "@electron-forge/maker-squirrel",
      config: {
        makeVersionWinStoreCompatible: true,
      }
    },
  ],
  publishers: [
    {
      name: "@electron-forge/publisher-github",
      config: {
        repository: {
          owner: "ricard2k",
          name: "mmrc",
        },
        prerelease: true,
        tagPrefix: "v",
      },
    },
  ],
};
