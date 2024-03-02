export default function clsx(...classNames: (string | undefined)[]) {
  return classNames.filter((c) => c).join(" ");
}
