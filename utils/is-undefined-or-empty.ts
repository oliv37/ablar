export default function isUndefinedOrEmpty<T>(
  value?: T[]
): value is undefined | [] {
  return !value?.length;
}
