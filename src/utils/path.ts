const MODULE_SRC_PREFIX = '@/'
export function isModuleSrcPath(filepath: string) {
  return filepath.startsWith(MODULE_SRC_PREFIX)
}

export function moduleSrcPath(filepath: string) {
  return `${MODULE_SRC_PREFIX}${filepath}`
}

function isModuleRelativePath(filepath: string) {
  return ['./', '../'].some(prefix => filepath.startsWith(prefix))
}

export function moduleRelativePath(filepath: string) {
  if (isModuleRelativePath(filepath)) return filepath
  return `./${filepath}`
}

export function isNpmModule(modulePath: string) {
  return !(isModuleRelativePath(modulePath) || isModuleSrcPath(modulePath))
}
