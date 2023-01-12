export type ImageInstanceNames = "brand";

export type ObjectInstanceNames = "uiCMSContent";

export type ExpectedFileKeys = "brand";

export type ExpectedObjectFileKeys = "uiCMSContent";

export const ImageKeysMap = new Map<ImageInstanceNames, ExpectedFileKeys>();
ImageKeysMap.set("brand", "brand");

export const ObjectKeysMap = new Map<
  ObjectInstanceNames,
  ExpectedObjectFileKeys
>();
ObjectKeysMap.set("uiCMSContent", "uiCMSContent");
